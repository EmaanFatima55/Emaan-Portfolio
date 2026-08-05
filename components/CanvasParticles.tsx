"use client";

import { useEffect, useRef } from "react";
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

       let particles: Particle[] = [];

function createParticles() {
  particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    r: Math.random() * 0.2 + 0.1,
  }));
}

createParticles();

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Outer Glow
// Light Aura
const glow = ctx.createRadialGradient(
  p.x,
  p.y,
 0,
  p.x,
  p.y,
  p.r * 18
);

glow.addColorStop(0, "rgba(255,255,255,1)");
glow.addColorStop(0.08, "rgba(180,255,255,1)");
glow.addColorStop(0.2, "rgba(34,211,238,0.95)");
glow.addColorStop(0.5, "rgba(34,211,238,0.35)");
glow.addColorStop(1, "rgba(34,211,238,0)");

ctx.beginPath();
ctx.arc(p.x, p.y, p.r * 18, 0, Math.PI * 2);
ctx.fillStyle = glow;
ctx.fill();

// Bright Core
ctx.beginPath();
ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
ctx.fillStyle = "#ffffff";
ctx.fill();

ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.strokeStyle = `rgba(34,211,238,${
              0.12 - dist / 1700
            })`;

            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  createParticles();
};

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}