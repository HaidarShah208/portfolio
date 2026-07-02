import { useEffect, useRef } from "react";
import { findInteractiveTarget } from "./useCursorHover";

// Lerp factors — lower = more inertia (agency-style smooth lag)
const RING_LERP = 0.14;
const TRAIL_LERP = 0.07;

// Trail stretch caps — keeps the effect subtle, not "gaming cursor"
const MAX_STRETCH = 1.45;
const MAX_TRAIL_OPACITY = 0.35;

/**
 * Core cursor engine: rAF loop with interpolated ring + liquid trail positions.
 * Uses direct DOM transforms (no layout thrashing) for 60 FPS.
 */
export function useCursorEngine(enabled) {
  const ringRef = useRef(null);
  const trailRef = useRef(null);

  const state = useRef({
    // Target = raw mouse position
    tx: 0,
    ty: 0,
    // Ring = fast-follow interpolated position
    rx: 0,
    ry: 0,
    // Trail = slow-follow for liquid lag
    lx: 0,
    ly: 0,
    // Velocity for stretch + fade
    vx: 0,
    vy: 0,
    speed: 0,
    angle: 0,
    hovering: false,
    pressing: false,
    visible: false,
    scale: 1,
    targetScale: 1,
    rafId: null,
  });

  useEffect(() => {
    if (!enabled) return undefined;

    const s = state.current;
    document.documentElement.classList.add("custom-cursor-active");

    const show = () => {
      s.visible = true;
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (trailRef.current) trailRef.current.style.opacity = "1";
    };

    const hide = () => {
      s.visible = false;
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (trailRef.current) trailRef.current.style.opacity = "0";
    };

    const onPointerMove = (event) => {
      s.tx = event.clientX;
      s.ty = event.clientY;

      if (!s.visible) show();

      const target = findInteractiveTarget(document.elementFromPoint(event.clientX, event.clientY));
      s.hovering = Boolean(target);
    };

    const onPointerDown = () => {
      s.pressing = true;
    };

    const onPointerUp = () => {
      s.pressing = false;
    };

    const onPointerLeave = () => hide();

    const onPointerEnter = (event) => {
      s.tx = event.clientX;
      s.ty = event.clientY;
      s.rx = event.clientX;
      s.ry = event.clientY;
      s.lx = event.clientX;
      s.ly = event.clientY;
      show();
    };

    // Main animation loop — single rAF drives ring + trail
    const tick = () => {
      const ring = ringRef.current;
      const trail = trailRef.current;

      // Previous ring position for velocity
      const prevRx = s.rx;
      const prevRy = s.ry;

      // Interpolate ring toward mouse (buttery inertia)
      s.rx += (s.tx - s.rx) * RING_LERP;
      s.ry += (s.ty - s.ry) * RING_LERP;

      // Trail lags further behind for liquid feel
      s.lx += (s.rx - s.lx) * TRAIL_LERP;
      s.ly += (s.ry - s.ly) * TRAIL_LERP;

      s.vx = s.rx - prevRx;
      s.vy = s.ry - prevRy;
      s.speed = Math.hypot(s.vx, s.vy);
      s.angle = Math.atan2(s.vy, s.vx);

      // Smooth scale transitions for hover / click (spring-like via lerp)
      s.targetScale = s.pressing ? 0.82 : s.hovering ? 1.65 : 1;
      s.scale += (s.targetScale - s.scale) * 0.18;

      if (ring) {
        ring.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0) translate(-50%, -50%) scale(${s.scale})`;
      }

      if (trail) {
        // Stretch trail along movement direction — capped for elegance
        const stretch = Math.min(1 + s.speed * 0.04, MAX_STRETCH);
        const squash = Math.max(0.55, 1 / stretch);
        const fade = Math.min(s.speed * 0.08, MAX_TRAIL_OPACITY);

        trail.style.transform = [
          `translate3d(${s.lx}px, ${s.ly}px, 0)`,
          `translate(-50%, -50%)`,
          `rotate(${s.angle}rad)`,
          `scale(${stretch}, ${squash})`,
        ].join(" ");
        trail.style.opacity = String(fade);
      }

      s.rafId = requestAnimationFrame(tick);
    };

    s.rafId = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.documentElement.addEventListener("pointerenter", onPointerEnter);

    const onVisibility = () => {
      if (document.hidden && s.rafId) {
        cancelAnimationFrame(s.rafId);
        s.rafId = null;
      } else if (!document.hidden && !s.rafId) {
        s.rafId = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      if (s.rafId) cancelAnimationFrame(s.rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled]);

  return { ringRef, trailRef };
}

export default useCursorEngine;
