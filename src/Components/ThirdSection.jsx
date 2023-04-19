import React from "react";
import { Link } from "react-router-dom";

export function ThirdSection() {
  return (
    <section class="sectionThird">
      <div class="svg">
        <img src="./assets/inner3.svg" alt="" />
      </div>
      <div class="main">
        <div class="content">
          <div class="title">
            <p>
              <span>Trade</span> anything. No registration, no hassle.
            </p>
          </div>
          <div class="text-content">
            <p>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div class="button-link">
            <div class="button">
              <button>Trade Now</button>
            </div>
            <div class="link">
              <Link href="#">Learn</Link>
            </div>
          </div>
        </div>
        <div class="main-images">
          <div class="images">
            <div class="first">
              <img src="./assets/BNB@2x.webp" alt="" />
            </div>
            <div class="second">
              <img src="./assets/BTC@2x.webp" alt="" />
            </div>
            <div class="third">
              <img src="./assets/CAKE@2x.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
