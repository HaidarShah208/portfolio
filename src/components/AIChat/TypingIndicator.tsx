"use client";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start" aria-label="Assistant is typing">
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-neutral-200 bg-white px-4 py-3">
        <span className="ai-chat-dot" />
        <span className="ai-chat-dot [animation-delay:0.15s]" />
        <span className="ai-chat-dot [animation-delay:0.3s]" />
      </div>
    </div>
  );
}
