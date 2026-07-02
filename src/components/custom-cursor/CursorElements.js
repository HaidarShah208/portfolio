import React from "react";
import { motion } from "framer-motion";

/**
 * Thin outlined ring — the primary cursor dot (20px).
 * Position is driven by rAF in useCursorEngine; Framer Motion is not used here
 * to avoid fighting the interpolation loop.
 */
export function CursorRing({ ringRef }) {
  return (
    <div
      ref={ringRef}
      className="custom-cursor__ring pointer-events-none fixed left-0 top-0 z-[99999] h-5 w-5 rounded-full border-[1.5px] border-white opacity-0 mix-blend-difference will-change-transform"
      aria-hidden="true"
    />
  );
}

/**
 * Soft liquid trail — stretches with velocity, fades when idle.
 * Sits behind the ring for depth without looking like a gaming trail.
 */
export function CursorTrail({ trailRef }) {
  return (
    <div
      ref={trailRef}
      className="custom-cursor__trail pointer-events-none fixed left-0 top-0 z-[99998] h-3 w-3 rounded-full bg-white opacity-0 mix-blend-difference will-change-transform"
      aria-hidden="true"
    />
  );
}

/**
 * Optional Framer Motion wrapper for future micro-interactions.
 * Exported for reuse if you need spring-based overlays on the cursor.
 */
export function CursorSpringWrapper({ children, scale = 1 }) {
  return (
    <motion.div
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.4 }}
      className="pointer-events-none"
    >
      {children}
    </motion.div>
  );
}

export default CursorRing;
