import React from "react";
import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 23) % 100}%`,
  size: 2 + (i % 3),
  duration: 8 + (i % 6),
  delay: (i % 5) * 0.6,
}));

function BackgroundParticles({ reducedMotion }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.12),_transparent_50%)]" />

    

      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            reducedMotion
              ? undefined
              : { opacity: [0.15, 0.55, 0.15], y: [0, -12, 0] }
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles;
