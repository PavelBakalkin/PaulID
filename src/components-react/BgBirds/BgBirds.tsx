import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import styles from "./BgBirds.module.css";

export const BgBirds = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x3a00ff,
          color1: 0xffec00,
          color2: 0xffec00,
          colorMode: "lerp",
          birdSize: 2.0,
          wingSpan: 40.0,
          separation: 50.0,
          alignment: 50.0,
          cohesion: 100.0,
          quantity: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect;
    };
  }, [vantaEffect]);
  return <div className={`${styles.vanta}`} ref={vantaRef}></div>;
};
