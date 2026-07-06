import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "../../../components/smooth-scroll";

const MOBILE_BREAKPOINT = 768;

/**
 * Pins the projects section while vertical scroll drives horizontal movement.
 */
export function useHorizontalScrollPin(trackRef, enabled = true) {
  const lenis = useLenis();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const rafRef = useRef(null);
  const metricsRef = useRef({ maxX: 0, pinHeight: 0 });

  const getScrollY = useCallback(() => {
    if (lenis && typeof lenis.scroll === "number") return lenis.scroll;
    return window.scrollY;
  }, [lenis]);

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
    const scrolled = getScrollY() - section.offsetTop;
    const clamped = Math.min(Math.max(scrolled, 0), scrollable);
    const p = scrollable > 0 ? clamped / scrollable : 0;

    track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
    setProgress(p);
    setIsPinned(clamped > 0 && clamped < scrollable);
  }, [trackRef, enabled, getScrollY]);

  useEffect(() => {
    if (!enabled) return undefined;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateScroll();
        rafRef.current = null;
      });
    };

    const onResize = () => {
      measure();
      updateScroll();
    };

    measure();
    updateScroll();

    if (lenis) {
      lenis.on("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    window.addEventListener("resize", onResize);

    const observer = new ResizeObserver(() => {
      measure();
      updateScroll();
    });
    if (trackRef.current) observer.observe(trackRef.current);

    return () => {
      if (lenis) lenis.off("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, lenis, measure, updateScroll, trackRef]);

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
