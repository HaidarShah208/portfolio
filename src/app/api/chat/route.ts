import { NextRequest } from "next/server";
import {
  buildSystemPrompt,
  getGeminiClient,
  GEMINI_MODEL,
} from "@/lib/gemini";
import type { ChatRequestBody, ChatRequestMessage } from "@/types/chat";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 4000;

function sanitizeMessages(input: unknown): ChatRequestMessage[] | null {
  if (!input || typeof input !== "object") return null;
  const { messages } = input as ChatRequestBody;
  if (!Array.isArray(messages) || messages.length === 0) return null;

  const cleaned: ChatRequestMessage[] = [];
  for (const msg of messages.slice(-MAX_MESSAGES)) {
    if (!msg || (msg.role !== "user" && msg.role !== "assistant")) continue;
    if (typeof msg.content !== "string") continue;
    const content = msg.content.trim().slice(0, MAX_CONTENT_LENGTH);
    if (!content) continue;
    cleaned.push({ role: msg.role, content });
  }

  return cleaned.length ? cleaned : null;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = sanitizeMessages(body);
  if (!messages) {
    return Response.json(
      { error: "A non-empty 'messages' array is required." },
      { status: 400 }
    );
  }

  let genai;
  try {
    genai = getGeminiClient();
  } catch {
    return Response.json(
      { error: "The assistant is not configured. Please try again later." },
      { status: 503 }
    );
  }

  const encoder = new TextEncoder();

  try {
    const geminiStream = await genai.models.generateContentStream({
      model: GEMINI_MODEL,
      config: {
        systemInstruction: buildSystemPrompt(),
        maxOutputTokens: 800,
      },
      contents: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    });

    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of geminiStream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[/api/chat] Gemini request failed:", err);
    return Response.json(
      { error: "Failed to generate a response. Please try again." },
      { status: 502 }
    );
  }
}
