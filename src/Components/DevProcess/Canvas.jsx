import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import './Canvas.css';

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 50
};



export default function Realistic() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.45 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {

    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 100,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 100,
      startVelocity: 45
    });

  }, [makeShot]);

  // add a scroll event listener, if .canv-btn is in view, fire the confetti
    const handleScroll = useCallback(() => {
        const el = document.querySelector(".canv-btn");
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Fire the confetti only once
                /* if (!el.fired) {
                    el.fired = true; */
                    fire();
                    // diable the fire function
                    window.removeEventListener("scroll", handleScroll);
                /* } */
            }
        }
    }, [fire]);
    // if the .DA div is in view, add the scroll event listener for handleScroll
    const handleDA = useCallback(() => {
        const el = document.querySelector(".DA");
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                window.addEventListener("scroll", handleScroll);
            }
        }
    }, [handleScroll]);
    window.addEventListener("scroll", handleDA);


  

  return (
    <>

      <button onClick={fire} className="canv-btn">Fire</button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} className="canv" />
    </>
  );
}
