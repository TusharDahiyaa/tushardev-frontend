// eslint-disable-next-line
import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../configs/particles.config";

export default function ParticlesBG() {
  // const [colorChangingInterval, setColorChangingInterval] = useState(null);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
    // let intervalId;

    // function changeLineTrianglesColor() {
    //   intervalId = setTimeout(() => {
    //     // console.log("changeLineTriangleColor function called!");
    //     const newColor = Math.floor(Math.random() * 16777215).toString(16);
    //     engine?.particles?.line_linked?.triangles?.updateColor(newColor);
    //   }, 5000);
    // }

    // setColorChangingInterval(intervalId);
    // // Call the function to start the color-changing interval
    // changeLineTrianglesColor();
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  // useEffect(() => {
  //   return () => {
  //     // Clean up the interval when the component unmounts
  //     clearInterval(colorChangingInterval);
  //   };
  // }, [colorChangingInterval]);

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
