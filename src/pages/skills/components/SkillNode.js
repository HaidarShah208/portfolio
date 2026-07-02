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
        color={active ? "#A78BFA" : "#60A5FA"}
        lineWidth={active ? 1.4 : 0.7}
        transparent
        opacity={active ? 0.65 : 0.22}
        depthWrite={false}
        renderOrder={19}
      />

      <Html
        center
        transform
        sprite
        occlude={false}
        distanceFactor={9}
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
            className={`flex min-w-[92px] flex-col items-center gap-1.5 rounded-2xl border px-3 py-2.5 text-center outline-none backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] ${
              active
                ? "scale-105 border-violet-400/50 bg-white/12 shadow-[0_0_28px_rgba(124,58,237,0.45)]"
                : "border-white/15 bg-white/[0.08] shadow-[0_0_12px_rgba(96,165,250,0.15)] hover:scale-105 hover:border-cyan-400/35"
            }`}
            style={{
              WebkitFontSmoothing: "antialiased",
              transform: "translateZ(0)",
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 p-1.5">
              <img
                src={skill.icon}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-white/90">
              {skill.name}
            </span>
          </button>
        </div>
      </Html>
    </group>
  );
}

export default React.memo(SkillNode);
