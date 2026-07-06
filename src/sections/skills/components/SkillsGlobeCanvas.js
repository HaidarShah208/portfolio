import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";

function SkillsGlobeCanvas({
  autoRotate,
  prefersReducedMotion,
  selectedSkillId,
  hoveredSkillId,
  onSelectSkill,
  onHoverSkill,
  onInteractionStart,
  onInteractionEnd,
}) {
  return (
    <div className="relative h-[min(90vh,640px)] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        frameloop={prefersReducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <Globe
            autoRotate={autoRotate}
            selectedSkillId={selectedSkillId}
            hoveredSkillId={hoveredSkillId}
            onSelectSkill={onSelectSkill}
            onHoverSkill={onHoverSkill}
            onInteractionStart={onInteractionStart}
            onInteractionEnd={onInteractionEnd}
          />
        </Suspense>
      </Canvas>

 
    </div>
  );
}

export default SkillsGlobeCanvas;
