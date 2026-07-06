import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function SkillInfoPanel({ skill, onClose, reducedMotion }) {
  useEffect(() => {
    if (!skill) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [skill, onClose]);

  return (
    <AnimatePresence>
      {skill && (
        <>
          <motion.button
            type="button"
            aria-label="Close skill details"
            className="fixed inset-0 z-[90] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-panel-title"
            className="fixed z-[100] w-full max-h-[85vh] overflow-y-auto border border-neutral-200 bg-white p-6 shadow-lg md:max-w-md md:rounded-3xl bottom-0 left-0 right-0 rounded-t-3xl md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2"
            initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-1.5">
                  <img
                    src={skill.icon}
                    alt=""
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <div>
                  <h3
                    id="skill-panel-title"
                    className="text-lg font-semibold text-neutral-900"
                  >
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500">
                    {skill.level}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>

            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Experience
            </p>
            <p className="mb-4 text-sm text-neutral-600">{skill.years}</p>

            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Overview
            </p>
            <p className="mb-5 text-sm leading-relaxed text-neutral-600">
              {skill.description}
            </p>

            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Related Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.related.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SkillInfoPanel;
