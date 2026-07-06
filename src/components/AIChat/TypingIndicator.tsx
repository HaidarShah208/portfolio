"use client";

export default function TypingIndicator() {
  return (
    <div
      className="flex items-end justify-start gap-2"
      aria-label="Assistant is typing"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black text-white">
        <i className="bx bx-bot text-base" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-4 py-3 shadow-sm">
        <span className="ai-chat-dot" />
        <span className="ai-chat-dot [animation-delay:0.15s]" />
        <span className="ai-chat-dot [animation-delay:0.3s]" />
      </div>
    </div>
  );
}
