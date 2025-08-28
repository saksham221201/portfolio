// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // Load the preset
    await loadLinksPreset(main);
  };

  const particlesOptions = {
    preset: "links",
    background: {
      color: {
        value: "#050414",
      },
    },
    particles: {
      number: {
        value: 55,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      links: {
        enable: true,
        distance: 100,
        opacity: 0.5,
      },
      move: {
        enable: true,
        speed: 2,
        outMode: "bounce",
      },
      size: {
        value: 3,
      },
      opacity: {
        value: 0.5,
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticlesBackground;