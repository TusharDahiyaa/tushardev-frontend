const particlesConfig = {
  autoPlay: true,
  fpsLimit: 60,
  backgroundMask: {
    composite: "source-over",
    cover: {
      color: {
        value: "#191919",
      },
      opacity: 1,
    },
    enable: true,
  },
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: Math.floor(Math.random() * 16777215).toString(16),
      animation: {
        enable: true,
        speed: 50,
        sync: true,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: {
          value: Math.floor(Math.random() * 16777215).toString(16),
        },
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 150,
        height: 150,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      animation: {
        enable: true,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      random: true,
      color: "random",
      opacity: 0.5,
      width: 1,
      triangles: {
        enable: true,
        color: {
          value: "Math.floor(Math.random() * 16777215).toString(16)",
        },
        opacity: 0.15,
      },
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    resize: {
      delay: 0.5,
      enable: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export default particlesConfig;
