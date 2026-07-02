import React, { createContext, useContext, useMemo, useState } from "react";

const ProjectScrollContext = createContext(null);

export function ProjectScrollProvider({ children }) {
  const [scrollState, setScrollState] = useState({
    progress: 0,
    isActive: false,
  });

  const value = useMemo(
    () => ({
      progress: scrollState.progress,
      isActive: scrollState.isActive,
      setScrollState,
    }),
    [scrollState]
  );

  return (
    <ProjectScrollContext.Provider value={value}>
      {children}
    </ProjectScrollContext.Provider>
  );
}

export function useProjectScroll() {
  const context = useContext(ProjectScrollContext);
  if (!context) {
    throw new Error("useProjectScroll must be used within ProjectScrollProvider");
  }
  return context;
}

export default ProjectScrollContext;
