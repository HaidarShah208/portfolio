import React from "react";

/**
 * Header progress line — fill reflects full-page scroll progress.
 */
function HeaderScrollProgress({ progress }) {
  return (
    <div className="header-scroll-progress" aria-hidden="true">
      <div
        className="header-scroll-progress__bar"
        style={{ transform: `scaleX(${Math.max(progress, 0.01)})` }}
      />
    </div>
  );
}

export default HeaderScrollProgress;
