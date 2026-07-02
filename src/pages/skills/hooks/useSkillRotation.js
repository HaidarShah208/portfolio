import { useCallback, useEffect, useState } from "react";

export function useSkillRotation() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsInteracting(false);
  }, []);

  const autoRotate = !prefersReducedMotion && !isInteracting;

  return {
    autoRotate,
    prefersReducedMotion,
    handleInteractionStart,
    handleInteractionEnd,
  };
}
