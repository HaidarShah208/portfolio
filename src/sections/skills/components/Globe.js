import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLOBE_SHELL_RADIUS, skills } from "../skillsData";
import SkillNode from "./SkillNode";

function DotGlobe() {
  const points = useMemo(() => {
    const vertices = [];
    const rows = 64;
    const cols = 128;
    for (let i = 0; i <= rows; i += 1) {
      const phi = (i / rows) * Math.PI;
      for (let j = 0; j <= cols; j += 1) {
        const theta = (j / cols) * Math.PI * 2;
        vertices.push(
          GLOBE_SHELL_RADIUS * Math.sin(phi) * Math.cos(theta),
          GLOBE_SHELL_RADIUS * Math.cos(phi),
          GLOBE_SHELL_RADIUS * Math.sin(phi) * Math.sin(theta)
        );
      }
    }
    return new Float32Array(vertices);
  }, []);

  return (
    <points renderOrder={0}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#000000"
        transparent
        opacity={0.45}
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WireframeShell() {
  return (
    <mesh renderOrder={0}>
      <sphereGeometry args={[GLOBE_SHELL_RADIUS, 48, 48]} />
      <meshBasicMaterial
        color="#d4d4d4"
        wireframe
        transparent
        opacity={0.35}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

function CoreGlow() {
  return (
    <mesh renderOrder={0}>
      <sphereGeometry args={[GLOBE_SHELL_RADIUS * 0.96, 32, 32]} />
      <meshBasicMaterial
        color="#f5f5f5"
        transparent
        opacity={0.25}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

function Globe({
  autoRotate,
  selectedSkillId,
  hoveredSkillId,
  onSelectSkill,
  onHoverSkill,
  onInteractionStart,
  onInteractionEnd,
}) {
  const orbitRef = useRef();

  useFrame((_, delta) => {
    if (!orbitRef.current || !autoRotate) return;
    orbitRef.current.rotation.y += delta * 0.22;
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 4]} intensity={1} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={0.5} color="#e5e5e5" />

      {/* Globe + skills rotate together */}
      <group ref={orbitRef}>
        <CoreGlow />
        <DotGlobe />
        <WireframeShell />

        {skills.map((skill) => (
          <SkillNode
            key={skill.id}
            skill={skill}
            isSelected={selectedSkillId === skill.id}
            isHovered={hoveredSkillId === skill.id}
            onSelect={onSelectSkill}
            onHover={onHoverSkill}
          />
        ))}
      </group>

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={4}
        maxDistance={7}
        rotateSpeed={0.45}
        zoomSpeed={0.5}
        autoRotate={false}
        onStart={onInteractionStart}
        onEnd={onInteractionEnd}
      />
    </>
  );
}

export default Globe;
