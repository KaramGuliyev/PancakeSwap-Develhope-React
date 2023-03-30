import React from 'react'
import '../styles/style.scss'
import '../styles/carousel/index.scss'

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carouselWrapper">
        <div className="slider firstSlider" id="1" style={{ opacity: 1 }}>
          <div className="contents">
            <h2>CNY Lottery Draw</h2>
            <div className="carouselTitle">Up to $96K in Prizes</div>
            <a href="#">
              <button>
                <div className="buttonDesc">Lottery</div>
                <img alt="carouselArrow" src="/assets/carousel/arrow.svg" />
              </button>
            </a>
          </div>
          <div className="imageContainer">
            <img src="/assets/carousel/upperRings.png" className="upperRings" alt="" />
            <img src="/assets/carousel/lowerRings.png" className="lowerRings" alt="" />
            <img src="/assets/carousel/rabbit.png" className="rabbit" alt="" />
          </div>
        </div>
        <div className="slider secondSlider" id="2" style={{ opacity: 0 }}>
          <div className="contents">
            <h2>
              <img src="/assets/carousel/AptosXPancakeSwap.png" alt="" srcset="" />
            </h2>
            <div className="carouselTitle">Hello Aptos Project Teams!</div>
            <a href="#">
              <button className="buttonDesc">
                👋 Get in Touch
                <img src="/assets/carousel/share.svg" alt="" srcset="" />
              </button>
            </a>
          </div>
          <div className="imageContainer">
            <img src="/assets/carousel/Aptos.png" className="aptos" alt="" />
          </div>
        </div>
        <div className="slider thirdSlider" id="3" style={{ opacity: 0 }}>
          <div className="contents">
            <h2>Perpetual Futures</h2>
            <div className="carouselTitle">Up to 100× Leverage</div>
            <a href="#">
              <button>
                <div className="buttonDesc">Trade Now</div>
                <img alt="carouselArrow" src="/assets/carousel/arrow.svg" />
              </button>
            </a>
          </div>
          <div className="imageContainer">
            <img src=" /assets/carousel/perpetualMobile.png" className="perpetual" alt="" />
          </div>
        </div>
      </div>
      <div className="carouselNav">
        <span className="carouselNavButton active" id="1"></span>
        <span className="carouselNavButton" id="2"></span>
        <span className="carouselNavButton" id="3"></span>
      </div>
    </div>
  )
}
