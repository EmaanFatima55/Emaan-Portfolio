"use client";

import { motion } from "framer-motion";

const glows = [
  {
    size: 700,
    top: "-12%",
    left: "-10%",
    color: "#06b6d4",
    opacity: 0.12,
    blur: 220,
    duration: 14,
  },
  {
    size: 600,
    top: "5%",
    right: "-8%",
    color: "#0891b2",
    opacity: 0.09,
    blur: 200,
    duration: 18,
  },
  {
    size: 500,
    bottom: "10%",
    left: "-6%",
    color: "#22d3ee",
    opacity: 0.08,
    blur: 180,
    duration: 16,
  },
  {
    size: 650,
    bottom: "-15%",
    right: "-10%",
    color: "#06b6d4",
    opacity: 0.11,
    blur: 220,
    duration: 20,
  },
  {
    size: 350,
    top: "40%",
    left: "35%",
    color: "#67e8f9",
    opacity: 0.06,
    blur: 160,
    duration: 15,
  },
];

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#050B14]">
      {glows.map((glow, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: glow.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: glow.size,
            height: glow.size,
            background: glow.color,
            opacity: glow.opacity,
            filter: `blur(${glow.blur}px)`,
            top: glow.top,
            left: glow.left,
            right: glow.right,
            bottom: glow.bottom,
          }}
        />
      ))}
    </div>
  );
}