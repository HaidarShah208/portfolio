import React from "react";
import useCursorDevice from "./hooks/useCursorDevice";
import useCursorEngine from "./hooks/useCursorEngine";
import { CursorRing, CursorTrail } from "./CursorElements";
import "./custom-cursor.css";

/**
 * Premium minimal custom cursor with inertia + liquid trail.
 *
 * @param {Object} props
 * @param {boolean} [props.enabled] - Override auto device detection
 * @param {string} [props.className] - Extra wrapper classes
 */
function CustomCursor({ enabled: enabledProp, className = "" }) {
  const deviceEnabled = useCursorDevice();
  const enabled = enabledProp ?? deviceEnabled;
  const { ringRef, trailRef } = useCursorEngine(enabled);

  // Touch / mobile → render nothing, native cursor stays
  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${className}`.trim()}
      aria-hidden="true"
      data-custom-cursor=""
    >
      <CursorTrail trailRef={trailRef} />
      <CursorRing ringRef={ringRef} />
    </div>
  );
}

export default CustomCursor;
