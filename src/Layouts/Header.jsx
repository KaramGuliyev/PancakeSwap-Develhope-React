import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="nav top">
        <nav>
          <div className="header-left">
            <div className="header-left__logo">
              <Link to="/">
                <img className="logo-desktop" src="./assets/logo.svg" alt="" />
                <img className="logo-mobile" src="./assets/logo-mobile.svg" alt="" />
              </Link>
            </div>
            <div className="header-left__links">
              <div className="link-1">
                <div className="link-head">
                  <Link to="/swap">Trade</Link>
                </div>
                <div className="link-content">
                  <div>
                    <Link to="/swap">Swap</Link>
                  </div>
                  <div>
                    <Link to="/limit">Limit</Link>
                  </div>
                  <div>
                    <Link to="/liquidity">Liquidity</Link>
                  </div>
                  <div>
                    <Link to="/perpetual">
                      Perpetual
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/bridge">
                      Bridge
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="link-2">
                <div className="link-head">
                  <Link to="/earn">Earn</Link>
                </div>
                <div className="link-content">
                  <div>
                    <Link to="/farms">Farms</Link>
                  </div>
                  <div>
                    <Link to="/pools">Pools</Link>
                  </div>
                </div>
              </div>
              <div className="link-3">
                <div className="link-head">
                  <Link to="/win">Win</Link>
                </div>
                <div className="link-content">
                  <div>
                    <Link to="/competition">Trading Competition</Link>
                  </div>
                  <div>
                    <Link to="/prediction">Prediction (BETA)</Link>
                  </div>
                  <div>
                    <Link to="/lottery">Lottery</Link>
                  </div>
                  <div>
                    <Link to="/pottery">Pottery (BETA)</Link>
                  </div>
                </div>
              </div>
              <div className="link-4">
                <div className="link-head">
                  <Link to="/nfts">NFT</Link>
                </div>
                <div className="link-content">
                  <div>
                    <Link to="/nfts">Overview</Link>
                  </div>
                  <div>
                    <Link to="/nfts/collections">Collections</Link>
                  </div>
                  <div>
                    <Link to="/nfts/activity">Activity</Link>
                  </div>
                </div>
              </div>
              <div className="link-5">
                <div className="link-head">
                  <Link to="/info">
                    <img src="./assets/3dot.svg" alt="" />
                  </Link>
                </div>
                <div className="link-content">
                  <div>
                    <Link to="/info">Info</Link>
                  </div>
                  <div>
                    <Link to="/ifo">IFO</Link>
                  </div>
                  <div>
                    <Link to="/voting">Voting</Link>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div>
                    <Link to="/teams">Leaderboard</Link>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div>
                    <Link to="/blog">
                      Blog
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/docs">
                      Docs
                      <div className="enter-icon">
                        <img src="./assets/enter.svg" alt="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="currency-price">
              <Link to="/">
                <img src="./assets/bunny-logo.svg" alt="" />
                <div className="text-currency">$3.367</div>
              </Link>
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

      <div className="mobile-nav">
        <div className="mobile-nav-link">
          <span>
            <Link to="/trade">
              <div className="container">
                <img className="mobile-nav-link-img" src="./assets/trade.svg" alt="" />
                <span className="mobile-nav-link-text">Trade</span>
              </div>
            </Link>
          </span>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <div className="container">
              <button id="btn-1" type="button">
                <div className="container">
                  <img className="mobile-nav-link-img" src="./assets/earn.svg" alt="" />
                  <span className="mobile-nav-link-text">Earn</span>
                </div>
              </button>
            </div>
          </span>
          <div className="mobile-nav-menu">
            <Link to="/farms">Farms</Link>
            <Link to="/pools">Pools</Link>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button id="btn-2">
              <div className="container">
                <img className="mobile-nav-link-img" src="./assets/win.svg" alt="" />
                <span className="mobile-nav-link-text">Win</span>
              </div>
            </button>
          </span>
          <div className="mobile-nav-menu">
            <Link to="/competition">Trading Competition</Link>
            <Link to="/prediction">Prediction (BETA)</Link>
            <Link to="/lottery">Lottery</Link>
            <Link to="/pottery">Pottery (BETA)</Link>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button>
              <div className="container">
                <img className="mobile-nav-link-img" src="./assets/nft.svg" alt="" />
                <span className="mobile-nav-link-text">NFT</span>
              </div>
            </button>
          </span>
          <div className="mobile-nav-menu">
            <Link to="/nfts">Overview</Link>
            <Link to="/nfts/collections">Collections</Link>
            <Link to="/nfts/activity">Activity</Link>
          </div>
        </div>
        <div className="mobile-nav-btn">
          <span>
            <button>
              <img src="./assets/3dot.svg" alt="" />
            </button>
          </span>

          <div className="mobile-nav-menu">
            <Link to="/ifo">IFO</Link>
            <Link to="/voting">Voting</Link>
            <hr />
            <Link to="/leaderboard">Leaderboard</Link>
            <hr />
            <Link to="/blog">
              <div>
                Blog <img src="./assets/enter.svg" alt="" />
              </div>
            </Link>
            <Link to="/docs">
              <div>
                Docs <img src="./assets/enter.svg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

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
    </>
  )
}

export default Header
