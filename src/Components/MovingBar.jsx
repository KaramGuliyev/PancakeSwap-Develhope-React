import React from "react";

const MovingBar = () => {
  const innerBoxes = document.querySelectorAll(".innerBox");

  const totalWidth = Array.from(innerBoxes).reduce(
    (width, innerBox) => width + innerBox.offsetWidth,
    0
  );

  let translateX = totalWidth;

  const animationDuration = 5000;
  const animationInterval = 1000;

  function animateMovingBoxes() {
    innerBoxes.forEach((innerBox, index) => {
      innerBox.style.transform = `translateX(-${translateX}px)`;
      innerBox.style.transitionDuration = `${animationDuration}ms`;
      innerBox.style.transitionDelay = `${index * animationInterval}ms`;
    });

    translateX = -totalWidth;

    setTimeout(() => {
      innerBoxes.forEach((innerBox, index) => {
        innerBox.style.transform = `translateX(0)`;
        innerBox.style.transitionDuration = `${animationDuration}ms`;
        innerBox.style.transitionDelay = `${index * animationInterval}ms`;
      });

      translateX = totalWidth;

      setTimeout(animateMovingBoxes, animationDuration);
    }, animationDuration);
  }

  animateMovingBoxes();

  return <div className="upperConteiner">{}</div>;
};

export default MovingBar;
