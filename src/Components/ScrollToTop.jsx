import React from "react";

import '../styles/scrollToTop/index.scss'

function ScrollToTop() {
  return (
    <div>
      <div class="scrollToTop" id="scrollToTop">
        <button class="scrollButton">
          <img
            src="./assets/scrollToTop/upArrow.svg"
            alt=""
            class="scrollButtonImg"
          />
        </button>
      </div>
    </div>
  );
}

export default ScrollToTop;
