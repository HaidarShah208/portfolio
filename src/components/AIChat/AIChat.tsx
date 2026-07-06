"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import useChat from "@/hooks/useChat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import "./ai-chat.css";

const SUGGESTIONS = [
  "What does Ali do?",
  "Tell me about his experience",
  "What are his top skills?",
  "How can I hire Ali?",
];

const WELCOME =
  "Hi! I'm Ali's AI Portfolio Assistant. Ask me about his experience, projects, skills, AI expertise, services, or how to get in touch.";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isStreaming, error, sendMessage, stop } = useChat();

  const panelId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const lastAssistantStreaming =
    isStreaming &&
    messages.length > 0 &&
    messages[messages.length - 1].role === "assistant" &&
    !messages[messages.length - 1].content;

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages, lastAssistantStreaming, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 250);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const submit = useCallback(
    (value: string) => {
      const text = value.trim();
      if (!text || isStreaming) return;
      setInput("");
      void sendMessage(text);
    },
    [isStreaming, sendMessage]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 md:h-16 md:w-16"
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.i
              key="close"
              className="bx bx-x text-3xl"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          ) : (
            <motion.i
              key="chat"
              className="bx bx-message-rounded-dots text-2xl md:text-3xl"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-label="Ali's AI Portfolio Assistant"
            className="fixed bottom-24 right-3 left-3 z-[900] flex max-h-[75vh] flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:left-auto sm:right-5 sm:w-[400px] md:bottom-28"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <header className="flex items-center gap-3 border-b border-neutral-200 bg-white px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <i className="bx bx-bot text-xl" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-neutral-900">
                  Portfolio Assistant
                </p>
                <p className="flex items-center gap-1.5 text-xs text-neutral-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                  Ask about Ali
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <i className="bx bx-x text-2xl" />
              </button>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="ai-chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-4 py-3 text-sm leading-relaxed text-neutral-700">
                    {WELCOME}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}

              {lastAssistantStreaming && <TypingIndicator />}

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                >
                  {error}
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={onSubmit}
              className="border-t border-neutral-200 bg-white p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-neutral-300 bg-neutral-50 px-3 py-2 focus-within:border-neutral-900">
                <label htmlFor={`${panelId}-input`} className="sr-only">
                  Message the assistant
                </label>
                <textarea
                  id={`${panelId}-input`}
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Ask about Ali's work..."
                  className="max-h-28 flex-1 resize-none bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                />
                {isStreaming ? (
                  <button
                    type="button"
                    onClick={stop}
                    aria-label="Stop generating"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <i className="bx bx-stop text-xl" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <i className="bx bx-send text-lg" />
                  </button>
                )}
              </div>
              
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
