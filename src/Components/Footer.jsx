import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div class="footer-main">
        <div class="footer-logo-mobile">
          <img src="./assets//pancake-swap-footer.svg" alt="" />
        </div>
        <div class="footer-top">
          <ul class="footer-top-links">
            <li>About</li>
            <li>
              <Link class="active">Contact</Link>
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
          <ul class="footer-top-links">
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
          <ul class="footer-top-links">
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
          <div class="footer-top-logo-desktop">
            <img src="./assets//pancake-swap-footer.svg" alt="" />
          </div>
        </div>

        <div class="footer-middle">
          <Link class="footer-middle-link">
            <img src="./assets/twitter.svg" alt="Twitter" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/telegram.svg" alt="Telegram" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/reddit.svg" alt="Reddit" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/instagram.svg" alt="Instagram" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/github.svg" alt="Github" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/discord.svg" alt="Discord" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/medium.svg" alt="Medium" />
          </Link>
          <Link class="footer-middle-link">
            <img src="./assets/youtube.svg" alt="Youtube" />
          </Link>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <div class="theme-select">
              <div class="theme-select-outer appear">
                <div class="theme-select-inner">
                  <input type="checkbox" />
                  <div class="selected-theme">
                    <div>
                      <div>
                        <img src="./assets/dark-theme.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="theme-selection-options">
                    <img src="./assets/light-theme.svg" alt="" />
                    <img src="./assets/dark-theme.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="lang-select">
              <button class="lang-select-btn">
                <img src="./assets/navGlobe.svg" alt="" />
                <div>EN</div>
              </button>
              <div class="lang-select-content">
                <button class="lang-item">English</button>
                <button class="lang-item">Türkçe</button>
                <button class="lang-item">German</button>
                <button class="lang-item">Italian</button>
                <button class="lang-item">Italian</button>
                <button class="lang-item">Italian</button>
                <button class="lang-item">Bahasa Indonesia</button>
              </div>
            </div>
          </div>
          <div class="footer-bottom-right">
            <div class="currency-price">
              <Link>
                <img src="./assets/bunny-logo.svg" alt="" />
                <div class="text-currency">$3.367</div>
              </Link>
            </div>
            <Link class="buy-btn">
              Buy CAKE <img src="./assets/right-arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
