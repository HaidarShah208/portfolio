"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ChatMessage } from "@/types/chat";

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      className={`flex w-full items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
      data-role={message.role}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {!isUser && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black text-white">
          <i className="bx bx-bot text-base" />
        </span>
      )}
      <div
        className={[
          "max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
          isUser
            ? "rounded-br-md bg-gradient-to-br from-neutral-800 to-black text-white"
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
    </motion.div>
  );
}
