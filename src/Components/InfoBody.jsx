import React from "react";

export default function InfoBody() {
  return (
    <section name="info" class="infoBody">
      <div class="topHeader">
        <div class="headerElements active">
          <Link href="#">Swap</Link>
        </div>
        <div class="headerElements">
          <Link href="#">StableSwap</Link>
        </div>
      </div>
      <div class="topConteiner">
        <div class="topInnerConteiner">
          <div class="TopLeft">
            <div class="topLeftLeft">
              <Link href="#" class="active">
                Overview
              </Link>
              <Link href="#" class="passive">
                Pairs
              </Link>
              <Link href="#" class="passive">
                Tokens
              </Link>
            </div>
            <div class="topLeftRight">
              <div class="topLeftRightImg">
                <img src="./assets/56.png" alt="" />
              </div>
              <div class="topLeftRightHeader">BNB Smart Chain</div>
              <div class="topLeftRightSvg">
                <svg
                  viewBox="0 0 24 24"
                  color="#f4eeff"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-4ba21b47-0 IIbzK"
                >
                  <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                </svg>
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
        <div class="firstTitle">
          <p>PancakeSwap Info & Analytics</p>
        </div>
        <div class="charts">
          <div class="leftChart"></div>
          <div class="rightChart"></div>
        </div>
        <div class="secondTitle">
          <p>Top Tokens</p>
        </div>
        <div class="firstList">
          <div class="line1">
            <div class="line1Elements">#</div>
            <div class="line1Elements">NAME</div>

            <div class="line1Elements">PRICE</div>
            <div class="line1Elements">PRICE CHANGE</div>
            <div class="line1Elements">VOLUME 24H</div>
            <div class="line1Elements">LIQUIDITY</div>
          </div>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">1</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">Wrapped BNB</div>
              <div class="shortNames">(WBNB)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$290.80</div>
              <div class="priceChanges">↑0.35%</div>
              <div class="volumes">$87.61M</div>
              <div class="liquidities">$724.61m</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">2</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">Tether USD</div>
              <div class="shortNames">(USDT)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$1.00</div>
              <div class="priceChanges">↑0.01%</div>
              <div class="volumes">$58.23M</div>
              <div class="liquidities">$313.22M</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">3</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">BUSD Token</div>
              <div class="shortNames">(BUSD)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$1.00</div>
              <div class="priceChangesNegative">↓0.21%</div>
              <div class="volumes">$43.49M</div>
              <div class="liquidities">$270.10M</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">4</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">NutriFit AI</div>
              <div class="shortNames">(NFAI)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$0.000040</div>
              <div class="priceChanges">↑701.74%</div>
              <div class="volumes">$7.86M</div>
              <div class="liquidities">$126.75K</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">5</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">PancakeSwap Token</div>
              <div class="shortNames">(CAKE)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$3.79</div>
              <div class="priceChanges">↑0.93%</div>
              <div class="volumes">$2.99M</div>
              <div class="liquidities">$118.61M</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">6</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">Doge KaKi</div>
              <div class="shortNames">(KAKI)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$0.00000023</div>
              <div class="priceChangesNegative">↓5.67%</div>
              <div class="volumes">$2.72</div>
              <div class="liquidities">$313.26K</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">7</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">Kochi Ken</div>
              <div class="shortNames">(KOCHI)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$0.0051</div>
              <div class="priceChangesNone">-</div>
              <div class="volumes">$2.49M</div>
              <div class="liquidities">$492.79K</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">8</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">USD Coin</div>
              <div class="shortNames">(USDC)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$1.00</div>
              <div class="priceChanges">↑0.35%</div>
              <div class="volumes">$2.12M</div>
              <div class="liquidities">$41.92M</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">9</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">BinaryX</div>
              <div class="shortNames">(BNX)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$0.77</div>
              <div class="priceChangesNegative">↓10.77%</div>
              <div class="volumes">$2.11M</div>
              <div class="liquidities">$8.87M</div>
            </div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="listLinks">
            <div class="numbers">10</div>
            <div class="elementsLeft">
              <div class="icons">
                <img />
              </div>
              <div class="names">Ethereum Token</div>
              <div class="shortNames">(ETH)</div>
            </div>
            <div class="elementsRight">
              <div class="prices">$1569.29</div>
              <div class="priceChangesNegative">↓0.26%</div>
              <div class="volumes">$1.83M</div>
              <div class="liquidities">$59.74M</div>
            </div>
          </Link>
          <div class="borderLines"></div>

          <div class="lastLine">
            <div class="lastLineLeftSvg">
              <svg></svg>
            </div>
            <div class="lastLineText">Page 1 of 3</div>
            <div class="lastLineRightSvg">
              <svg></svg>
            </div>
          </div>
        </div>
        <div class="thirdTitle">
          <p>Top Pairs</p>
        </div>
        <div class="secondList">
          <div class="line1">
            <div class="line2Elements">#</div>
            <div class="line2Elements">PAIR</div>
            <div class="line2Elements">VOLUME 24H ↓</div>
            <div class="line2Elements">VOLUME 7D</div>
            <div class="line2Elements">LP REWARD FEES 24H</div>
            <div class="line2Elements">LP REWARD APR</div>
            <div class="line2Elements">LIQUIDITY</div>
          </div>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">1</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="./assets/blueToken.svg" />
                <img src="./assets/blueToken.svg" />
              </div>
              <div class="pairs">USDT/WBNB</div>
            </div>
            <div class="volume24h">$18.75M</div>
            <div class="volume7d">$120.91M</div>
            <div class="lpRewardFees">$31.88K</div>
            <div class="lprewardApr">5.18%</div>
            <div class="liquidiies">$206.75M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">2</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">USDT/BUSD</div>
            </div>
            <div class="volume24h">$18.55M</div>
            <div class="volume7d">$118.58M</div>
            <div class="lpRewardFees">$31.53K</div>
            <div class="lprewardApr">17.20%</div>
            <div class="liquidiies">$61.10M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">3</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">WBNB/BUSD</div>
            </div>
            <div class="volume24h">$12.82M</div>
            <div class="volume7d">$71.61M</div>
            <div class="lpRewardFees">$21.80K</div>
            <div class="lprewardApr">4.33%</div>
            <div class="liquidiies">$146.60M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">4</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">WBNB/TOR</div>
            </div>
            <div class="volume24h">$11.60M</div>
            <div class="volume7d">$29.61M</div>
            <div class="lpRewardFees">$19.61K</div>
            <div class="lprewardApr">1173.99%</div>
            <div class="liquidiies">$223.57K</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">5</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">X-AI/WBNB</div>
            </div>
            <div class="volume24h">$2.01M</div>
            <div class="volume7d">$2.01M</div>
            <div class="lpRewardFees">$3413.02</div>
            <div class="lprewardApr">129.50%</div>
            <div class="liquidiies">$137.43K</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">6</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">DAO/BUSD</div>
            </div>
            <div class="volume24h">$1.89M</div>
            <div class="volume7d">$5.18M</div>
            <div class="lpRewardFees">$3209.30</div>
            <div class="lprewardApr">20.55%</div>
            <div class="liquidiies">$2.23M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">7</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">KAKI/USDT</div>
            </div>
            <div class="volume24h">$1.21M</div>
            <div class="volume7d">$16.07M</div>
            <div class="lpRewardFees">$2049.50</div>
            <div class="lprewardApr">263.21%</div>
            <div class="liquidiies">$541.09K</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">8</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">CAKE/WBNB</div>
            </div>
            <div class="volume24h">$1.01M</div>
            <div class="volume7d">$10.29M</div>
            <div class="lpRewardFees">$1723.48</div>
            <div class="lprewardApr">0.43%</div>
            <div class="liquidiies">$209.26M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">9</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">TIME/USDT</div>
            </div>
            <div class="volume24h">$709.60K</div>
            <div class="volume7d">$5.38M</div>
            <div class="lpRewardFees">$1206.31</div>
            <div class="lprewardApr">36.24%</div>
            <div class="liquidiies">$1.32M</div>
          </Link>
          <div class="borderLines"></div>
          <Link href="#" class="secondListLinks">
            <div class="numbers">10</div>
            <div class="iconsNames">
              <div class="icons">
                <img src="" />
                <img src="" />
              </div>
              <div class="pairs">GO!/WBNB</div>
            </div>
            <div class="volume24h">$559.34K</div>
            <div class="volume7d">$1.74M</div>
            <div class="lpRewardFees">$950.88</div>
            <div class="lprewardApr">63.60%</div>
            <div class="liquidiies">$227.47K</div>
          </Link>
          <div class="borderLines"></div>

          <div class="lastLine">
            <div class="lastLineLeftSvg">
              <svg></svg>
            </div>
            <div class="lastLineText">Page 1 of 3</div>
            <div class="lastLineRightSvg">
              <svg></svg>
            </div>
          </div>
          <div class="borderLines"></div>
        </div>
        <div class="fourthTitle">
          <p>Transactions</p>
        </div>
        <div class="selectionInputs">
          <div class="firstInput">
            <input type="radio" id="all" name="all" />
            <label for="all">All</label>
          </div>
          <div class="secondInput">
            <input type="radio" id="swaps" name="all" />
            <label for="swaps">Swaps</label>
          </div>
          <div class="thirdInput">
            <input type="radio" id="adds" name="all" />
            <label for="adds">Adds</label>
          </div>
          <div class="fourthInput">
            <input type="radio" id="removes" name="all" />
            <label for="removes">Removes</label>
          </div>
        </div>
        <div class="thirdList"></div>
      </div>
    </section>
  );
}
