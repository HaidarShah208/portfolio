import { useState } from "react";

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

/**
 * Detects whether the premium cursor should run.
 * Disabled on touch devices, coarse pointers, small screens, and reduced-motion.
 */
export function useCursorDevice() {
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;

    const isTouch =
      MOBILE_UA.test(navigator.userAgent) ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    return !isTouch && !prefersReducedMotion;
  });

  return enabled;
}

export default useCursorDevice;
