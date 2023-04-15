import React from 'react';

export function SixthSection() {
  return (
    <section className="sixthSection">
    <div className="images">
      <div className="ab1">
        <div className="topImages">
          <div className="ball1 ball">
            <img src="./assets/ball1.webp" alt="" />
          </div>
          <div className="ball2 ball">
            <img src="./assets/ball2.webp" alt="" />
          </div>
          <div className="ball3 ball">
            <img src="./assets/ball3.webp" alt="" />
          </div>
          <div className="ball4 ball">
            <img src="./assets/ball4.webp" alt="" />
          </div>
          <div className="ball5 ball">
            <img src="./assets/ball5.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="ab2">
        <div className="buttomImages">
          <div className="card1 card">
            <img src="./assets/card1.webp" alt="" />
          </div>
          <div className="card2 card">
            <img src="./assets/card2.webp" alt="" />
          </div>
          <div className="card3 card">
            <img src="./assets/card3.webp" alt="" />
          </div>
          <div className="card4 card">
            <img src="./assets/card4.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="contentBox">
      <div className="mainContent">
        <div className="title">
          <p><span>Win</span> millions in prizes</p>
        </div>
        <div className="textMain">
          <p>Provably fair, on-chain games.</p>
          <p>Win big with PancakeSwap.</p>
        </div>
        <div className="cards">
          <div className="predictionBG">
            <div className="prediction card">
              <div className="icon">
                <img src="./assets/6icon1.svg" alt="" />
              </div>
              <div className="text">
                <p>Prediction</p>
                <p>$1 billion</p>
                <p>in BNB + CAKE won so far</p>
                <p>Predict the price trend of BNB or CAKE to win</p>
              </div>
              <div className="button">
                <button>
                  Play
                  <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-4ba21b47-0 cmKcxf"
                  >
                    <path
                      d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lotteryBG">
            <div className="lottery card">
              <div className="icon">
                <img src="./assets/6icon2.svg" alt="" />
              </div>
              <div className="text">
                <p>Lottery</p>
                <p>$88,653</p>
                <p>in CAKE prizes this round</p>
                <p>Buy tickets with CAKE, win CAKE if your numbers match</p>
              </div>
              <div className="button">
                <button>
                  Buy Tickets
                  <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-4ba21b47-0 cmKcxf"
                  >
                    <path
                      d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
