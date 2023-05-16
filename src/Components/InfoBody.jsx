import React from "react";
import { Link } from "react-router-dom";

export default function InfoBody() {
  return (
    <section name="info" class="infoBody">
      <div class="topHeader">
        <div class="headerElements active">
          <Link href="#">V3</Link>
        </div>
        <div class="headerElements">
          <Link href="#">V2</Link>
        </div>
        <div class="headerElements">
          <Link href="#">StableSwap</Link>
        </div>
      </div>
      <div class="topConteiner">
        <div class="topInnerConteiner">
          <div class="topLeft">
            <div class="topLeftLeft">
              <Link href="#" class="passive">
                Overview
              </Link>
              <Link href="#" class="passive">
                Pairs
              </Link>
              <Link href="#" class="active">
                Tokens
              </Link>
            </div>
            <div class="topLeftRight">
              <div class="topLeftRightImg">
                <img src="./assets/56.png" alt="" />
              </div>
              <div class="topLeftRightHeader">BNB Smart Chain</div>
              <div class="topLeftRightSvg">
                <img src="./assets/caret-down.svg"></img>
              </div>
            </div>
          </div>
          <div class="topRight">
            <div class="topRightInput">
              <input placeholder="Search liquidity pairs or tokens" />
            </div>
          </div>
        </div>
      </div>
      <div class="infoMainConteiner">
        <div className="upperConteiner">
          <div className="upContHeader">Top Movers</div>
          <div className="upContMovingBar">
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"></img>
                <div className="writings">
                  <div className="title">BIBI</div>
                  <div className="smallWritings">
                    <div className="left">$0.001</div>
                    <div className="rightPositive">↑24.83%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65.png"></img>
                <div className="writings">
                  <div className="title">IPP</div>
                  <div className="smallWritings">
                    <div className="left">$2.27</div>
                    <div className="right">↓2.08%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB.png"></img>
                <div className="writings">
                  <div className="title">COSMIC</div>
                  <div className="smallWritings">
                    <div className="left">$4.10</div>
                    <div className="rightPositive">↑11.42%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c.png"></img>
                <div className="writings">
                  <div className="title">OG</div>
                  <div className="smallWritings">
                    <div className="left">$6.77</div>
                    <div className="right">↓10.34%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639.png"></img>
                <div className="writings">
                  <div className="title">EDU</div>
                  <div className="smallWritings">
                    <div className="left">$1.04</div>
                    <div className="right">↓7.38%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xF700D4c708C2be1463E355F337603183D20E0808.png"></img>
                <div className="writings">
                  <div className="title">GQ</div>
                  <div className="smallWritings">
                    <div className="left">$0.0039</div>
                    <div className="right">↓6.37%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x755f34709E369D37C6Fa52808aE84A32007d1155.png"></img>
                <div className="writings">
                  <div className="title">NABOX</div>
                  <div className="smallWritings">
                    <div className="left">$0.0000054</div>
                    <div className="right">↓6.34%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"></img>
                <div className="writings">
                  <div className="title">Cake</div>
                  <div className="smallWritings">
                    <div className="left">$1.80</div>
                    <div className="right">↓5.70%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153.png"></img>
                <div className="writings">
                  <div className="title">FIL</div>
                  <div className="smallWritings">
                    <div className="left">$4.31</div>
                    <div className="right">↓5.14%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x9840652DC04fb9db2C43853633f0F62BE6f00f98/logo.png"></img>
                <div className="writings">
                  <div className="title">CGPT</div>
                  <div className="smallWritings">
                    <div className="left">$0.15</div>
                    <div className="right">↓4.37%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xe552Fb52a4F19e44ef5A967632DBc320B0820639.png"></img>
                <div className="writings">
                  <div className="title">Metis</div>
                  <div className="smallWritings">
                    <div className="left">$22.32</div>
                    <div className="right">↓4.02%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x12f31B73D812C6Bb0d735a218c086d44D5fe5f89.png"></img>
                <div className="writings">
                  <div className="title">CELL</div>
                  <div className="smallWritings">
                    <div className="left">$0.21</div>
                    <div className="right">↓3.95%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png"></img>
                <div className="writings">
                  <div className="title">BTCB</div>
                  <div className="smallWritings">
                    <div className="left">$26.42K</div>
                    <div className="right">↓3.87%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x0Ae38f7E10A43B5b2fB064B42a2f4514cbA909ef.png"></img>
                <div className="writings">
                  <div className="title">unshETH</div>
                  <div className="smallWritings">
                    <div className="left">$1762.72</div>
                    <div className="right">↓3.44%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xD06716E1Ff2E492Cc5034c2E81805562dd3b45fa.png"></img>
                <div className="writings">
                  <div className="title">MGP</div>
                  <div className="smallWritings">
                    <div className="left">$0.011</div>
                    <div className="right">↓3.11%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png"></img>
                <div className="writings">
                  <div className="title">ETH</div>
                  <div className="smallWritings">
                    <div className="left">$1,769.28</div>
                    <div className="right">↓3.07%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x2dfF88A56767223A5529eA5960Da7A3F5f766406.png"></img>
                <div className="writings">
                  <div className="title">ID</div>
                  <div className="smallWritings">
                    <div className="left">$0.45</div>
                    <div className="right">↓3.04%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xa2E3356610840701BDf5611a53974510Ae27E2e1.png"></img>
                <div className="writings">
                  <div className="title">wBETH</div>
                  <div className="smallWritings">
                    <div className="left">$1,769.86</div>
                    <div className="right">↓2.94%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402.png"></img>
                <div className="writings">
                  <div className="title">DOT</div>
                  <div className="smallWritings">
                    <div className="left">$5.24</div>
                    <div className="right">↓2.65%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movingBarBoxes">
              <div className="innerBox">
                <img src="https://tokens.pancakeswap.finance/images/0xECa41281c24451168a37211F0bc2b8645AF45092.png"></img>
                <div className="writings">
                  <div className="title">DEGEN</div>
                  <div className="smallWritings">
                    <div className="left">$0.00000030</div>
                    <div className="right">↓2.63%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="tokensTitle">All Tokens</h2>
        <div className="lowerConteiner">
          <div className="table">
            <div className="firstLine">
              <div className="firstLineElements">#</div>
              <div className="firstLineElSvg">
                <div className="firstLineElements">Name</div>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="text"
                    width="20px"
                    class="sc-231a1e38-0 dPwWVs"
                  >
                    <path d="M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"></path>
                    <path d="M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"></path>
                  </svg>
                </button>
              </div>
              <div className="firstLineElSvg">
                <div className="firstLineElements">Price</div>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="text"
                    width="20px"
                    class="sc-231a1e38-0 dPwWVs"
                  >
                    <path d="M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"></path>
                    <path d="M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"></path>
                  </svg>
                </button>
              </div>
              <div className="firstLineElSvg">
                <div className="firstLineElements">Price Change</div>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="text"
                    width="20px"
                    class="sc-231a1e38-0 dPwWVs"
                  >
                    <path d="M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"></path>
                    <path d="M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"></path>
                  </svg>
                </button>
              </div>
              <div className="firstLineElSvg">
                <div className="firstLineElements">Volume 24H</div>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="text"
                    width="20px"
                    class="sc-231a1e38-0 dPwWVs"
                  >
                    <path d="M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"></path>
                    <path d="M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"></path>
                  </svg>
                </button>
              </div>
              <div className="firstLineElSvg">
                <div className="firstLineElements">TVL</div>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="text"
                    width="20px"
                    class="sc-231a1e38-0 dPwWVs"
                  >
                    <path d="M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z"></path>
                    <path d="M16 11V17.01H17.8C18.24 17.01 18.47 17.55 18.15 17.86L15.36 20.64C15.16 20.83 14.85 20.83 14.65 20.64L11.86 17.86C11.54 17.55 11.76 17.01 12.21 17.01H14V11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">1</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x55d398326f99059fF775485246999027B3197955.png"></img>
                <div className="name">Tether USD</div>
                <div className="shortName">(USDT)</div>
              </div>
              <div className="price">$1.00</div>
              <div className="priceChange">0.00%</div>
              <div className="volume">$84.12M</div>
              <div className="tvl">$60.04M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">2</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"></img>
                <div className="name">Wrapped BNB</div>
                <div className="shortName">(WBNB)</div>
              </div>
              <div className="price">$305.60</div>
              <div className="priceChangeNegative">↓2.08%</div>
              <div className="volume">$78.86M</div>
              <div className="tvl">$64.22M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">3</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png"></img>
                <div className="name">BUSD Token</div>
                <div className="shortName">(BUSD)</div>
              </div>
              <div className="price">$1.00</div>
              <div className="priceChange">0.00%</div>
              <div className="volume">$32.59M</div>
              <div className="tvl">$28.01M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">4</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png"></img>
                <div className="name">BTCB Token</div>
                <div className="shortName">(BTCB)</div>
              </div>
              <div className="price">$26.42K</div>
              <div className="priceChangeNegative">↓3.80%</div>
              <div className="volume">$18.38M</div>
              <div className="tvl">$29.83M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">5</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png"></img>
                <div className="name">Etherium Token</div>
                <div className="shortName">(ETH)</div>
              </div>
              <div className="price">$1.77K</div>
              <div className="priceChangeNegative">↓3.07%</div>
              <div className="volume">$9.82M</div>
              <div className="tvl">$24.84M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">6</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png"></img>
                <div className="name">USD Coin</div>
                <div className="shortName">(USDC)</div>
              </div>
              <div className="price">$1.00</div>
              <div className="priceChange">0.00%</div>
              <div className="volume">$9.12M</div>
              <div className="tvl">$31.94M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">7</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.png"></img>
                <div className="name">PancakeSwap Token</div>
                <div className="shortName">(Cake)</div>
              </div>
              <div className="price">$1.80</div>
              <div className="priceChangeNegative">↓5.70%</div>
              <div className="volume">$4.93M</div>
              <div className="tvl">$13.64M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">8</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0xBdEAe1cA48894A1759A8374D63925f21f2Ee2639.png"></img>
                <div className="name">EDU Coin</div>
                <div className="shortName">(EDU)</div>
              </div>
              <div className="price">$1.04</div>
              <div className="priceChangeNegative">↓7.38%</div>
              <div className="volume">$2.82M</div>
              <div className="tvl">$2.04M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">9</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png"></img>
                <div className="name">BIBI</div>
                <div className="shortName">(BIBI)</div>
              </div>
              <div className="price">$0.001</div>
              <div className="priceChange">↑24.83%</div>
              <div className="volume">$1.12M</div>
              <div className="tvl">$4.04M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lines">
              <div className="numbers">10</div>
              <div className="nameLogo">
                <img src="https://tokens.pancakeswap.finance/images/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png"></img>
                <div className="name">XRP Token</div>
                <div className="shortName">(XRP)</div>
              </div>
              <div className="price">$0.43</div>
              <div className="priceChange">↑1.32%</div>
              <div className="volume">$1.34M</div>
              <div className="tvl">$3.04M</div>
            </div>
            <div className="borderLines"></div>
            <div className="lastLine">
              <div className="leftSvg">
                <svg
                  viewBox="0 0 24 24"
                  color="textDisabled"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-231a1e38-0 bIWwRc"
                >
                  <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path>
                </svg>
              </div>
              <div className="middleTitle">Page 1 of 5</div>
              <div className="rightSvg">
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-231a1e38-0 dTViYw"
                >
                  <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
