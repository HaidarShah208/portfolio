import React from "react";
import { motion } from "framer-motion";

function SkillsFallback() {
  return (
    <div
      className="flex h-[min(82vh,640px)] w-full items-center justify-center rounded-3xl border border-neutral-200 bg-neutral-50"
      role="status"
      aria-live="polite"
      aria-label="Loading skills globe"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-16 w-16 rounded-full border-2 border-neutral-200 border-t-neutral-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-sm font-medium tracking-wide text-neutral-500">
          Initializing skill universe...
        </p>
      </div>
    </div>
  );
}

export default SkillsFallback;
