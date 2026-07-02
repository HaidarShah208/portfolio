import React from "react";
import { motion } from "framer-motion";

function SkillsFallback() {
  return (
    <div
      className="flex h-[min(72vh,640px)] w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading skills globe"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-16 w-16 rounded-full border-2 border-violet-500/30 border-t-violet-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-sm font-medium tracking-wide text-black/70">
          Initializing skill universe...
        </p>
      </div>
    </div>
  );
}

export default SkillsFallback;
