import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

function Footer() {
  useEffect(() => {
    let scrollToTop = document.querySelector("#scrollToTop");

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > window.innerHeight) {
        scrollToTop.setAttribute(
          "class",
          "scrollToTop visible"
        );
        scrollToTop.setAttribute("style", "");
      } else if (scrollToTop.classList.contains("visible")) {
        scrollToTop.setAttribute("class", "scrollToTop hidden");
        setTimeout(() => {
          scrollToTop.setAttribute("style", "display:none;");
        }, 400);
      }
    });

    let scrollToTopButton =
      document.querySelector(".scrollButton");
    scrollToTopButton.addEventListener("click", () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="footer">
        <div className="footer-main">
          <div className="footer-logo-mobile">
            <img
              src="./assets//pancake-swap-footer.svg"
              alt=""
            />
          </div>
          <div className="footer-top">
            <ul className="footer-top-links">
              <li>About</li>
              <li>
                <Link className="active">Contact</Link>
              </li>
              <li>
                <Link>Brand</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Community</Link>
              </li>
              <li>
                <Link>Litepaper</Link>
              </li>
            </ul>
            <ul className="footer-top-links">
              <li>Help</li>
              <li>
                <Link>Customer Support</Link>
              </li>
              <li>
                <Link>Troubleshooting</Link>
              </li>
              <li>
                <Link>Guides</Link>
              </li>
            </ul>
            <ul className="footer-top-links">
              <li>Developers</li>
              <li>
                <Link>Github</Link>
              </li>
              <li>
                <Link>Documentation</Link>
              </li>
              <li>
                <Link>Bug Bounty</Link>
              </li>
              <li>
                <Link>Auidts</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
            <div className="footer-top-logo-desktop">
              <img
                src="./assets//pancake-swap-footer.svg"
                alt=""
              />
            </div>
          </div>

          <div className="footer-middle">
            <Link className="footer-middle-link">
              <img src="./assets/twitter.svg" alt="Twitter" />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/telegram.svg" alt="Telegram" />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/reddit.svg" alt="Reddit" />
            </Link>
            <Link className="footer-middle-link">
              <img
                src="./assets/instagram.svg"
                alt="Instagram"
              />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/github.svg" alt="Github" />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/discord.svg" alt="Discord" />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/medium.svg" alt="Medium" />
            </Link>
            <Link className="footer-middle-link">
              <img src="./assets/youtube.svg" alt="Youtube" />
            </Link>
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
                          <img
                            src="./assets/dark-theme.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="theme-selection-options">
                      <img
                        src="./assets/light-theme.svg"
                        alt=""
                      />
                      <img
                        src="./assets/dark-theme.svg"
                        alt=""
                      />
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
                  <button className="lang-item">
                    Bahasa Indonesia
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="currency-price">
                <Link>
                  <img src="./assets/bunny-logo.svg" alt="" />
                  <div className="text-currency">$3.367</div>
                </Link>
              </div>
              <Link className="buy-btn">
                Buy CAKE{" "}
                <img src="./assets/right-arrow.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
