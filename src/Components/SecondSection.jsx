import React from 'react';

export function SecondSection() {
  return (
    <section className="secondSection">
      <div className="logo">
        <img src="./assets/3logo1.svg" alt="" />
      </div>
      <div className="title">
        <p>Used by millions.</p>
        <p>Trusted with billions.</p>
      </div>
      <div className="text1">
        <p>PancakeSwap has the most users of any decentralized platform, ever.</p>
      </div>
      <div className="text2">
        <p>And those users are now entrusting the platform with over $3.4 billion in funds.</p>
      </div>
      <div className="question">
        <p>Will you join them?</p>
      </div>
      <div className="boxes">
        <div className="box1 box">
          <div className="firstBox">
            <div className="img">
              <img src="./assets/3logo2.svg" alt="" />
            </div>
            <div className="title">
              <p>1.4 million</p>
              <p className="users">users</p>
            </div>
            <div className="text">
              <p>in the last 30 days</p>
            </div>
          </div>
        </div>
        <div className="box2 box">
          <div className="secondBox">
            <div className="img">
              <img src="./assets/3logo3.svg" alt="" />
            </div>
            <div className="title">
              <p>55 million</p>
              <p className="trades">trades</p>
            </div>
            <div className="text">
              <p>made in the last 30 days</p>
            </div>
          </div>
        </div>
        <div className="box3 box">
          <div className="thirdBox">
            <div className="img">
              <img src="./assets/3logo4.svg" alt="" />
            </div>
            <div className="title">
              <p>$3.4 billion</p>
              <p className="staked">staked</p>
            </div>
            <div className="text">
              <p>Total Value Locked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
