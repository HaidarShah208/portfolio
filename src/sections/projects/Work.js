import React, { useRef } from "react";
import { projectData } from "./Data";
import WorkItems from "./workItems";
import useHorizontalScrollPin, {
  useIsMobileScrollFallback,
} from "./hooks/useHorizontalScrollPin";

function Work() {
  const projects = projectData;
  const trackRef = useRef(null);
  const isMobile = useIsMobileScrollFallback();
  const { sectionRef } = useHorizontalScrollPin(trackRef, !isMobile);

  const header = (
    <div className="container work__header">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {header}
        <div className="work_mobile">
          <div className="work_mobile_track">
            {projects.map((project, index) => (
              <div key={project.id} className="work_mobile_item">
                <WorkItems item={project} index={index} />
              </div>
            ))}
          </div>
          <p className="work_mobile_hint">Swipe to explore projects</p>
        </div>
      </>
    );
  }

  return (
    <div ref={sectionRef} className="work_pin_section">
      <div className="work_pin_sticky">
        {header}

        <div className="work_pin_viewport">
          <div ref={trackRef} className="work_pin_track">
            {projects.map((project, index) => (
              <div key={project.id} className="work_pin_item">
                <WorkItems item={project} index={index} />
              </div>
            ))}
            <div className="work_pin_spacer" aria-hidden="true" />
          </div>
        </div>

         
      </div>
    </div>
  );
}

export default Work;
