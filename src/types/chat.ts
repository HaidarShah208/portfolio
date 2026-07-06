export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

/** Minimal message shape accepted by the /api/chat endpoint. */
export interface ChatRequestMessage {
  role: ChatRole;
  content: string;
}

export interface ChatRequestBody {
  messages: ChatRequestMessage[];
}
