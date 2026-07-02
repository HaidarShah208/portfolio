import React, { useRef } from "react";
import { Html, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const _worldPos = new THREE.Vector3();
const _normal = new THREE.Vector3();
const _cameraDir = new THREE.Vector3();

function SkillNode({ skill, isSelected, isHovered, onSelect, onHover }) {
  const groupRef = useRef();
  const htmlRef = useRef();
  const active = isSelected || isHovered;

  useFrame(({ camera }) => {
    if (!groupRef.current) return;

    groupRef.current.getWorldPosition(_worldPos);
    _normal.copy(_worldPos).normalize();
    _cameraDir.copy(camera.position).sub(_worldPos).normalize();

    const facing = _normal.dot(_cameraDir);
    const opacity = THREE.MathUtils.clamp(
      THREE.MathUtils.smoothstep(facing, -0.05, 0.3),
      0,
      1
    );

    groupRef.current.visible = opacity > 0.04;

    if (htmlRef.current) {
      htmlRef.current.style.opacity = String(opacity);
      htmlRef.current.style.pointerEvents = opacity > 0.35 ? "auto" : "none";
    }
  });

  return (
    <group
      ref={groupRef}
      position={[skill.position.x, skill.position.y, skill.position.z]}
      renderOrder={20}
    >
      <Line
        points={[
          [0, 0, 0],
          [
            -skill.normal.x * 0.28,
            -skill.normal.y * 0.28,
            -skill.normal.z * 0.28,
          ],
        ]}
        color={active ? "#404040" : "#a3a3a3"}
        lineWidth={active ? 1.2 : 0.6}
        transparent
        opacity={active ? 0.5 : 0.2}
        depthWrite={false}
        renderOrder={19}
      />

      <Html
        center
        transform
        sprite
        occlude={false}
        distanceFactor={13}
        zIndexRange={[300, 0]}
        style={{ pointerEvents: "auto" }}
      >
        <div ref={htmlRef}>
          <button
            type="button"
            aria-label={`View ${skill.name} skill details`}
            onClick={() => onSelect(skill)}
            onMouseEnter={() => onHover(skill.id)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(skill.id)}
            onBlur={() => onHover(null)}
            className={`flex min-w-[60px] flex-col items-center gap-0.5 rounded-lg border border-neutral-200  px-1.5 py-1.5 text-center outline-none transition-[transform,border-color] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
              active
                ? "scale-105 border-neutral-400"
                : "hover:scale-105 hover:border-neutral-300"
            }`}
            style={{
              WebkitFontSmoothing: "antialiased",
              transform: "translateZ(0)",
            }}
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white p-0.5">
              <img
                src={skill.icon}
                alt=""
                className="h-6 w-6 "
                loading="lazy"
                draggable={false}
                style={{width:'10px',height:'10px'}}
              />
            </span>
            <span className="whitespace-nowrap text-[3px] md:text-[4px] font-medium tracking-wide text-neutral-600">
              {skill.name}
            </span>
          </button>
        </div>
      </Html>
    </group>
  );
}

export default React.memo(SkillNode);
