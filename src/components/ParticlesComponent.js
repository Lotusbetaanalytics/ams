import React from "react";
import Particles from "react-particles-js";

const ParticlesComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Particles
        height={window.outerHeight}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
              },
            },
            color: {
              value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
            },
            size: {
              value: 8,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                //mode: "remove",
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
