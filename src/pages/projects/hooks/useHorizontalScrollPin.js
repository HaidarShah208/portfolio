import { useCallback, useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Pins the projects section while vertical scroll drives horizontal movement.
 * Same pattern used on premium portfolios (e.g. abdulbasit-005.vercel.app).
 */
export function useHorizontalScrollPin(trackRef, enabled = true) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const rafRef = useRef(null);
  const metricsRef = useRef({ maxX: 0, pinHeight: 0 });

  const measure = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const overflow = Math.max(0, track.scrollWidth - window.innerWidth + 120);
    const pinHeight = window.innerHeight + overflow;

    metricsRef.current = { maxX: overflow, pinHeight };
    section.style.height = `${pinHeight}px`;
  }, [trackRef]);

  const updateScroll = useCallback(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || !enabled) return;

    const { maxX, pinHeight } = metricsRef.current;
    const scrollable = pinHeight - window.innerHeight;
    const scrolled = window.scrollY - section.offsetTop;
    const clamped = Math.min(Math.max(scrolled, 0), scrollable);
    const p = scrollable > 0 ? clamped / scrollable : 0;

    track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
    setProgress(p);
    setIsPinned(scrolled > 0 && scrolled < scrollable);
  }, [trackRef, enabled]);

  useEffect(() => {
    if (!enabled) return undefined;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateScroll();
        rafRef.current = null;
      });
    };

    measure();
    updateScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      updateScroll();
    });

    const observer = new ResizeObserver(() => {
      measure();
      updateScroll();
    });
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("resize", updateScroll);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, measure, updateScroll, trackRef]);

  return { sectionRef, progress, isPinned };
}

export function useIsMobileScrollFallback() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export default useHorizontalScrollPin;
