"use client";
import React, { useEffect } from "react";
// adding style for animation
import "@/app/styles/style.css";
// this package helps us to use animation in react NEXT
import Lottie from "lottie-react";
// just import json file of lottie animation from 'https://lottiefiles.com/animations/welcome-ioV4tbykLt'
import animationData from "@/app/json/animations/welcome.json";
import { useSelector } from "react-redux";

// welcome animation
function StartupAnimation() {
  const animationVisible = useSelector(
    (state) => !state.isAuthenticate.isAuthenticated
  );

  useEffect(() => {
    // getting div of animation using query selector
    if (animationVisible) {
      const animationContainer = document.querySelector(".startup-animation");
      // the removal of the animation container after 4s
      setTimeout(() => {
        animationContainer.style.display = "none";
      }, 4000);
    }
  }, []);

  return (
    <>
      {animationVisible ? (
        <div className="startup-animation">
          <Lottie animationData={animationData} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default StartupAnimation;
