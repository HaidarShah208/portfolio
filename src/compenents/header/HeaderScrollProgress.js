import React from "react";

/**
 * Header progress line — visible only inside projects section,
 * fill reflects full-page scroll progress (not horizontal project scroll).
 */
function HeaderScrollProgress({ progress, visible }) {
  return (
    <div
      className={`header-scroll-progress${visible ? " header-scroll-progress--visible" : ""}`}
      aria-hidden="true"
    >
      <div
        className="header-scroll-progress__bar"
        style={{ transform: `scaleX(${Math.max(progress, 0.01)})` }}
      />
    </div>
  );
}

export default HeaderScrollProgress;
