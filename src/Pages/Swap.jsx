import { useEffect } from "react";
import { loadScript } from "../utils.js";

function Swap() {
  //   useEffect(() => {
  //     console.log(!isMyScriptLoaded("scripts/swap.js"))
  //     if (!isMyScriptLoaded("scripts/swap.js")) {
  //       console.log("loading script")
  //       let script = loadScript("scripts/swap.js");
  //     }
  //     // load javascript after component loads
  //     return () => {
  //       // // unload js after component unloads
  //       // console.log("unloading script")
  //       // document.head.removeChild(script);
  //     };
  //   }, []);

  useEffect(() => {
    // load javascript after component loads
    let script = loadScript("scripts/swap.js");
    console.log(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="swap-body">
      {/* <!--Header navigation menu start--> */}
      <div className="nav top">
        <nav>
          <div className="header-left">
            <div className="header-left__logo">
              <a href="/">
                <img className="logo-desktop" src="./assets/logo.svg" alt="" />
                <img
                  className="logo-mobile"
                  src="./assets/logo-mobile.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="header-left__links">
              <div className="link-1">
                <div className="link-head">
                  <a href="#">
                    <span className="swap-trade-span">Trade</span>
                  </a>
                </div>
                <div className="link-content">
                  <div>
                    <a href="#">Swap</a>
                  </div>
                  <div>
                    <a href="#">Limit</a>
                  </div>
                  <div>
                    <a href="#">Liquidity</a>
                  </div>
                  <div>
                    <a href="#">
                      Perpetual
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      Bridge
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="link-2">
                <div className="link-head">
                  <a href="#">Earn</a>
                </div>
                <div className="link-content">
                  <div>
                    <a href="#">Farms</a>
                  </div>
                  <div>
                    <a href="./pools.html">Pools</a>
                  </div>
                </div>
              </div>
              <div className="link-3">
                <div className="link-head">
                  <a href="#">Win</a>
                </div>
                <div className="link-content">
                  <div>
                    <a href="#">Trading Competition</a>
                  </div>
                  <div>
                    <a href="#">Prediction (BETA)</a>
                  </div>
                  <div>
                    <a href="#">Lottery</a>
                  </div>
                  <div>
                    <a href="#">Pottery (BETA)</a>
                  </div>
                </div>
              </div>
              <div className="link-4">
                <div className="link-head">
                  <a href="#">NFT</a>
                </div>
                <div className="link-content">
                  <div>
                    <a href="#">Overview</a>
                  </div>
                  <div>
                    <a href="#">Collections</a>
                  </div>
                  <div>
                    <a href="#">Activity</a>
                  </div>
                </div>
              </div>
              <div className="link-5">
                <div className="link-head">
                  <a href="#">
                    <img src="./assets/3dot.svg" alt="" />
                  </a>
                </div>
                <div className="link-content">
                  <div>
                    <a href="#">Info</a>
                  </div>
                  <div>
                    <a href="./ifo.html">IFO</a>
                  </div>
                  <div>
                    <a href="#">Voting</a>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div>
                    <a href="#">Leaderboard</a>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div>
                    <a href="#">
                      Blog
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      Docs
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="currency-price">
              <a href="#">
                <img src="./assets/bunny-logo.svg" alt="" />
                <div className="text-currency">$3.367</div>
              </a>
            </div>
            <div className="lang-select-container">
              <div className="lang-select">
                <button className="lang-select-btn">
                  <img src="./assets/navGlobe.svg" alt="" />
                </button>
                <div className="lang-select-content">
                  <button className="lang-item">English</button>
                  <button className="lang-item">Türkçe</button>
                  <button className="lang-item">German</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Bahasa Indonesia</button>
                </div>
              </div>
            </div>
            <div className="settings">
              <button id="modal-button" className="settings-btn">
                <img src="./assets/navGear.svg" alt="" />
              </button>
            </div>
            <div className="network-select">
              <div className="network-select-link">
                <div className="link-img">
                  <img src="./assets/56.png" alt="" />
                </div>
                <div className="link-text">
                  <div className="link-text-desktop">BNB Smart Chain</div>
                  <div className="link-text-mobile">BNB</div>
                </div>
                <img src="./assets/caret-down.svg" alt="" />
              </div>
              <div className="network-select-content">
                <div className="network-select-text">
                  <div className="text-Subtle">Select a Network</div>
                </div>
                <hr />
                <button className="active">
                  <img src="./assets/56.png" alt="" />
                  <div className="btn-text">BNB Smart Chain</div>
                </button>
                <button>
                  <img src="./assets/1.png" alt="" />
                  <div className="btn-text">Etherium</div>
                </button>
                <button>
                  <img src="./assets/apt.png" alt="" />
                  <div className="btn-text">Aptos</div>
                </button>
              </div>
            </div>
            <button className="connect-wallet-btn">
              <div className="connect-wallet-btn-desktop">Connect Wallet</div>
              <div className="connect-wallet-btn-mobile">Connect</div>
            </button>
          </div>
        </nav>
      </div>
      {/* <!--Settings modal content start--> */}
      <div id="modal">
        <div className="modal-content">
          <div className="modal-content-header">
            <span>Settings</span>
            <button className="close">
              <img src="./assets/times.svg" alt="" />
            </button>
          </div>
          <div className="modal-content-middle">
            <ul>
              <li>GLOBAL</li>
              <li>
                <span>Dark mode</span>
                <div className="theme-select">
                  <div className="theme-select-outer appear">
                    <div className="theme-select-inner">
                      <input type="checkbox" />
                      <div className="selected-theme">
                        <div>
                          <div>
                            <img src="./assets/dark-theme.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="theme-selection-options">
                        <img src="./assets/light-theme.svg" alt="" />
                        <img src="./assets/dark-theme.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span>Subgraph Health Indicator</span>
                <div className="theme-select on-off-btn">
                  <div className="theme-select-outer appear">
                    <div className="theme-select-inner">
                      <input className="on-off-btn" type="checkbox" />
                      <div className="selected-theme">
                        <div>
                          <div></div>
                        </div>
                      </div>
                      <div className="theme-selection-options"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span>Show username</span>
                <div className="theme-select">
                  <div className="theme-select-outer appear">
                    <div className="theme-select-inner">
                      <input type="checkbox" />
                      <div className="selected-theme">
                        <div>
                          <div></div>
                        </div>
                      </div>
                      <div className="theme-selection-options"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span>Token Risk Scanning</span>
                <div className="theme-select">
                  <div className="theme-select-outer appear">
                    <div className="theme-select-inner">
                      <input type="checkbox" />
                      <div className="selected-theme">
                        <div>
                          <div></div>
                        </div>
                      </div>
                      <div className="theme-selection-options"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span>Default Transaction Speed (GWEI)</span>
                <div className="li-btns">
                  <button>RPC Default</button> <button>Standard (5)</button>
                  <button>Fast (6)</button>
                  <button>Instant (7)</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!--Settings modal content end-->
  <!--Header navigation menu end-->
  <!-- MOBILE NAV START--> */}
      <div className="mobile-nav">
        <div className="mobile-nav-link">
          <span>
            <a href="#">
              <div className="container">
                <img
                  className="mobile-nav-link-img"
                  src="./assets/trade.svg"
                  alt=""
                />
                <span className="mobile-nav-link-text">Trade</span>
              </div>
            </a>
          </span>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <div className="container">
              <button id="btn-1" type="button">
                <div className="container">
                  <img
                    className="mobile-nav-link-img"
                    src="./assets/earn.svg"
                    alt=""
                  />
                  <span className="mobile-nav-link-text">Earn</span>
                </div>
              </button>
            </div>
          </span>
          <div className="mobile-nav-menu">
            <a href="#">Farms</a>
            <a href="./pools.html">Pools</a>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button id="btn-2">
              <div className="container">
                <img
                  className="mobile-nav-link-img"
                  src="./assets/win.svg"
                  alt=""
                />
                <span className="mobile-nav-link-text">Win</span>
              </div>
            </button>
          </span>
          <div className="mobile-nav-menu">
            <a href="#">Trading Competition</a>
            <a href="#">Prediction (BETA)</a>
            <a href="#">Lottery</a>
            <a href="#">Pottery (BETA)</a>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button href="#">
              <div className="container">
                <img
                  className="mobile-nav-link-img"
                  src="./assets/nft.svg"
                  alt=""
                />
                <span className="mobile-nav-link-text">NFT</span>
              </div>
            </button>
          </span>
          <div className="mobile-nav-menu">
            <a href="#">Overview</a>
            <a href="#">Collections</a>
            <a href="#">Activity</a>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button>
              <img src="./assets/3dot.svg" alt="" />
            </button>
          </span>
          <div className="mobile-nav-menu">
            <a href="#">IFO</a>
            <a href="#">Voting</a>
            <hr />
            <a href="#">Leaderboard</a>
            <hr />
            <a href="#">
              <div>
                Blog <img src="./assets/enter.svg" alt="" />
              </div>
            </a>
            <a href="#">
              <div>
                Docs <img src="./assets/enter.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- MOBILE NAV END-->
  <!-- Main Section Start --> */}
      <section className="swap" id="swap-section">
        <div className="swap-nav">
          <div className="links">
            <div className="swap-link">
              <div className="swap-bg">
                <a href="#">Swap</a>
              </div>
            </div>
            <div className="limit-link link">
              <a href="#">Limit</a>
            </div>
            <div className="liquidity-link link">
              <a href="#">Liquidity</a>
            </div>
            <div className="perpetual-link link">
              <a href="#">
                Perpetual{" "}
                <img src="./assets/swap1.svg" alt="" />
              </a>
            </div>
            <div className="bridge-link link">
              <a href="#">
                Bridge <img src="./assets/swap1.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="main-content" id="main-content">
          <div className="graph-card" id="graph-card">
            <div className="graph-bg chart-on" id="graph-bg">
              <div className="graph" id="swap-graph-chart-div">
                <div className="graph-top">
                  <div className="coins">
                    <div
                      className="icons"
                      id="swap-graph-icons"
                    >
                      <img src="./assets/swap9.svg" alt="" />
                      <img
                        src="./assets/swap-icon-rabbit.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p id="swap-coins-name-p">BNB/CAKE</p>
                    </div>
                    <div className="swap-button">
                      <button id="swap-coins-name-btn">
                        <img
                          src="./assets/swap-button.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="size-changer">
                    <button id="size-changer">
                      <img
                        id="size-changer-img"
                        src="./assets/swap-size-button.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="graph-info">
                  <div className="graph-content">
                    <div className="content-top">
                      <div className="exchange-value">
                        <p id="swap-coin-value">77.09</p>
                      </div>
                      <div className="exchange-coins">
                        <p id="swap-coins-name-p2">BNB/CAKE</p>
                      </div>
                      <div className="exchange-percent">
                        <p id="swap-coins-percent">
                          +0.441 (0.58%)
                        </p>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <p>
                        <span id="swap-chart-data">Mar 4</span>,{" "}
                        <span id="swap-chart-year">2023</span>,{" "}
                        <span id="swap-chart-time">
                          09:25 PM
                        </span>{" "}
                        (UTC)
                      </p>
                    </div>
                  </div>
                  <div className="graph-date">
                    <div className="dates">
                      <button id="swap-graph-day">24H</button>
                      <button id="swap-graph-week">1W</button>
                      <button id="swap-graph-month">1M</button>
                      <button id="swap-graph-year">1Y</button>
                    </div>
                  </div>
                </div>
                <div id="container">
                  <canvas id="firstChart"></canvas>
                  <canvas id="secondChart"></canvas>
                  <canvas id="thirdChart"></canvas>
                  <canvas id="fourthChart"></canvas>
                  <canvas id="fifthChart"></canvas>
                  <canvas id="sixthChart"></canvas>
                  <canvas id="seventhChart"></canvas>
                  <canvas id="eighthChart"></canvas>
                </div>
              </div>
            </div>
            <div className="card-box" id="card-box">
              <div className="card-bg">
                <div className="card">
                  <div className="titles">
                    <div className="title">
                      <p>Swap</p>
                    </div>
                    <div className="text">
                      <p>Trade tokens in an instant</p>
                    </div>
                    <div className="icons">
                      <div className="btn1 btn">
                        <button id="graph-visibility-btn">
                          <img
                            src="./assets/swap11.svg"
                            alt=""
                            id="card-btn1-img"
                          />
                        </button>
                      </div>
                      <div className="btn2 btn">
                        <button>
                          <svg
                            viewBox="0 0 16 16"
                            color="textSubtle"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#b8add2"
                            className="sc-4ba21b47-0 ebMyYP"
                          >
                            <path d="M11.3933 3.03997C10.9266 2.35331 10.3933 1.71331 9.79329 1.13997C9.55996 0.913306 9.16663 1.12664 9.23329 1.44664C9.35996 2.07331 9.49329 2.89997 9.49329 3.63997C9.49329 5.01331 8.59329 6.12664 7.21996 6.12664C6.19329 6.12664 5.35329 5.50664 4.98663 4.61997C4.91996 4.48664 4.89329 4.40664 4.85329 4.25997C4.77996 3.97997 4.41329 3.89331 4.25329 4.13997C4.13329 4.31997 4.01996 4.49997 3.91329 4.69331C3.11996 6.05331 2.66663 7.63997 2.66663 9.33331C2.66663 12.28 5.05329 14.6666 7.99996 14.6666C10.9466 14.6666 13.3333 12.28 13.3333 9.33331C13.3333 7.00664 12.6133 4.84664 11.3933 3.03997ZM7.80663 12.6666C6.61996 12.6666 5.65996 11.7333 5.65996 10.5733C5.65996 9.49331 6.35996 8.73331 7.53329 8.49331C8.51329 8.29331 9.51996 7.87331 10.22 7.21331C10.4066 7.03997 10.7133 7.11997 10.7666 7.36664C10.92 8.04664 11 8.75331 11 9.46664C11.0066 11.2333 9.57329 12.6666 7.80663 12.6666Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn3 btn">
                        <button id="swap-settings-btn">
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            color="textSubtle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#b8add2"
                            className="sc-4ba21b47-0 ebMyYP"
                          >
                            <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn4 btn">
                        <button>
                          <svg
                            viewBox="0 0 24 24"
                            color="textSubtle"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#b8add2"
                            className="sc-4ba21b47-0 ebMyYP"
                          >
                            <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn5 btn">
                        <button>
                          <svg
                            id="arrow_loading"
                            viewBox="0 0 24 24"
                            color="#b8add2"
                            fill="#b8add2"
                            width="27px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sc-4ba21b47-0 ebMyYP"
                          >
                            <path
                              stroke="none"
                              fill="#D7CAEC"
                              d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                            ></path>
                            <defs>
                              <path
                                id="arrow"
                                stroke="none"
                                fill="none"
                                d="M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"
                              ></path>
                              <clipPath id="arrow-clip">
                                <use xmlnsXlink="#arrow"></use>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="calc" id="calc-box">
                    <div
                      className="calc-content"
                      id="calc-content"
                    >
                      <div
                        className="title-input1"
                        id="title-input1"
                      >
                        <div className="calc-title1 calc-title">
                          <div className="title1-button title-button">
                            <button className="btn">
                              <div className="icon1 icon">
                                <img
                                  src="./assets/swap9.svg"
                                  alt=""
                                />
                              </div>
                              <div className="title">
                                <p>BNB</p>
                              </div>
                              <div className="arrow">
                                <img
                                  src="./assets/swap-arrow1.svg"
                                  alt=""
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="input1 input">
                          <label for="">
                            <div className="text-input">
                              <input
                                type="text"
                                id="first-input"
                                placeholder="0.0"
                                autoComplete="off"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                minlength="1"
                                maxlength="79"
                              />
                            </div>
                            <div className="label-bottom"></div>
                          </label>
                          <div className="first-input-bottom input-bottom">
                            <p
                              id="first-input-p"
                              className="input-bottom-p"
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="arrow-down"
                        id="arrow-down"
                      >
                        <button id="input-switch-btn">
                          <svg
                            viewBox="0 0 24 24"
                            className="sc-4ba21b47-0 hgqOyz _1cvvxtw3"
                            color="primary"
                            fill="#1fc7d4"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div
                        className="title-input2"
                        id="title-input2"
                      >
                        <div className="calc-title2 calc-title">
                          <div className="title2-button title-button">
                            <button className="btn">
                              <div className="icon2 icon">
                                <img
                                  src="./assets/swap-icon-rabbit.png"
                                  className="rabbit"
                                  alt=""
                                />
                              </div>
                              <div className="title">
                                <p>CAKE</p>
                              </div>
                              <div className="arrow">
                                <img
                                  src="./assets/swap-arrow1.svg"
                                  alt=""
                                />
                              </div>
                            </button>
                            <div className="swap-copy">
                              <button>
                                <svg
                                  viewBox="0 0 24 24"
                                  color="#b8add2"
                                  fill="#b8add2"
                                  width="16px"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-4ba21b47-0 ebMyYP"
                                >
                                  <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="input2 input">
                          <label for="">
                            <div className="text-input">
                              <input
                                type="text"
                                id="second-input"
                                placeholder="0.0"
                                autoComplete="off"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                minlength="1"
                                maxlength="79"
                              />
                            </div>
                            <div className="label-bottom"></div>
                          </label>
                          <div className="second-input-bottom input-bottom">
                            <p
                              id="second-input-p"
                              className="input-bottom-p"
                            ></p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="low-risk-div"
                        id="low-risk-div"
                      >
                        <div className="low-risk">
                          <div className="low-risk-info">
                            <div className="low-risk-info-div"></div>
                            <div className="low-risk-info-text">
                              <p>
                                Risk scan results are provided
                                by a third party{" "}
                                <a>AvengerDAO</a>
                              </p>
                              <p>
                                It is a tool for indicative
                                purposes only to allow users to
                                check the reference risk level
                                of a BNB Chain Smart Contract.
                                Please do your own research -
                                interactions with any BNB Chain
                                Smart Contract is at your own
                                risk.
                              </p>
                              <p>
                                Learn more about risk rating{" "}
                                <a>here.</a>
                              </p>
                            </div>
                          </div>
                          <div className="text">
                            <p>Low Risk</p>
                          </div>
                          <div className="question-icon">
                            <img
                              src="./assets/swap10.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="toleranse-box">
                        <div className="price" id="price">
                          <div className="text">
                            <p>Price</p>
                          </div>
                          <div className="icon-values">
                            <div className="first-coin">
                              <p id="price-first-coin">
                                1 CAKE
                              </p>
                            </div>
                            <div className="arrow">
                              <svg
                                viewBox="0 0 24 25"
                                color="textSubtle"
                                fill="#b8add2"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-4ba21b47-0 bJaLVU"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
                                ></path>
                              </svg>
                            </div>
                            <div className="second-coin">
                              <p id="price-second-coin">
                                0.0131594 BNB
                              </p>
                            </div>
                            <div className="btn">
                              <button id="price-of-coins-btn">
                                <svg
                                  viewBox="0 0 24 24"
                                  width="14px"
                                  color="white"
                                  fill="white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-4ba21b47-0 IIbzK"
                                >
                                  <path d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="toleranse">
                          <div className="text-pen">
                            <div className="text">
                              <p>Slippage Tolerance</p>
                            </div>
                            <div className="pen-icon">
                              <button>
                                <svg
                                  viewBox="0 0 19 19"
                                  color="primary"
                                  fill="#1fc7d4"
                                  width="10px"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="sc-4ba21b47-0 hgqOyz"
                                >
                                  <path d="M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="percent">
                            <p>0.5%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="connect-button">
                      <button>Connect Wallet</button>
                    </div>
                  </div>
                  <div className="price-info" id="price-info">
                    <div className="first-line line">
                      <p className="left-side">
                        Minimum received{" "}
                        <svg
                          viewBox="0 0 24 24"
                          color="textSubtle"
                          fill="#b8add2"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-4ba21b47-0 ebMyYP"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                        </svg>
                      </p>
                      <p className="right-side">75.72 CAKE</p>
                    </div>
                    <div className="second-line line">
                      <p className="left-side">
                        Price Impact{" "}
                        <svg
                          viewBox="0 0 24 24"
                          color="textSubtle"
                          fill="#b8add2"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-4ba21b47-0 ebMyYP"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                        </svg>
                      </p>
                      <p className="right-side">0.01% </p>
                    </div>
                    <div className="third-line line">
                      <p className="left-side">
                        Liquidity Provider Fee{" "}
                        <svg
                          viewBox="0 0 24 24"
                          color="textSubtle"
                          fill="#b8add2"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-4ba21b47-0 ebMyYP"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                        </svg>
                      </p>
                      <p className="right-side">0.0025 BNB</p>
                    </div>
                    <div className="fourth-line line">
                      <p className="left-side">
                        Route{" "}
                        <svg
                          viewBox="0 0 24 24"
                          color="textSubtle"
                          fill="#b8add2"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-4ba21b47-0 ebMyYP"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                        </svg>
                      </p>
                      <p className="right-side">
                        <span id="price-info-bnb-cake">
                          BNB - CAKE
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          color="text"
                          fill="white"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-4ba21b47-0 IIbzK"
                          style={{ cursor: "pointer" }}
                        >
                          <path d="M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z"></path>
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-footer" id="content-footer">
            <div className="link">
              <a href="#" id="footer-left-link">
                Bridge assets to BNB Chain{" "}
                <img src="./assets/swap2.svg" alt="" />
              </a>
            </div>
            <div className="images-flex">
              <div className="images">
                <div className="help">
                  <div className="help-link">
                    <a href="#">Need help ?</a>
                  </div>
                  <div className="svg">
                    <img src="./assets/swap3.svg" alt="" />
                  </div>
                </div>
                <div className="rabbit">
                  <img src="./assets/help.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Main Section End -->
  <!--Footer start--> */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-logo-mobile">
            <img src="./assets//pancake-swap-footer.svg" alt="" />
          </div>
          <div className="footer-top">
            <ul className="footer-top-links">
              <li>About</li>
              <li>
                <a href="#" className="active">
                  Contact
                </a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Litepaper</a>
              </li>
            </ul>
            <ul className="footer-top-links">
              <li>Help</li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
            </ul>
            <ul className="footer-top-links">
              <li>Developers</li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Bug Bounty</a>
              </li>
              <li>
                <a href="#">Auidts</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
            <div className="footer-top-logo-desktop">
              <img src="./assets//pancake-swap-footer.svg" alt="" />
            </div>
          </div>

          <div className="footer-middle">
            <a href="#" className="footer-middle-link">
              <img src="./assets/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/telegram.svg" alt="Telegram" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/reddit.svg" alt="Reddit" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/github.svg" alt="Github" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/discord.svg" alt="Discord" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/medium.svg" alt="Medium" />
            </a>
            <a href="#" className="footer-middle-link">
              <img src="./assets/youtube.svg" alt="Youtube" />
            </a>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <div className="theme-select">
                <div className="theme-select-outer appear">
                  <div className="theme-select-inner">
                    <input type="checkbox" />
                    <div className="selected-theme">
                      <div>
                        <div>
                          <img src="./assets/dark-theme.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="theme-selection-options">
                      <img src="./assets/light-theme.svg" alt="" />
                      <img src="./assets/dark-theme.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lang-select">
                <button className="lang-select-btn">
                  <img src="./assets/navGlobe.svg" alt="" />
                  <div>EN</div>
                </button>
                <div className="lang-select-content">
                  <button className="lang-item">English</button>
                  <button className="lang-item">Türkçe</button>
                  <button className="lang-item">German</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Italian</button>
                  <button className="lang-item">Bahasa Indonesia</button>
                </div>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="currency-price">
                <a href="#">
                  <img src="./assets/bunny-logo.svg" alt="" />
                  <div className="text-currency">$3.367</div>
                </a>
              </div>
              <a href="#" className="buy-btn">
                Buy CAKE <img src="./assets/right-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="scrollToTop" id="scrollToTop">
        <button className="scrollButton">
          <img
            src="./assets/scrollToTop/upArrow.svg"
            alt=""
            className="scrollButtonImg"
          />
        </button>
      </div>
      {/* <!--Footer finish--> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="./scripts/header-footer.js"></script>
      <script src="./scripts/swap.js"></script> */}
    </div>
  );
}

export default Swap;
