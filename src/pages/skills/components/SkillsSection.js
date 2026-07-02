import React, { lazy, Suspense, useCallback, useState } from "react";
import { motion } from "framer-motion";
import BackgroundParticles from "./BackgroundParticles";
import SkillInfoPanel from "./SkillInfoPanel";
import SkillsFallback from "./SkillsFallback";
import { useSkillRotation } from "../hooks/useSkillRotation";

const SkillsGlobeCanvas = lazy(() => import("./SkillsGlobeCanvas"));

function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const {
    autoRotate,
    prefersReducedMotion,
    handleInteractionStart,
    handleInteractionEnd,
  } = useSkillRotation();

  const handleSelectSkill = useCallback((skill) => {
    setSelectedSkill(skill);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 md:py-24"
      aria-labelledby="skills-heading"
    >
      <BackgroundParticles reducedMotion={prefersReducedMotion} />

      <div className="container relative z-10 mx-auto w-full px-4">
        <motion.div
          className="mb-10 text-center md:mb-14"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >

          <h2
            id="skills-heading"
            className="mb-3 text-3xl font-semibold text-black md:text-4xl"
          >
            Skills
          </h2>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em]">
            Technical Universe
          </p>         
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Suspense fallback={<SkillsFallback />}>
            <SkillsGlobeCanvas
              autoRotate={autoRotate}
              prefersReducedMotion={prefersReducedMotion}
              selectedSkillId={selectedSkill?.id}
              hoveredSkillId={hoveredSkillId}
              onSelectSkill={handleSelectSkill}
              onHoverSkill={setHoveredSkillId}
              onInteractionStart={handleInteractionStart}
              onInteractionEnd={handleInteractionEnd}
            />
          </Suspense>
        </motion.div>
      </div>

      <SkillInfoPanel
        skill={selectedSkill}
        onClose={handleClosePanel}
        reducedMotion={prefersReducedMotion}
      />
    </section>
  );
}

export default SkillsSection;
