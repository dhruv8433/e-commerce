"use client";
import React, { useEffect } from "react";
// adding style for animation
import "@/app/styles/style.css";
// this package helps us to use animation in react NEXT
import Lottie from "lottie-react";
// just import json file of lottie animation from 'https://lottiefiles.com/animations/welcome-ioV4tbykLt'
import animationData from "@/app/json/animations/welcome.json";
import Cookie from "js-cookie";

// welcome animation
function StartupAnimation() {
  // first check if this cookie is exist or not
  const animationShown = Cookie.get("animationShow");
  useEffect(() => {
    if (!animationShown) {
      // if cookie not exist then set and expire in 1 days
      Cookie.set("animationShow", true, {
        expires: 1,
      });
      const animationContainer = document.querySelector(".startup-animation");
      // the removal of the animation container after 4s
      setTimeout(() => {
        animationContainer.style.display = "none";
      }, 4000);
    }
  }, []);

  return (
    <>
      {animationShown ? (
        ""
      ) : (
        <div className="startup-animation">
          <Lottie animationData={animationData} />
        </div>
      )}
    </>
  );
}

export default StartupAnimation;
