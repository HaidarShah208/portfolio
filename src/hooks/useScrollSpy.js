import { useCallback, useEffect, useState } from "react";
import { useLenis } from "../components/smooth-scroll";

export const NAV_SECTIONS = [
  { id: "#home", selector: "#home" },
  { id: "#about", selector: "#about" },
  { id: "#skills", selector: "#skills" },
  { id: "#services", selector: "#services" },
  { id: "#journey", selector: "#journey" },
  { id: "#projects", selector: "#projects" },
  { id: "#contact", selector: "#contact" },
];

/**
 * Tracks full-page scroll progress, active nav section, and projects-zone visibility.
 */
export function useScrollSpy() {
  const lenis = useLenis();
  const [activeNav, setActiveNav] = useState("#home");
  const [pageProgress, setPageProgress] = useState(0);
  const [inProjectsSection, setInProjectsSection] = useState(false);

  const getScrollY = useCallback(() => {
    if (lenis && typeof lenis.scroll === "number") return lenis.scroll;
    return window.scrollY;
  }, [lenis]);

  useEffect(() => {
    let rafId = null;

    const update = () => {
      const scrollY = getScrollY();
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );

      setPageProgress(Math.min(Math.max(scrollY / maxScroll, 0), 1));

      const trigger = scrollY + window.innerHeight * 0.32;
      let current = NAV_SECTIONS[0].id;

      NAV_SECTIONS.forEach((section) => {
        const el = document.querySelector(section.selector);
        if (el && el.offsetTop <= trigger) {
          current = section.id;
        }
      });

      setActiveNav(current);

      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const top = projectsEl.offsetTop;
        const bottom = top + projectsEl.offsetHeight;
        const inSection =
          scrollY + window.innerHeight * 0.25 >= top &&
          scrollY <= bottom - window.innerHeight * 0.15;
        setInProjectsSection(inSection);
      } else {
        setInProjectsSection(false);
      }

      rafId = null;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();

    if (lenis) {
      lenis.on("scroll", onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    window.addEventListener("resize", update);

    return () => {
      if (lenis) lenis.off("scroll", onScroll);
      else window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [lenis, getScrollY]);

  return { activeNav, setActiveNav, pageProgress, inProjectsSection };
}

export default useScrollSpy;
