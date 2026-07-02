import React from "react";
import { useProjectScroll } from "./context/ProjectScrollContext";

/** Progress line rendered at the bottom of the fixed site header during project scroll. */
function ProjectHeaderProgress() {
  const { progress, isActive } = useProjectScroll();

  if (!isActive) return null;

  return (
    <div className="project-header-progress" aria-hidden="true">
      <div
        className="project-header-progress__bar"
        style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }}
      />
    </div>
  );
}

export default ProjectHeaderProgress;
