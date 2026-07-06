import React, { lazy, Suspense } from "react";
import SkillsFallback from "./components/SkillsFallback";

const SkillsSection = lazy(() => import("./components/SkillsSection"));

function Skills() {
  return (
    <Suspense fallback={<SkillsFallback />}>
      <SkillsSection />
    </Suspense>
  );
}

export default Skills;
