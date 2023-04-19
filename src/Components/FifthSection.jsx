import React, { useRef, useState } from 'react';
import { useEffect } from "react";
import { loadScript } from "../utils.js";
import { Helmet } from 'react-helmet';


export function FifthSection() {

  useEffect(() => {
    let firstLine = document.getElementById("ad1")
    let secondLine = document.getElementById("ad2")
    let firstTitle = document.getElementById("title51")
    let secondTitle = document.getElementById("title52")
    let firstButton = document.getElementById("btn51")
    let secondButton = document.getElementById("btn52")
    
    
    function animationFirst() {
        secondLine.style.animationName = "sliderUp";
        secondTitle.style.visibility = "visible";
        firstLine.style.animationName = "sliderDown";
        firstTitle.style.visibility = "hidden";
    }
    function animationSecond() {
        secondLine.style.animationName = "sliderDown";
        secondTitle.style.visibility = "hidden";
        firstLine.style.animationName = "sliderUp";
        firstTitle.style.visibility = "visible";
    }
    
    let bool = true; 
    let int1 = setInterval(() => {
        if (bool) {
            animationFirst()
            bool = false
        }
        else {
            animationSecond()
            bool = true
        }
    }, 5000)
    
    let int2;
    let int3;
    
    function clickedFirstButton() {
        let bool1 = true;
        clearInterval(int2)
        clearInterval(int3)
        int2 = setInterval(() => {
            if (bool1) {
                animationSecond()
                bool1 = false
            }
            else {
                animationFirst()
                bool1 = true
            }
        }, 5000)
    }
    
    function clickedSecondButton() {
        let bool2 = true;
        clearInterval(int2)
        clearInterval(int3)
        int3 = setInterval(() => {
            if (bool2) {
                animationFirst()
                bool2 = false
            }
            else {
                animationSecond()
                bool2 = true
            }
        }, 5000)
    }
    
    firstButton.addEventListener("click", function() {
        animationFirst()
        clearInterval(int1)
        clickedFirstButton()
    })
    
    secondButton.addEventListener("click", function() {
        animationSecond()
        clearInterval(int1)
        clickedSecondButton()
    })
    
    return () => {
      
    }
  }, []);

  // const [bool, setBool] = useState(true);
  // const [int1, setInt1] = useState(null);
  // const [int2, setInt2] = useState(null);
  // const [int3, setInt3] = useState(null);
  // let firstLine = document.getElementById("ad1")
  // let secondLine = document.getElementById("ad2")
  // let firstTitle = document.getElementById("title51")
  // let secondTitle = document.getElementById("title52")
  // let firstButton = document.getElementById("btn51")
  // let secondButton = document.getElementById("btn52")

  // useEffect(() => {
  //   setInt1(setInterval(() => {
  //     if (bool) {
  //       animationFirst();
  //       setBool(false);
  //     } else {
  //       animationSecond();
  //       setBool(true);
  //     }
  //   }, 5000));

  //   return () => clearInterval(int1);
  // }, []);

  // function animationFirst() {
  //   secondLine.style.animationName = "sliderUp";
  //   secondTitle.style.visibility = "visible";
  //   firstLine.style.animationName = "sliderDown";
  //   firstTitle.style.visibility = "hidden";
  // }

  // function animationSecond() {
  //   secondLine.style.animationName = "sliderDown";
  //   secondTitle.style.visibility = "hidden";
  //   firstLine.style.animationName = "sliderUp";
  //   firstTitle.style.visibility = "visible";
  // }

  // function clickedFirstButton() {
  //   let bool1 = true;
  //   clearInterval(int2);
  //   clearInterval(int3);
  //   setInt2(setInterval(() => {
  //     if (bool1) {
  //       animationSecond();
  //       bool1 = false;
  //     } else {
  //       animationFirst();
  //       bool1 = true;
  //     }
  //   }, 5000));
  // }

  // function clickedSecondButton() {
  //   let bool2 = true;
  //   clearInterval(int2);
  //   clearInterval(int3);
  //   setInt3(setInterval(() => {
  //     if (bool2) {
  //       animationFirst();
  //       bool2 = false;
  //     } else {
  //       animationSecond();
  //       bool2 = true;
  //     }
  //   }, 5000));
  // }
  


  return (
    <section className="fifthSection">
      <div className="svg">
        <img src="./assets/inner5.svg" alt="" />
      </div>
      <div className="top">
        <div className="images">
          <div className="first">
            <img src="./assets/stonks.webp" alt="" />
          </div>
          <div className="second">
            <img src="./assets/pie.webp" alt="" />
          </div>
          <div className="third">
            <img src="./assets/folder.webp" alt="" />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <p><span>Earn</span> passive income with crypto.</p>
          </div>
          <div className="text">
            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
          </div>
          <div className="btn_link">
            <div className="button">
              <button>Explore</button>
            </div>
            <div className="link">
              <a href="#">Learn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="title">
          <div className="first-title" id="title51">
            <p>Top <span>Farms</span></p>
            <div className="button" id="btn51">
              <button>
                <svg
                  viewBox="0 0 24 25"
                  height="24px"
                  width="24px"
                  color="textSubtle"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 ebMyYP"
                >
                  <path
                    d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="second-title" id="title52">
            <p>Top <span>Syrup Pools</span></p>
            <div className="button" id="btn52">
              <button>
                <svg
                  viewBox="0 0 24 25"
                  height="24px"
                  width="24px"
                  color="textSubtle"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-4ba21b47-0 ebMyYP"
                >
                  <path
                    d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="first-line lines" id="ad1">
            <div className="arena column">
              <p>ARENA-CAKE LP</p>
              <p>216.856%</p>
              <p>APR</p>
            </div>
            <div className="squad column">
              <p>ARV-BNB LP</p>
              <p>137.607%</p>
              <p>APR</p>
            </div>
            <div className="krs column">
              <p>WMX-BUSD LP</p>
              <p>132.147%</p>
              <p>APR</p>
            </div>
            <div className="wmx column">
              <p>SQUAD-CAKE LP</p>
              <p>117.227%</p>
              <p>APR</p>
            </div>
            <div className="mgp column last">
              <p>MGP-BUSD LP</p>
              <p>111.547%</p>
              <p>APR</p>
            </div>
          </div>
          <div className="second-line lines" id="ad2">
            <div className="stake column">
              <p>Stake CAKE</p>
              <p>48.334%</p>
              <p>APR</p>
            </div>
            <div className="xcad column">
              <p>Stake CAKE - Earn XCAD</p>
              <p>15.346%</p>
              <p>APR</p>
            </div>
            <div className="zbc column">
              <p>Stake CAKE - Earn ZBC</p>
              <p>14.380%</p>
              <p>APR</p>
            </div>
            <div className="primal column">
              <p>Stake CAKE - Earn PRIMAL</p>
              <p>14.203%</p>
              <p>APR</p>
            </div>
            <div className="champ column last">
              <p>Stake CAKE - Earn CHAMP</p>
              <p>13.884%</p>
              <p>APR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}