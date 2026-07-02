import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

function shouldEnableLenis() {
  if (typeof window === "undefined") return false;

  const isTouch =
    MOBILE_UA.test(navigator.userAgent) ||
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return !isTouch && !prefersReducedMotion;
}

/**
 * Site-wide Lenis smooth scroll. Disabled on mobile and reduced-motion.
 */
export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (!shouldEnableLenis()) return undefined;

    const instance = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      infinite: false,
    });

    setLenis(instance);

    let rafId = 0;
    const raf = (time) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  const value = useMemo(() => lenis, [lenis]);

  return (
    <LenisContext.Provider value={value}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

export default LenisProvider;
