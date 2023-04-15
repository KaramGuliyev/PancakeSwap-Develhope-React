import React from 'react';

export function SeventhSection() {
  return (
    <section className="seventhSection">
      <div className="top">
        <div className="content">
          <div className="title">
            <p><span>CAKE</span> makes our world go round.</p>
          </div>
          <div className="text">
            <p>
              CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you
              can even vote with it!
            </p>
          </div>
          <div className="btn_link">
            <div className="button">
              <button>Buy CAKE</button>
            </div>
            <div className="link">
              <a href="#">Learn</a>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="first">
            <img src="./assets/bottom-right@2x.webp" alt="" />
          </div>
          <div className="second">
            <img src="./assets/top-right@2x.webp" alt="" />
          </div>
          <div className="third">
            <img src="./assets/coin@2x.webp" alt="" />
          </div>
          <div className="fourth">
            <img src="./assets/top-left@2x.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="columns">
          <div className="circulating column">
            <p>Circulating Supply</p>
            <p>164,771,362</p>
          </div>
          <div className="total column">
            <p>Total supply</p>
            <p>361,826,029</p>
          </div>
          <div className="max column">
            <p>Max Supply</p>
            <p>750,000,000</p>
          </div>
          <div className="market column">
            <p>Market cap</p>
            <p>$660 million</p>
          </div>
          <div className="burned column">
            <p>Burned to date</p>
            <p>708,987,787</p>
          </div>
          <div className="current column">
            <p>Current emissions</p>
            <p>9.9/block</p>
          </div>
        </div>
      </div>
    </section>
  );
}