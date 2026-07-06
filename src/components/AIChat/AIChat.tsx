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
        className={`fixed bottom-5 right-5 z-[900] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 md:h-16 md:w-16 ${
          isOpen
            ? "max-lg:pointer-events-none max-lg:scale-0 max-lg:opacity-0"
            : ""
        }`}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
      >
        {!isOpen && (
          <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-400" />
        )}
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
            className="fixed left-2 right-2 top-0.5 bottom-2 z-[900] flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/85 shadow-[0_24px_70px_-10px_rgba(0,0,0,0.45)] ring-1 ring-black/5 backdrop-blur-xl lg:left-auto lg:right-6 lg:top-auto lg:bottom-24 lg:h-[640px] lg:max-h-[82vh] lg:w-[420px]"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <header className="relative flex items-center gap-3 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-black px-4 py-3.5 text-white">
              <span className="pointer-events-none absolute -right-8 -top-12 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <i className="bx bx-bot text-xl" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-neutral-900 bg-green-400" />
              </span>
              <div className="relative min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight">
                  Portfolio Assistant
                </p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                   
                  Ask about Ali
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="relative ml-auto flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <i className="bx bx-x text-2xl" />
              </button>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="ai-chat-scroll min-h-0 flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-neutral-50 to-white px-4 py-4"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.length === 0 && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black text-white">
                      <i className="bx bx-bot text-lg" />
                    </span>
                    <div className="rounded-2xl rounded-tl-md border border-neutral-200 bg-white px-4 py-3 text-sm leading-relaxed text-neutral-700 shadow-sm">
                      {WELCOME}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-10">
                    {SUGGESTIONS.map((s, i) => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + i * 0.06 }}
                        className="rounded-full border border-neutral-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-neutral-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-neutral-900 hover:text-neutral-900 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
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
              className="border-t border-neutral-200 bg-white/90 p-3 backdrop-blur"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-neutral-300 bg-neutral-50 px-3 py-2 shadow-sm transition-colors focus-within:border-neutral-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-neutral-900/5">
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
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black text-white transition-all hover:shadow-md hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
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
