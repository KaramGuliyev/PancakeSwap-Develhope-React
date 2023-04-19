import React from "react";
import { Link } from "react-router-dom";

export function EighthSection() {
  return (
    <section class="eighthSection">
      <div class="bg-svg">
        <img src="./assets/eighthSectionBg.svg" />
      </div>
      <div class="main-animations">
        <div class="left-right">
          <div class="left-animation">
            <div class="left-animation2">
              <div class="left-first">
                <img src="./assets/peanut1-left.webp" alt="" />
              </div>
              <div class="left-second">
                <img src="./assets/peanut2-left.webp" alt="" />
              </div>
              <div class="left-third">
                <img src="./assets/peanut3-left.webp" alt="" />
              </div>
            </div>
          </div>
          <div class="right-animation">
            <div class="right-animation2">
              <div class="right-first">
                <img src="./assets/peanut1-right.webp" alt="" />
              </div>
              <div class="right-second">
                <img src="./assets/peanut2-right.webp" alt="" />
              </div>
              <div class="right-third">
                <img src="./assets/peanut3-right.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="conteiner">
        <div class="title">
          <p>Start in seconds.</p>
        </div>
        <div class="first-text">
          <p>Connect your crypto wallet to start using the app in seconds.</p>
        </div>
        <div class="second-text">
          <p>No registration needed.</p>
        </div>
        <div class="link">
          <Link href="#">Learn how to start</Link>
        </div>
        <div class="button">
          <button>Connect Wallet</button>
        </div>
      </div>
    </section>
  );
}
