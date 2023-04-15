import { Link } from 'react-router-dom'

function IfoPageBody() {
  return (
    <>
      <section name="ifo" class="ifo-body">
        <div class="ifo-body-top__pills">
          <div class="ifo-pill active">
            <Link>Latest</Link>
          </div>
          <div class="ifo-pill">
            <Link>Finished</Link>
          </div>
        </div>
        <div class="ifo-body-top__banner">
          <div class="ifo-banner-container">
            <div class="ifo-banner-content">
              <div class="content-main">
                <div class="content-left">
                  <h1>IFO: Initial Farm Offerings</h1>
                  <p>Buy new tokens launching on BNB Smart Chain</p>
                </div>
                <div class="content-main-right">
                  <button>How does it work?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ifo-body-mid">
          <div class="section-1">
            <div class="section-1-main">
              <div class="section-1-left">
                <div class="left-container">
                  <div class="card">
                    <div class="card-top">
                      <div class="card-top-inner">
                        <div class="card-top-left">
                          <h2>Stake CAKE</h2>
                          <p>Stake, Earn – And more!</p>
                        </div>
                        <div class="card-top-right">
                          <div class="bunny-logo">
                            <img src="./assets/bunny-logo.svg" alt="" />
                          </div>
                          <div class="refresh-icon">
                            <img src="./assets/autorenew.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="card-top-mobile">
                        <div class="icake">
                          <p>iCAKE</p>
                          <span>0.000</span>
                        </div>
                        <button class="drawer">
                          <img src="./assets/carrot-up.svg" alt="" />
                        </button>
                      </div>
                    </div>
                    <div class="card-mid">
                      <div class="balance">
                        <div class="ratio">
                          <span class="textSubtle">FLEXIBLE APY:</span>
                          <div class="ratio-calc textSubtle2">
                            2.25%
                            <button class="btn btn3 calc-modal-button">
                              <img src="./assets/calculator.svg" alt="" />
                            </button>
                          </div>
                        </div>
                        <div class="ratio">
                          <span class="textSubtle">LOCKED APR:</span>
                          <div class="ratio-calc textSubtle2">
                            Up to 48.32%
                            <button class="btn btn3 calc-modal-button">
                              <img src="./assets/calculator.svg" alt="" />
                            </button>
                            <div id="calc-modal">
                              <div class="modal-content">
                                <div class="modal-content-header">
                                  <span>Calc modal</span>
                                  <button class="close3">
                                    <img src="./assets/times.svg" alt="" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="start-earning textSubtle" style={{ marginTop: '16px' }}>
                        <p style={{ marginBottom: '10px' }}>Start Earning</p>
                        <button class="btn2 wallet-modal-button">Connect Wallet</button>
                        <div id="wallet-modal">
                          <div class="modal-content wallet">
                            <div class="modal-content-header-w wallet">
                              <button>Connect Wallet</button>
                              <button class="in-active">What’s a Web3 Wallet?</button>
                            </div>
                            <div class="modal-content-body">
                              <div class="left">
                                <div class="left-top">
                                  <h4>Connect Wallet</h4>
                                  <div class="text">
                                    Start by connecting with one of the wallets below. Be sure to store your private keys or
                                    seed phrase securely. Never share them with anyone.
                                  </div>
                                </div>
                                <div class="left-mid">
                                  <div class="img-boxes">
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/metamask.png" alt="" />
                                      </div>
                                      <span class="img-text">Metamask</span>
                                    </div>
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/binance.png" alt="" />
                                      </div>
                                      <span class="img-text">Binance Wallet</span>
                                    </div>
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/coinbase.png" alt="" />
                                      </div>
                                      <span class="img-text">Coinbase Wallet</span>
                                    </div>
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/trust.png" alt="" />
                                      </div>
                                      <span class="img-text">Trust Wallet</span>
                                    </div>
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/walletconnect.png" alt="" />
                                      </div>
                                      <span class="img-text">WalletConnect</span>
                                    </div>
                                    <div class="img-box">
                                      <div class="image">
                                        <img src="./assets/more.svg" alt="" />
                                      </div>
                                      <span class="img-text">More</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="right">
                                <div class="right-mid">
                                  <h1>Haven’t got a wallet yet?</h1>
                                  <div class="image">
                                    <img src="./assets/wallet_intro.png" alt="" />
                                  </div>
                                  <a href="#">
                                    Learn How to Connect <img src="./assets/link-outside.svg" alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-bottom">
                      <div class="card-bottom-content">
                        <div class="info">
                          <div class="badge">Auto/Locked</div>
                          <div class="info-tooltip tooltip">
                            <img src="./assets/question-mark-tooltip.svg" alt="" />
                            <div class="tooltiptext">
                              In flexible staking, rewards are distributed and included in your total staking balance. In locked
                              staking, Rewards are locked until the end of the staking position.
                            </div>
                          </div>
                        </div>
                        <div class="details-btn">
                          <button class="accordion-btn">
                            Details
                            <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                          </button>
                        </div>
                      </div>
                      <div class="accordion-content" id="extra-content">
                        <div class="account-details">
                          <div class="acccount-detail-list-item">
                            <span class="textSubtle3 tooltip">
                              Total staked:
                              <div class="tooltiptext">Total amount of CAKE staked in this pool</div>
                            </span>
                            <span class="textSubtle3">260,603,775 CAKE</span>
                          </div>
                          <div class="acccount-detail-list-item">
                            <span class="textSubtle3">Total locked:</span>
                            <span class="textSubtle3">200,219,690 CAKE</span>
                          </div>
                          <div class="acccount-detail-list-item">
                            <span class="textSubtle3 tooltip">
                              Average lock duration:
                              <div class="tooltiptext">
                                The average lock duration of all the locked staking positions of other users
                              </div>
                            </span>
                            <span class="textSubtle3">42 weeks</span>
                          </div>
                          <div class="acccount-detail-list-item">
                            <span class="textSubtle3 tooltip">
                              Performance Fee
                              <div class="tooltiptext">Performance fee only applies to the flexible staking rewards.</div>{' '}
                            </span>
                            <span class="textSubtle3">0~2%</span>
                          </div>
                          <div class="acccount-detail-list-item link">
                            <a href="#">
                              See Token Info <img src="./assets/link.svg" alt="" />
                            </a>
                          </div>
                          <div class="acccount-detail-list-item link">
                            <a href="#">
                              View Tutorial
                              <img src="./assets/link.svg" alt="" />
                            </a>
                          </div>
                          <div class="acccount-detail-list-item link">
                            <a href="#">
                              View Contact
                              <img src="./assets/link2.svg" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-top">
                      <div class="card-top-inner">
                        <div class="card-top-left">
                          <h2 class="notoken">Token Vesting</h2>
                          <p>You have no tokens available for claiming</p>
                        </div>
                        <div class="card-top-right">
                          <div class="bunny-logo">
                            <img src="./assets/not-tokens.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="card-top-mobile notoken">
                        <img src="./assets/not-tokens.svg" alt="" />
                      </div>
                    </div>
                    <div class="card-mid notoken">
                      <div class="no-token">
                        <div class="no-token-inner">
                          <img src="./assets/no-tokens.svg" alt="" />
                          <div class="desc">
                            <p>You have no tokens available for claiming</p>
                            <span>
                              Participate in our next IFO. and remember to lock your CAKE to increase your allocation!
                            </span>
                            <a href="#">How does it work?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section-1-right">
                <div class="section-1-right-content">
                  <div class="section-1-right-content-top"></div>
                  <div class="section-1-right-content-banner">
                    <div class="top-layer"></div>
                    <div class="text">
                      <h3>Sale Finished!</h3>
                    </div>
                  </div>
                  <div class="section-1-right-content-mid">
                    <div class="section-1-right-content-mid-inner">
                      <div class="card">
                        <div class="card-top">
                          <p>Public Sale</p>
                          <div class="info-tooltip tooltip">
                            <img src="./assets/question-mark-tooltip.svg" alt="" />
                            <div class="tooltiptext">
                              No limits on the amount you can commit. Additional fee applies when claiming.
                            </div>
                          </div>
                        </div>
                        <div class="card-rest">
                          <div class="card-rest-1">
                            <div class="card-logo">
                              <img src="./assets/card-logo.png" alt="" />
                            </div>
                            <div class="card-desc">
                              <p>ON SALE</p>
                              <span>26,250,000 ARENA</span>
                              <span>75% of total sale</span>
                            </div>
                          </div>
                          <div class="card-rest-2">
                            <button class="btn2 wallet-modal-button">Connect Wallet</button>
                            <div id="wallet-modal">
                              <div class="modal-content">
                                <div class="modal-content-header">
                                  <span>wallet modal</span>
                                  <button class="close2">
                                    <img src="./assets/times.svg" alt="" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-rest-3">
                            <ul class="checkout-list">
                              <li>
                                <span class="tooltip">
                                  Max. CAKE entry
                                  <div class="tooltiptext">
                                    In flexible staking, rewards are distributed and included in your total staking balance. In
                                    locked staking, Rewards are locked until the end of the staking position.
                                  </div>
                                </span>

                                <span class="red">0.000 ~($0)</span>
                              </li>
                              <li>
                                <p>Additional fee:</p>
                                <span>0.5%</span>
                              </li>
                              <li>
                                <p>Total committed:</p>
                                <span>~$3,628,106 (307.94%) </span>
                              </li>
                              <li>
                                <p>CAKE to burn:</p>
                                <span>4,340.06 (~$18,064.32) </span>
                              </li>
                              <li>
                                <p>Price per ARENA:</p>
                                <span>$0.04 </span>
                              </li>
                              <li>
                                <p>Price per ARENA:</p>
                                <span>$0.04 </span>
                              </li>
                              <li>
                                <p>Price per ARENA with fee:</p>
                                <span>~$0.0406 </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="card right">
                        <div class="card-top">
                          <p>Private Sale</p>
                          <div class="info-tooltip tooltip">
                            <img src="./assets/question-mark-tooltip.svg" alt="" />
                            <div class="tooltiptext">
                              Meet the following requirement to join: Set PancakeSquad NFT as Pancake Profile avatar.
                            </div>
                          </div>
                        </div>
                        <div class="card-rest">
                          <div class="card-rest-1">
                            <div class="card-logo">
                              <img src="./assets/card-logo.png" alt="" />
                            </div>
                            <div class="card-desc">
                              <p>ON SALE</p>
                              <span>8,750,000 ARENA</span>
                              <span>25% of total sale</span>
                            </div>
                          </div>
                          <div class="card-rest-2">
                            <button class="btn2 wallet-modal-button">Connect Wallet</button>
                            <div id="wallet-modal">
                              <div class="modal-content">
                                <div class="modal-content-header">
                                  <span>wallet modal</span>
                                  <button class="close2">
                                    <img src="./assets/times.svg" alt="" />
                                  </button>
                                  <div class="wallet-modal-head">dsdad</div>
                                  <div class="wallet-modal-body"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-rest-3">
                            <ul class="checkout-list">
                              <li>
                                <span class="tooltip">
                                  Max. CAKE entry
                                  <div class="tooltiptext">
                                    For the private sale, each eligible participant will be able to commit any amount of CAKE up
                                    to the maximum commit limit, which is published along with the IFO voting proposal.
                                  </div>
                                </span>

                                <span class="red">0.000 ~($0)</span>
                              </li>
                              <li>
                                <p>Total committed:</p>
                                <span>~$497,469 (126.92%)</span>
                              </li>
                              <li>
                                <p>Funds to raise:</p>
                                <span>$350,000 </span>
                              </li>
                              <li>
                                <p>Price per ARENA:</p>
                                <span>$0.04 </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section-1-right-content-bottom">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        Details
                        <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                      </button>
                      <div class="accordion-content" id="extra-content">
                        <div class="accordion-content-left">
                          <img class="img-arena" src="./assets/ifo-arena.svg" alt="" />
                          <div class="arena-desc">
                            <p>Achievement:</p>
                            <span>
                              IFO Shopper: ARENA <img src="./assets/cup.svg" alt="" />
                              <span class="points">100</span>
                            </span>
                            <span class="commit-earn">Commit ~2.684 CAKE in total to earn!</span>
                            <ul>
                              <li>
                                <a href="#">
                                  <img src="assets/world.svg" alt="" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="assets/doc.svg" alt="" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="assets/address.svg" alt="" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="assets/twiiter2.svg" alt="" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="accordion-content-right">
                          <p>
                            Commit ~2.684 CAKE in total to earn! The Esports Players League (ESPL) Arena is a platform that
                            hosts global Esports tournaments and coordinates different aspects such as setting of tournament
                            parameters, score-keeping, prize pool payouts via crypto and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-2">
            <div class="section-2-container">
              <div class="section-2-content">
                <h2 class="title">How to Take Part in the Public Sale</h2>
                <div class="steps">
                  <div class="step">
                    <div class="empty">
                      <div style={{ padding: '24px' }}></div>
                    </div>
                    <div class="step-num">
                      <div class="num">1</div>
                      <div class="line active"></div>
                    </div>
                    <div class="step-desc">
                      <h4>Activate your Profile</h4>
                      <span>You’ll need an active PancakeSwap Profile to take part in an IFO!</span>
                      <button class="btn2 wallet-modal-button">Connect Wallet</button>
                    </div>
                  </div>
                  <div class="step left">
                    <div class="empty right" style={{ marginLeft: '70px' }}></div>
                    <div class="step-num">
                      <div class="num deactive">2</div>
                      <div class="line-up"></div>
                      <div class="line-down"></div>
                    </div>
                    <div class="step-desc left">
                      <h4>Lock CAKE in the CAKE pool</h4>
                      <span>
                        The maximum amount of CAKE you can commit to the Public Sale equals the number of your iCAKE. Lock more
                        CAKE for longer durations to increase the maximum CAKE you can commit to the sale.
                        <span class="tooltip" style={{ marginTop: '4px' }}>
                          How does the number of iCAKE calculated?
                          <div class="tooltiptext">
                            The number of iCAKE equals the locked staking amount if the staking duration is longer than 41
                            weeks. If the staking duration is less than 41 weeks, it will linearly decrease based on the staking
                            duration.
                            <a href="#" style={{ marginTop: '10px' }}>
                              Learn more about iCAKE
                            </a>
                          </div>
                        </span>
                        <br />
                        Missed this IFO? You will enjoy the same amount of iCAKE for future IFOs if your locked-staking position
                        is not unlocked.
                      </span>
                    </div>
                  </div>
                  <div class="step">
                    <div class="empty">
                      <div style={{ padding: '24px' }}></div>
                    </div>
                    <div class="step-num">
                      <div class="num deactive">3</div>
                      <div class="line-up"></div>
                      <div class="line-down"></div>
                    </div>
                    <div class="step-desc">
                      <h4>Commit CAKE</h4>
                      <span>
                        Please note that CAKE in the fixed-term staking positions will remain locked and can not be used for
                        committing to IFO sales. You will need a separate amount of CAKE in your wallet balance to commit to the
                        IFO sales.
                      </span>
                    </div>
                  </div>
                  <div class="step left">
                    <div class="empty right" style={{ marginLeft: '70px' }}></div>
                    <div class="step-num">
                      <div class="num deactive">4</div>
                      <div class="line-up"></div>
                    </div>
                    <div class="step-desc left">
                      <h4>Claim your tokens and achievement</h4>
                      <span>
                        After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent CAKE tokens
                        will be returned to your wallet.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-3">
            <div class="section-3-content">
              <div class="left">
                <div class="image">
                  <img src="./assets/ifo-bunny.png" alt="" />
                </div>
              </div>
              <div class="right">
                <div class="right-container">
                  <div class="title">
                    <h2>Details</h2>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>What’s the difference between a Public Sale and Private Sale?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>
                        In the current IFO format. There is a brand new Private Sale. To participate, participants will have to
                        meet certain requirements presented on the IFO card. Each eligible participant will be able to commit
                        any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting
                        proposal. The Private Sale has no participation fee.
                      </p>
                      <p>
                        In the Public Sale, everyone with an active PancakeSwap profile can commit. However the maximum amount
                        of CAKE users can commit, is equal to the number of iCAKE they have.
                        <br />
                        Learn more about iCAKE <a href="#">here</a> <br />
                        here And there’s a fee for participation: see below.
                      </p>
                    </div>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>Which sale should I commit to? Can I do both?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>
                        You can choose one or both at the same time! We recommend you to check if you are eligible to
                        participate in the Private Sale first. In the Public Sale, if the amount you commit is too small, you
                        may not receive a meaningful amount of IFO tokens. <br />
                        Just remember you need an active PancakeSwap Profile in order to participate.
                      </p>
                    </div>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>How much is the participation fee?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>
                        There’s only a participation fee for the Public Sale: there’s no fee for the Private Sale. The
                        participation fee decreases in cliffs, based on the percentage of overflow from the “Public Sale”
                        portion of the IFO. <br />
                        Note: Fees may vary between different IFOs. To learn more about the participation fees, please refer to
                        the details in the IFO proposal (vote) for the specifics of the IFO you want to take part in.
                      </p>
                    </div>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>Where does the participation fee go?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>The CAKE from the participation fee will be burnt as part of the weekly token burn.</p>
                    </div>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>How can I get an achievement for participating in the IFO?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>
                        You need to contribute a minimum of about 10 USD worth of CAKE to either sale. You can contribute to one
                        or both, it doesn’t matter: only your overall contribution is counted for the achievement.
                      </p>
                    </div>
                  </div>
                  <div class="accordion-container">
                    <div class="details-btn">
                      <button class="accordion-btn">
                        <p>What is the difference between an IFO and a cIFO?</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span>Details</span>
                          <img src="./assets/caret-down-blue.svg" alt="" srcset="" />
                        </div>
                      </button>
                    </div>
                    <div class="accordion-content" id="extra-content">
                      <p>
                        cIFOs are a new subtype of IFOs, designed to reward our loyal community, and also introduce our
                        community to projects with slightly smaller raises. <br />
                        Learn more about cIFO <a href="#">here</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="apply" href="#">
              Apply to run an IFO! <img src="./assets/link.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default IfoPageBody
