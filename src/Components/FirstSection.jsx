import React from "react";

export default function FirstSection() {
  return (
    <>
      <div class="firstSection">
        <div class="firstSectionWrapper">
          <div class="contents">
            <h2 class="firstH2">
              The moon is made of pancakes.
            </h2>
            <h2 class="secondH2">
              Trade, earn, and win crypto on the most popular
              decentralized platform in the galaxy.
            </h2>
            <div class="firstSectionButtons">
              <button class="button1">Connect Wallet</button>
              <button class="button2">Trade Now</button>
            </div>
          </div>
          <div class="animations">
            <div class="astro">
              <div class="astronaut-rabbit">
                <img
                  src="./assets/firstSection/astronaut-bunny.png"
                  alt=""
                />
              </div>
            </div>
            <div class="stars">
              <div class="starLeftDiv">
                <img
                  class="starLeft"
                  src="./assets/firstSection/star-l.webp"
                  alt=""
                />
              </div>
              <img
                class="starRight"
                src="./assets/firstSection/star-r.webp"
                alt=""
              />
              <img
                class="starTopRight"
                src="./assets/firstSection/star-top-r.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1660 339"
          width="100%"
          color="text"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
            fill="url(#paint0_linear_dark)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_dark"
              x1="830"
              y1="83.5"
              x2="830"
              y2="338.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stop-color="#08060B"
                stop-opacity="0.2"
              ></stop>
              <stop
                offset="0.545554"
                stop-color="#08060B"
                stop-opacity="0.5"
              ></stop>
              <stop offset="1" stop-color="#08060B"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
