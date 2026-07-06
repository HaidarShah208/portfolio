"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
      data-role={message.role}
    >
      <div
        className={[
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "rounded-br-md bg-neutral-900 text-white"
            : "rounded-bl-md border border-neutral-200 bg-white text-neutral-800",
        ].join(" ")}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          <div className="ai-chat-markdown break-words">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-neutral-900 underline underline-offset-2 hover:opacity-70"
                  />
                ),
                ul: ({ ...props }) => (
                  <ul {...props} className="my-2 list-disc space-y-1 pl-5" />
                ),
                ol: ({ ...props }) => (
                  <ol {...props} className="my-2 list-decimal space-y-1 pl-5" />
                ),
                p: ({ ...props }) => <p {...props} className="my-1.5" />,
                code: ({ ...props }) => (
                  <code
                    {...props}
                    className="rounded bg-neutral-100 px-1 py-0.5 text-[0.8em]"
                  />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
