"use client";

import { useEffect } from "react";

export default function GlowBackground() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Mouse spotlight */}
      <div className="mouse-spotlight" />

      <div className="portfolio-bg">

        {/* Static glow blobs */}
        <div className="glow-blob glow-blob-1" />
        <div className="glow-blob glow-blob-2" />
        <div className="glow-blob glow-blob-3" />
        <div className="glow-blob glow-blob-4" />

        {/* Moving glowing circles */}
        <div className="moving-circle moving-circle-1" />
        <div className="moving-circle moving-circle-2" />
        <div className="moving-circle moving-circle-3" />
        <div className="moving-circle moving-circle-4" />
        <div className="moving-circle moving-circle-5" />
        <div className="moving-circle moving-circle-6" />

      </div>
    </>
  );
}