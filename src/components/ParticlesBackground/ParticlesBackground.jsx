import React, { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: { color: { value: "#050414" } },
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.3 },
      move: { enable: true, speed: 1.5 },
      size: { value: 2 },
      opacity: { value: 0.6 },
    },
  };

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
