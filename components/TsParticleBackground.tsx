"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      className="pointer-events-none"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 120,
        detectRetina: true,

        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 1200,
            },
          },

          color: {
  value: ["#ffffff", "#7ffcff", "#45daf0"],
},

          shape: {
            type: "square",
          },
          shadow: {
  enable: true,
  color: "#45daf0",
  blur: 35,
  offset: {
    x: 0,
    y: 0,
  },
},

          opacity: {
            value: 0.5,
          },

          size: {
            value: {
              min: 2.5,
              max: 4.5,
            },
          },

          links: {
  enable: true,
  distance: 160,
  color: "#7ffcff",
  opacity: 0.35,
  width: 1.3,
},

          move: {
            enable: true,
            speed: 0.35,
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },

        interactivity: {
          detectsOn: "window",

          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },

          modes: {
            grab: {
              distance: 220,
              links: {
                opacity: 0.55,
              },
            },
          },
        },
      }}
    />
  );
}