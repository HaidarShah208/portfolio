"use client";

import { useCallback, useRef, useState } from "react";
import type { ChatMessage } from "@/types/chat";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const GENERIC_ERROR =
  "Something went wrong while reaching the assistant. Please try again in a moment.";

export interface UseChatResult {
  messages: ChatMessage[];
  isStreaming: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  stop: () => void;
  reset: () => void;
}

export function useChat(): UseChatResult {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsStreaming(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setMessages([]);
    setError(null);
  }, [stop]);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isStreaming) return;

      setError(null);

      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
      };
      const assistantId = createId();

      // Snapshot the history that we send to the API (excludes the empty assistant slot).
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      setMessages((prev) => [
        ...prev,
        userMessage,
        { id: assistantId, role: "assistant", content: "" },
      ]);
      setIsStreaming(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          let message = GENERIC_ERROR;
          try {
            const data = await res.json();
            if (data?.error) message = data.error;
          } catch {
            /* keep generic */
          }
          throw new Error(message);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: acc } : m
            )
          );
        }

        if (!acc.trim()) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: "I couldn't generate a response. Please try again." }
                : m
            )
          );
        }
      } catch (err) {
        if ((err as Error)?.name === "AbortError") {
          // User stopped the stream; leave whatever was streamed so far.
          return;
        }
        const message = err instanceof Error ? err.message : GENERIC_ERROR;
        setError(message);
        // Drop the empty assistant placeholder on failure.
        setMessages((prev) =>
          prev.filter((m) => !(m.id === assistantId && !m.content))
        );
      } finally {
        abortRef.current = null;
        setIsStreaming(false);
      }
    },
    [isStreaming, messages]
  );

  return { messages, isStreaming, error, sendMessage, stop, reset };
}

export default useChat;
