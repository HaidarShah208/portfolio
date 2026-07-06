import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 768;

function getStickyTopPx(stack) {
  const card = stack.querySelector(".journey-stack__card");
  if (!card) return 120;
  const top = getComputedStyle(card).top;
  return Number.parseFloat(top) || 120;
}

/**
 * Zunedaalim-style sticky stack: next card slides over previous (scale + fade back cards).
 * CSS sticky handles overlap; GSAP only scrubs the depth effect — no y transforms that break sticky.
 */
export function useJourneyScrollTrigger({
  sectionRef,
  stackRef,
  cardRefs,
  enabled = true,
}) {
  useLayoutEffect(() => {
    if (!enabled) return undefined;

    const section = sectionRef.current;
    const stack = stackRef.current;
    const cards = cardRefs.current.filter(Boolean);

    if (!section || !stack || cards.length === 0) return undefined;

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (isMobile || prefersReducedMotion) {
        gsap.from(cards, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stack,
            start: "top 85%",
            once: true,
          },
        });
        return;
      }

      const getOverlapRange = () => {
        const stickyTopPx = getStickyTopPx(stack);
        const overlapLeadPx = Math.round(window.innerHeight * 0.18);
        return {
          start: stickyTopPx + overlapLeadPx,
          end: stickyTopPx,
        };
      };

      cards.forEach((cardInner, index) => {
        gsap.set(cardInner, {
          scale: 1,
          opacity: 1,
          filter: "brightness(1)",
          transformOrigin: "center top",
          force3D: true,
        });

        if (index < cards.length - 1) {
          const nextCard = cards[index + 1]?.parentElement;

          if (!nextCard) return;

          ScrollTrigger.create({
            trigger: nextCard,
            start: () => {
              const { start } = getOverlapRange();
              return `top ${start}px`;
            },
            end: () => {
              const { end } = getOverlapRange();
              return `top ${end}px`;
            },
            scrub: 0.45,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              gsap.set(cardInner, {
                scale: gsap.utils.interpolate(1, 0.96, p),
                opacity: gsap.utils.interpolate(1, 0.88, p),
                filter: `brightness(${gsap.utils.interpolate(1, 0.92, p)})`,
              });
            },
            onLeaveBack: () => {
              gsap.set(cardInner, {
                scale: 1,
                opacity: 1,
                filter: "brightness(1)",
              });
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, section);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, [sectionRef, stackRef, cardRefs, enabled]);
}

export default useJourneyScrollTrigger;
