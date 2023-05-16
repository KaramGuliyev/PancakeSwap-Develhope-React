import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function PoolsBody() {
  const poolsDataArr = [
    {
      img: "./assets/Pools/swap.svg",
      headerDesc: "Stake, Earn – And more!",
      APY: `${Math.floor(Math.random() * 1000) / 100}%`,
      APR: `Up to ${Math.floor(Math.random() * 10000) / 100}%`,
      stakeAmount: `${Math.floor(Math.random() * 1000000000000)}`,
    },
    {
      img: "./assets/Pools/swap.svg",
      headerDesc: "Stake, Earn – And more!",
      APY: `${Math.floor(Math.random() * 1000) / 100}%`,

      APR: `Up to ${Math.floor(Math.random() * 10000) / 100}%`,

      stakeAmount: `${Math.floor(Math.random() * 1000000000000)}`,
    },
    {
      img: "./assets/Pools/swap.svg",
      headerDesc: "Stake, Earn – And more!",
      APY: `${Math.floor(Math.random() * 1000) / 100}%`,

      APR: `Up to ${Math.floor(Math.random() * 10000) / 100}%`,

      stakeAmount: `${Math.floor(Math.random() * 1000000000000)}`,
    },
  ];

  const [poolsData, setPoolsData] = useState(poolsDataArr);
  const [infiniteScroll, setInfiniteScroll] = useState(0);

  const rabbitRef = useRef(null);

  useEffect(() => {
    const rabbit = rabbitRef.current;
    const handleScroll = () => {
      const rabbitPosition = rabbit.offsetTop;
      if (window.pageYOffset > rabbitPosition / 2 && infiniteScroll < 8) {
        let tempObj = {
          img: "./assets/Pools/swap.svg",
          headerDesc: "Stake, Earn – And more!",
          APY: `${Math.floor(Math.random() * 1000) / 100}%`,
          APR: `Up to ${Math.floor(Math.random() * 10000) / 100}%`,
          stakeAmount: `${Math.floor(Math.random() * 1000000000000)}`,
        };
        setPoolsData([...poolsData, tempObj]);
        setInfiniteScroll(infiniteScroll + 1);
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [poolsData, infiniteScroll]);

  return (
    <>
      <div class="poolsPageWrapper">
        <div class="poolsNav">
          <div class="buttonWrapper">
            <div class="farms">
              <Link href="#">Farms</Link>
            </div>
            <div class="pools">
              <Link href="#">Pools</Link>
            </div>
          </div>
        </div>
        <div class="poolsHeader">
          <div class="headerContents">
            <h1 class="headerTitle">Syrup Pools</h1>
            <h2 class="headerDesc">Just stake some tokens to earn.</h2>
            <h2 class="headerDesc">High APR, low risk.</h2>
          </div>
        </div>
        <div class="poolsWrapper">
          <div class="poolsContainerNav">
            <div class="poolsContainerLeftWrapper">
              <div class="viewList">
                <svg
                  viewBox="0 0 24 24"
                  fill="#666171"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hover cardView sc-4ba21b47-0 jhQVZS"
                >
                  <path d="M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="#666171"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hover tableView active"
                  style={{ marginLeft: "12px" }}
                >
                  <path d="M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"></path>
                </svg>
              </div>
              <div class="checkboxButton">
                <input type="checkbox" id="checkboxButton" />
                <label for="checkboxButton" class="toggle">
                  <span></span>
                </label>
                <div class="stake">Staked only</div>
              </div>
              <div class="liveOrFinished">
                <div class="liveOrFinishedWrapper">
                  <Link href="" class="live">
                    Live
                  </Link>
                  <Link href="" class="finished">
                    Finished
                  </Link>
                </div>
              </div>
            </div>
            <div class="poolsContainerRightWrapper">
              <div class="dropdown">
                <div class="dropdownTitle">SORT BY</div>
                <div class="dropdownField">
                  <div class="activeDropdown">Hot</div>
                  <img src="./assets/Pools/dropdown.svg" class="dropdownSymbol" alt="" />
                </div>
                <div style={{ display: "none" }}></div>
              </div>
              <div class="search">
                <div class="searchTitle">SEARCH</div>
                <div class="searchField">
                  <input type="text" class="searchField" placeholder="Search Pools" name="" id="" />
                  <img src="./assets/Pools/search.svg" class="searchSymbol" width="20px" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="poolsContainer">
            {poolsData.map((el, i) => {
              return (
                <div
                  class="row"
                  key={i}
                  style={{
                    borderBottom: i === poolsData.length - 1 ? 0 : "2px solid rgb(82, 75, 99)",
                  }}
                >
                  <div class="column1">
                    <div class="imgContainer">
                      <img src={el.img} class="coinImg" alt="" />
                      <img src="./assets/Pools/cycle.svg" class="cycle" alt="" />
                    </div>
                    <div class="desc">
                      <div class="header">Stake CAKE</div>
                      <div class="headerDesc">{el.headerDesc}</div>
                    </div>
                  </div>
                  <div class="column3">
                    <div class="desc">
                      <div class="header">CAKE Staked</div>
                      <div class="headerDesc">
                        <div class="subMainDesc">0.0</div>
                        <div class="subDesc">0 USD</div>
                      </div>
                    </div>
                  </div>
                  <div class="column4">
                    <div class="desc">
                      <div class="header">Flexible APY</div>
                      <div class="headerDesc" style={{ cursor: "pointer" }}>
                        <div class="subMainDesc">{el.APY}</div>
                        <img src="./assets/Pools/calc.svg" class="descImg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="column5">
                    <div class="desc">
                      <div class="header">Locked APR</div>
                      <div class="headerDesc" style={{ cursor: "pointer" }}>
                        <div class="subMainDesc">{el.APR}</div>
                        <img src="./assets/Pools/calc.svg" class="descImg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="column6">
                    <div class="desc">
                      <div class="header">Total staked</div>
                      <div class="headerDesc">
                        <div class="subMainDesc" style={{ cursor: "pointer" }}>
                          {el.stakeAmount}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column7">
                    <div class="desc" style={{ cursor: "pointer" }}>
                      <div class="header">Details</div>
                      <div class="headerDesc">
                        <img src="./assets/Pools/tableArrowDown.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="poolsFooter" ref={rabbitRef}>
            <img src="./assets/Pools/3d-syrup-bunnies.png" alt="" id="rabbit" />
          </div>
        </div>
      </div>
    </>
  );
}
