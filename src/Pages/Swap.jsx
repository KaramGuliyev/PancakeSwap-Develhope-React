import { useEffect } from "react";
import Header from "../Layouts/Header.jsx";
import Footer from "../Layouts/Footer.jsx";
import { Chart } from "chart.js/auto";



// function isMyScriptLoaded(url) {
//   if (!url) url = "";
//   var scripts = document.getElementsByTagName('script');
//   for (var i = scripts.length; i--;) {
//       if (scripts[i].src == url) return true;
//   }
//   return false;
// }

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
    let dayBtn = document.getElementById("swap-graph-day");
    let weekBtn = document.getElementById("swap-graph-week");
    let monthBtn = document.getElementById("swap-graph-month");
    let yearBtn = document.getElementById("swap-graph-year");
    let coinsName = document.getElementById("swap-coins-name-p");
    let coinsName2 = document.getElementById("swap-coins-name-p2");
    let graphIcons = document.getElementById("swap-graph-icons");
    let iconsSwapBtn = document.getElementById(
      "swap-coins-name-btn"
    );
    let chartValue = document.getElementById("swap-coin-value");
    let chartData = document.getElementById("swap-chart-data");
    let chartTime = document.getElementById("swap-chart-time");
    let chartYear = document.getElementById("swap-chart-year");
    let chartPercent = document.getElementById(
      "swap-coins-percent"
    );
    let chart1 = document.getElementById("firstChart");
    let chart2 = document.getElementById("secondChart");
    let chart3 = document.getElementById("thirdChart");
    let chart4 = document.getElementById("fourthChart");
    let chart5 = document.getElementById("fifthChart");
    let chart6 = document.getElementById("sixthChart");
    let chart7 = document.getElementById("seventhChart");
    let chart8 = document.getElementById("eighthChart");
    let swapChartDiv = document.getElementById(
      "swap-graph-chart-div"
    );
    let swapChartBg = document.getElementById("graph-bg");
    let graphVisibilityBtn = document.getElementById(
      "graph-visibility-btn"
    );
    let cardBtn1Img = document.getElementById("card-btn1-img");
    let firstInput = document.getElementById("first-input");
    let secondInput = document.getElementById("second-input");
    let firstInput_p = document.getElementById("first-input-p");
    let secondInput_p = document.getElementById("second-input-p");
    let inputSwitchBtn = document.getElementById(
      "input-switch-btn"
    );
    let titleInput1 = document.getElementById("title-input1");
    let titleInput2 = document.getElementById("title-input2");
    let arrowDown = document.getElementById("arrow-down");
    let lowRiskDiv = document.getElementById("low-risk-div");
    let swapSettingsBtn = document.getElementById(
      "swap-settings-btn"
    );
    let chartContainer = document.getElementById("container");
    let sizeChangerImg = document.getElementById(
      "size-changer-img"
    );
    let swapSection = document.getElementById("swap-section");
    let contentFooter = document.getElementById("content-footer");
    
    cardBtn1Img.src = "./assets/swap11.svg";
    
    contentFooter.style.display = "flex";
    
    var modal = document.getElementById("modal");
    
    var span = document.getElementsByClassName("close")[0];
    let body = document.body
    
    swapSettingsBtn.addEventListener("click", () => {
      modal.style.display = "block";
      body.style.overflow = "hidden";
    });
    
    span.onclick = function () {
      modal.style.display = "none";
      body.style.overflow = "unset";
    };
    
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "unset";
      }
    };
    
    //    Chart
    
    let chartHeight = chartContainer.clientHeight - 32;
    
    let a = 300;
    
    let gradient1 = document
      .getElementById("firstChart")
      .getContext("2d")
      .createLinearGradient(0, 0, 0, chartHeight);
    gradient1.addColorStop(0, "#32e9b4");
    gradient1.addColorStop(1, "#393440");
    
    let gradient2 = document
      .getElementById("fourthChart")
      .getContext("2d")
      .createLinearGradient(0, 0, 0, chartHeight);
    gradient2.addColorStop(0, "#e9479d");
    gradient2.addColorStop(1, "#393440");
    
    const horizontalArbitraryLine = {
      id: "horizontalArbitraryLine",
      beforeDraw(chart, args, option) {
        const {
          ctx,
          chartArea: { top, right, bottom, left, width, height },
          scales: { x, y },
        } = chart;
        ctx.save();
        ctx.strokeStyle = "#32e9b4";
        ctx.strokeRect(
          left,
          chart.getDatasetMeta(0).data[24].y,
          width,
          0
        );
        ctx.setLineDash([2, 3]);
      },
    };
    
    const myEventCatcher = {
      id: "myEventCatcher",
      beforeEvent(chart, args, pluginOptions) {
        const event = args.event;
        if (event.type === "mouseout") {
          chartData.innerText = "Mar 4";
          chartTime.innerText = "09:25 PM";
          chartYear.innerText = "2032";
    
          if (coinsName.innerText == "BNB/CAKE") {
            chartValue.innerText = "77.09";
          } else {
            chartValue.innerText = "0.013";
          }
        }
      },
    };
    
    const hoverValue = {
      id: "hoverValue",
      afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data, options } = chart;
        // console.log(chart)
        chart.getActiveElements().forEach((active) => {
          let act = active.index;
          // console.log(chart)
    
          if (coinsName.innerText == "BNB/CAKE") {
            chartValue.innerText =
              data.datasets[0].data[active.index];
          }
    
          if (act < 3) {
            chartData.innerText = "Mar 3";
          } else {
            chartData.innerText = "Mar 4";
          }
    
          if (act < 3) {
            chartTime.innerText = `${act + 9}:00 PM`;
          } else if (act == 3) {
            chartTime.innerText = `${act + 9}:00 AM`;
          } else if (act < 15) {
            chartTime.innerText = `${act - 3}:00 AM`;
          } else if (act == 15) {
            chartTime.innerText = `${act - 3}:00 PM`;
          } else {
            chartTime.innerText = `${act - 15}:00 PM`;
          }
    
          if (
            chart2.style.visibility == "visible" ||
            chart6.style.visibility == "visible"
          ) {
            if (act < 4) {
              chartData.innerText = "Feb 26";
            } else if (act < 8) {
              chartData.innerText = "Feb 27";
            } else if (act < 12) {
              chartData.innerText = "Feb 28";
            } else if (act < 16) {
              chartData.innerText = "Mar 1";
            } else if (act < 20) {
              chartData.innerText = "Mar 2";
            } else if (act < 24) {
              chartData.innerText = "Mar 3";
            } else {
              chartData.innerText = "Mar 4";
            }
    
            if (
              act == 0 ||
              act == 4 ||
              act == 8 ||
              act == 12 ||
              act == 16 ||
              act == 20 ||
              act == 24
            ) {
              chartTime.innerText = "03:00 AM";
            } else if (
              act == 1 ||
              act == 5 ||
              act == 9 ||
              act == 13 ||
              act == 17 ||
              act == 21 ||
              act == 25
            ) {
              chartTime.innerText = "09:00 AM";
            } else if (
              act == 2 ||
              act == 6 ||
              act == 10 ||
              act == 14 ||
              act == 18 ||
              act == 22 ||
              act == 26
            ) {
              chartTime.innerText = "03:00 PM";
            } else {
              chartTime.innerText = "09:00 PM";
            }
          } else if (
            chart3.style.visibility == "visible" ||
            chart7.style.visibility == "visible"
          ) {
            chartTime.innerText = "09:00 PM";
    
            if (act < 25) {
              chartData.innerText = `Feb ${act + 4}`;
            } else {
              chartData.innerText = `Mar ${act - 24}`;
            }
          } else if (
            chart4.style.visibility == "visible" ||
            chart8.style.visibility == "visible"
          ) {
            chartTime.innerText = "09:00 PM";
    
            if (act < 20) {
              chartYear.innerText = "2022";
            } else {
              chartYear.innerText = "2023";
            }
    
            let arr = [
              "Mar 9",
              "Mar 24",
              "Apr 8",
              "Apr 23",
              "May 8",
              "May 23",
              "Jun 7",
              "Jun 22",
              "Jul 7",
              "Jul 22",
              "Aug 6",
              "Aug 21",
              "Sep 5",
              "Sep 20",
              "Oct 5",
              "Oct 20",
              "Nov 4",
              "Nov 19",
              "Dec 4",
              "Dec 19",
              "Jan 3",
              "Jan 18",
              "Feb 2",
              "Feb 17",
              "Mar 4",
            ];
    
            let val = arr[act];
    
            chartData.innerText = val;
          }
    
          if (coinsName.innerText == "CAKE/BNB") {
            if (chart7.style.visibility == "visible") {
              if (act < 7 && act != 0) {
                chartValue.innerText = "0.014";
              } else if (act == 8) {
                chartValue.innerText = "0.014";
              } else {
                chartValue.innerText = "0.013";
              }
            }
    
            if (chart8.style.visibility == "visible") {
              if (act == 0) {
                chartValue.innerText = "0.017";
              } else if (act == 1 || act == 3) {
                chartValue.innerText = "0.020";
              } else if (act == 2) {
                chartValue.innerText = "0.023";
              } else if (
                act == 6 ||
                act == 7 ||
                (act < 19 && act > 14)
              ) {
                chartValue.innerText = "0.014";
              } else if (act == 4 || act == 5 || act == 11) {
                chartValue.innerText = "0.015";
              } else if (act > 11 && act < 15) {
                chartValue.innerText = "0.016";
              } else if (act == 20) {
                chartValue.innerText = "0.012";
              } else {
                chartValue.innerText = "0.013";
              }
            }
          }
    
          if (chart.tooltip?._active?.length) {
            let x = chart.tooltip._active[0].element.x;
            let y = chart.tooltip._active[0].element.y;
            let yAxis = chart.scales.y;
            let xAxis = chart.scales.x;
            let ctx = chart.ctx;
            // console.log(xAxis)
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([6, 6]);
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.lineWidth = 0;
            ctx.strokeStyle = "white";
            ctx.stroke();
    
            ctx.beginPath();
            ctx.setLineDash([6, 6]);
            ctx.moveTo(xAxis.left, y);
            ctx.lineTo(xAxis.right, y);
    
            ctx.strokeStyle = "lightgray";
            ctx.stroke();
            ctx.restore();
          }
        });
      },
    };
    
    const options = {
      maintainAspectRatio: false,
    
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          min: 76.1,
          max: 77.1,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            // display: false,
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 0.2,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options2 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          min: 75.0,
          max: 77.5,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 0.5,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options3 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          min: 69.0,
          max: 78,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 1,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options4 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          min: 35,
          max: 85,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 10,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options5 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          display: false,
          min: 22.9,
          max: 23.9,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 50,
            stepSize: 10,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options6 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          display: false,
          min: 22.5,
          max: 25,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 10,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options7 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          display: false,
          min: 22,
          max: 31,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 10,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    const options8 = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
    
        tooltip: {
          enabled: false,
        },
      },
    
      interaction: {
        intersect: false,
        mode: "index",
      },
    
      elements: {
        point: {
          radius: 0,
        },
      },
    
      scales: {
        y: {
          display: false,
          min: 15,
          max: 65,
          position: "right",
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          stacked: true,
          ticks: {
            color: "white",
            font: {
              size: 11,
            },
            padding: 15,
            stepSize: 10,
          },
        },
    
        x: {
          grid: {
            drawOnChartArea: false,
            display: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
            color: "white",
            font: {
              size: 11,
            },
          },
        },
      },
    };
    
    // -------------------------------------------------
    
    const data1 = {
      labels: [
        "9:00 PM",
        "",
        "",
        "12:00 AM",
        "",
        "",
        "3:00 AM",
        "",
        "",
        "6:00 AM",
        "",
        "",
        "9:00 AM",
        "",
        "",
        "12:00 PM",
        "",
        "",
        "3:00 PM",
        "",
        "",
        "6:00 PM",
        "",
        "",
        "9:00 PM",
      ],
      datasets: [
        {
          label: "",
          data: [
            76.65,
            76.66,
            76.66,
            76.22,
            76.22,
            76.31,
            76.32,
            76.31,
            76.31,
            "76.50",
            76.51,
            76.51,
            76.42,
            76.41,
            76.44,
            76.46,
            76.44,
            76.43,
            "76.40",
            76.41,
            "76.40",
            76.46,
            76.45,
            76.46,
            77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#32e9b4",
          fill: true,
          backgroundColor: gradient1,
          pointBackgroundColor: "#32e9b4",
          pointHoverRadius: 3,
        },
      ],
    };
    
    if (swapSection.clientWidth < 1150) {
      data1.labels = [
        "9:00 PM",
        "",
        "",
        "",
        "",
        "",
        "3:00 AM",
        "",
        "",
        "",
        "",
        "",
        "9:00 AM",
        "",
        "",
        "",
        "",
        "",
        "3:00 PM",
        "",
        "",
        "",
        "",
        "",
        "9:00 PM",
      ];
    }
    
    const config1 = {
      type: "line",
      data: data1,
      options,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const firstChart = new Chart(
      document.getElementById("firstChart"),
      config1
    );
    
    // -------------------------------------------------
    
    const data2 = {
      labels: [
        "Feb 26",
        "",
        "",
        "",
        "Feb 27",
        "",
        "",
        "",
        "Feb 28",
        "",
        "",
        "",
        "Mar 01",
        "",
        "",
        "",
        "Mar 02",
        "",
        "",
        "",
        "Mar 03",
        "",
        "",
        "",
        "Mar 04",
        "",
        "",
        "",
      ],
      datasets: [
        {
          label: "",
          data: [
            75.32,
            75.38,
            75.39,
            75.69,
            "76.00",
            76.23,
            76.11,
            76.12,
            76.19,
            76.13,
            "76.38",
            76.53,
            76.64,
            76.77,
            76.59,
            76.53,
            76.66,
            76.31,
            76.3,
            76.44,
            "76.40",
            76.57,
            76.25,
            77.21,
            77.23,
            77.14,
            77.18,
            77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#32e9b4",
          fill: true,
          backgroundColor: gradient1,
          pointBackgroundColor: "#32e9b4",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config2 = {
      type: "line",
      data: data2,
      options: options2,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const secondChart = new Chart(
      document.getElementById("secondChart"),
      config2
    );
    
    // -------------------------------------------------
    
    const data3 = {
      labels: [
        "Feb 04",
        "",
        "",
        "",
        "Feb 08",
        "",
        "",
        "",
        "Feb 12",
        "",
        "",
        "",
        "Feb 16",
        "",
        "",
        "",
        "Feb 20",
        "",
        "",
        "",
        "Feb 24",
        "",
        "",
        "",
        "Feb 28",
        "",
        "",
        "",
        "Mar 04",
      ],
      datasets: [
        {
          label: "",
          data: [
            76.07,
            73.03,
            74.05,
            73.2,
            72.95,
            70.05,
            73.29,
            "74.20",
            74.05,
            74.85,
            74.61,
            74.91,
            74.65,
            76.11,
            75.18,
            74.97,
            74.71,
            74.59,
            75.09,
            75.69,
            75.83,
            75.38,
            76.12,
            76.09,
            76.69,
            76.42,
            76.47,
            77.02,
            77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#32e9b4",
          fill: true,
          backgroundColor: gradient1,
          pointBackgroundColor: "#32e9b4",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config3 = {
      type: "line",
      data: data3,
      options: options3,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const thirdChart = new Chart(
      document.getElementById("thirdChart"),
      config3
    );
    
    // -------------------------------------------------
    
    const data4 = {
      labels: [
        "Mar 09",
        "",
        "",
        "",
        "May 08",
        "",
        "",
        "",
        "Jul 07",
        "",
        "",
        "",
        "Sep 5",
        "",
        "",
        "",
        "Nov 04",
        "",
        "",
        "",
        "Jan 03",
        "",
        "",
        "",
        "Mar 04",
      ],
      datasets: [
        {
          label: "",
          data: [
            58.03,
            50.19,
            43.12,
            50.65,
            66.16,
            65.05,
            70.97,
            "73.90",
            78.22,
            75.77,
            "76.60",
            66.57,
            61.41,
            62.84,
            61.11,
            71.65,
            71.31,
            73.15,
            72.01,
            76.98,
            81.07,
            78.21,
            75.18,
            76.76,
            77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#32e9b4",
          fill: true,
          backgroundColor: gradient1,
          pointBackgroundColor: "#32e9b4",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config4 = {
      type: "line",
      data: data4,
      options: options4,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const fourthChart = new Chart(
      document.getElementById("fourthChart"),
      config4
    );
    
    // -------------------------------------------------
    
    const data5 = {
      labels: [
        "9:00 PM",
        "",
        "",
        "12:00 AM",
        "",
        "",
        "3:00 AM",
        "",
        "",
        "6:00 AM",
        "",
        "",
        "9:00 AM",
        "",
        "",
        "12:00 PM",
        "",
        "",
        "3:00 PM",
        "",
        "",
        "6:00 PM",
        "",
        "",
        "9:00 PM",
      ],
      datasets: [
        {
          label: "",
          data: [
            23.35, 23.34, 23.34, 23.78, 23.78, 23.69, 23.68, 23.69,
            23.69, 23.5, 23.49, 23.49, 23.58, 23.59, 23.56, 23.54,
            23.56, 23.57, 23.6, 23.59, 23.6, 23.54, 23.55, 23.54,
            22.91,
          ],
          borderWidth: 1.5,
          borderColor: "#e9479d",
          fill: true,
          backgroundColor: gradient2,
          pointBackgroundColor: "#e9479d",
          pointHoverRadius: 3,
        },
      ],
    };
    
    if (swapSection.clientWidth < 1150) {
      data5.labels = [
        "9:00 PM",
        "",
        "",
        "",
        "",
        "",
        "3:00 AM",
        "",
        "",
        "",
        "",
        "",
        "9:00 AM",
        "",
        "",
        "",
        "",
        "",
        "3:00 PM",
        "",
        "",
        "",
        "",
        "",
        "9:00 PM",
      ];
    }
    
    const config5 = {
      type: "line",
      data: data5,
      options: options5,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const fifthChart = new Chart(
      document.getElementById("fifthChart"),
      config5
    );
    
    // -------------------------------------------------
    
    const data6 = {
      labels: [
        "Feb 26",
        "",
        "",
        "",
        "Feb 27",
        "",
        "",
        "",
        "Feb 28",
        "",
        "",
        "",
        "Mar 01",
        "",
        "",
        "",
        "Mar 02",
        "",
        "",
        "",
        "Mar 03",
        "",
        "",
        "",
        "Mar 04",
        "",
        "",
        "",
      ],
      datasets: [
        {
          label: "",
          data: [
            100 - 75.32,
            100 - 75.38,
            100 - 75.39,
            100 - 75.69,
            100 - 76.0,
            100 - 76.23,
            100 - 76.11,
            100 - 76.12,
            100 - 76.19,
            100 - 76.13,
            100 - 76.38,
            100 - 76.53,
            100 - 76.64,
            100 - 76.77,
            100 - 76.59,
            100 - 76.53,
            100 - 76.66,
            100 - 76.31,
            100 - 76.3,
            100 - 76.44,
            100 - 76.4,
            100 - 76.57,
            100 - 76.25,
            100 - 77.21,
            100 - 77.23,
            100 - 77.14,
            100 - 77.18,
            100 - 77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#e9479d",
          fill: true,
          backgroundColor: gradient2,
          pointBackgroundColor: "#e9479d",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config6 = {
      type: "line",
      data: data6,
      options: options6,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const sixthChart = new Chart(
      document.getElementById("sixthChart"),
      config6
    );
    
    // -------------------------------------------------
    
    const data7 = {
      labels: [
        "Feb 04",
        "",
        "",
        "",
        "Feb 08",
        "",
        "",
        "",
        "Feb 12",
        "",
        "",
        "",
        "Feb 16",
        "",
        "",
        "",
        "Feb 20",
        "",
        "",
        "",
        "Feb 24",
        "",
        "",
        "",
        "Feb 28",
        "",
        "",
        "",
        "Mar 04",
      ],
      datasets: [
        {
          label: "",
          data: [
            100 - 76.07,
            100 - 73.03,
            100 - 74.05,
            100 - 73.2,
            100 - 72.95,
            100 - 70.05,
            100 - 73.29,
            100 - 74.2,
            100 - 74.05,
            100 - 74.85,
            100 - 74.61,
            100 - 74.91,
            100 - 74.65,
            100 - 76.11,
            100 - 75.18,
            100 - 74.97,
            100 - 74.71,
            100 - 74.59,
            100 - 75.09,
            100 - 75.69,
            100 - 75.83,
            100 - 75.38,
            100 - 76.12,
            100 - 76.09,
            100 - 76.69,
            100 - 76.42,
            100 - 76.47,
            100 - 77.02,
            100 - 77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#e9479d",
          fill: true,
          backgroundColor: gradient2,
          pointBackgroundColor: "#e9479d",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config7 = {
      type: "line",
      data: data7,
      options: options7,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const seventhChart = new Chart(
      document.getElementById("seventhChart"),
      config7
    );
    
    // -------------------------------------------------
    
    const data8 = {
      labels: [
        "Mar 09",
        "",
        "",
        "",
        "May 08",
        "",
        "",
        "",
        "Jul 07",
        "",
        "",
        "",
        "Sep 5",
        "",
        "",
        "",
        "Nov 04",
        "",
        "",
        "",
        "Jan 03",
        "",
        "",
        "",
        "Mar 04",
      ],
      datasets: [
        {
          label: "",
          data: [
            100 - 58.03,
            100 - 50.19,
            100 - 43.12,
            100 - 50.65,
            100 - 66.16,
            100 - 65.05,
            100 - 70.97,
            100 - 73.9,
            100 - 78.22,
            100 - 75.77,
            100 - 76.6,
            100 - 66.57,
            100 - 61.41,
            100 - 62.84,
            100 - 61.11,
            100 - 71.65,
            100 - 71.31,
            100 - 73.15,
            100 - 72.01,
            100 - 76.98,
            100 - 81.07,
            100 - 78.21,
            100 - 75.18,
            100 - 76.76,
            100 - 77.09,
          ],
          borderWidth: 1.5,
          borderColor: "#e9479d",
          fill: true,
          backgroundColor: gradient2,
          pointBackgroundColor: "#e9479d",
          pointHoverRadius: 3,
        },
      ],
    };
    
    const config8 = {
      type: "line",
      data: data8,
      options: options8,
    
      // plugins: [horizontalArbitraryLine],
      plugins: [hoverValue, myEventCatcher],
    };
    
    const eighthChart = new Chart(
      document.getElementById("eighthChart"),
      config8
    );
    
    // -------------------------------------------------
    
    //     Functions
    
    function chartHidden() {
      chart1.style.visibility = "hidden";
      chart2.style.visibility = "hidden";
      chart3.style.visibility = "hidden";
      chart4.style.visibility = "hidden";
      chart5.style.visibility = "hidden";
      chart6.style.visibility = "hidden";
      chart7.style.visibility = "hidden";
      chart8.style.visibility = "hidden";
    }
    
    function deleteBackground(date) {
      date.style.background = "transparent";
      date.style.color = "#1fc7d4";
    }
    
    function addBackground(date) {
      date.style.background = "#1fc7d4";
      date.style.color = "#191326";
    }
    
    dayBtn.addEventListener("click", () => {
      deleteBackground(dayBtn);
      deleteBackground(weekBtn);
      deleteBackground(monthBtn);
      deleteBackground(yearBtn);
      addBackground(dayBtn);
      chartHidden();
      if (coinsName.innerText == "BNB/CAKE") {
        chart1.style.visibility = "visible";
        chartPercent.innerText = "+0.441 (0.58%)";
        chartPercent.style.color = "#32e9b4";
      } else if (coinsName.innerText == "CAKE/BNB") {
        chart5.style.visibility = "visible";
        chartPercent.innerText = "-0.001 (-0.10%)";
        chartPercent.style.color = "#e9479d";
        chartValue.innerText = "0.013";
      }
    });
    
    weekBtn.addEventListener("click", () => {
      deleteBackground(dayBtn);
      deleteBackground(weekBtn);
      deleteBackground(monthBtn);
      deleteBackground(yearBtn);
      addBackground(weekBtn);
      chartHidden();
      if (coinsName.innerText == "BNB/CAKE") {
        chart2.style.visibility = "visible";
        chartPercent.innerText = "+1.031 (1.37%)";
        chartPercent.style.color = "#32e9b4";
      } else if (coinsName.innerText == "CAKE/BNB") {
        chart6.style.visibility = "visible";
        chartPercent.innerText = "-0.001 (-1.75%)";
        chartPercent.style.color = "#e9479d";
        chartValue.innerText = "0.013";
      }
    });
    
    monthBtn.addEventListener("click", () => {
      deleteBackground(dayBtn);
      deleteBackground(weekBtn);
      deleteBackground(monthBtn);
      deleteBackground(yearBtn);
      addBackground(monthBtn);
      chartHidden();
      if (coinsName.innerText == "BNB/CAKE") {
        chart3.style.visibility = "visible";
        chartPercent.innerText = "+0.593 (0.78%)";
        chartPercent.style.color = "#32e9b4";
      } else if (coinsName.innerText == "CAKE/BNB") {
        chart7.style.visibility = "visible";
        chartPercent.innerText = "-0.001 (-0.77%)";
        chartPercent.style.color = "#e9479d";
      }
    });
    
    yearBtn.addEventListener("click", () => {
      deleteBackground(dayBtn);
      deleteBackground(weekBtn);
      deleteBackground(monthBtn);
      deleteBackground(yearBtn);
      addBackground(yearBtn);
      chartHidden();
      if (coinsName.innerText == "BNB/CAKE") {
        chart4.style.visibility = "visible";
        chartPercent.innerText = "+18.625 (32.09%)";
        chartPercent.style.color = "#32e9b4";
      } else if (coinsName.innerText == "CAKE/BNB") {
        chart8.style.visibility = "visible";
        chartPercent.innerText = "-0.004 (-24.30%)";
        chartPercent.style.color = "#e9479d";
      }
    });
    
    iconsSwapBtn.addEventListener("click", () => {
      if (graphIcons.style.flexDirection == "row-reverse") {
        graphIcons.style.flexDirection = "row";
      } else {
        graphIcons.style.flexDirection = "row-reverse";
      }
    
      if (coinsName.innerText == "BNB/CAKE") {
        coinsName.innerText = "CAKE/BNB";
        coinsName2.innerText = "CAKE/BNB";
        if (chart2.style.visibility == "visible") {
          chartHidden();
          chart6.style.visibility = "visible";
          chartPercent.innerText = "-0.001 (-1.75%)";
          chartPercent.style.color = "#e9479d";
          chartValue.innerText = "0.013";
        } else if (chart3.style.visibility == "visible") {
          chartHidden();
          chart7.style.visibility = "visible";
          chartPercent.innerText = "-0.001 (-0.77%)";
          chartPercent.style.color = "#e9479d";
          chartValue.innerText = "0.013";
        } else if (chart4.style.visibility == "visible") {
          chartHidden();
          chart8.style.visibility = "visible";
          chartPercent.innerText = "-0.004 (-24.30%)";
          chartPercent.style.color = "#e9479d";
          chartValue.innerText = "0.013";
        } else {
          chartHidden();
          chart5.style.visibility = "visible";
          chartPercent.innerText = "-0.001 (-0.10%)";
          chartValue.innerText = "0.013";
          chartPercent.style.color = "#e9479d";
          chartValue.innerText = "0.013";
        }
      } else {
        coinsName.innerText = "BNB/CAKE";
        coinsName2.innerText = "BNB/CAKE";
    
        if (chart6.style.visibility == "visible") {
          chartHidden();
          chart2.style.visibility = "visible";
          chartPercent.innerText = "+1.031 (1.37%)";
          chartPercent.style.color = "#32e9b4";
          chartValue.innerText = "77.09";
        } else if (chart7.style.visibility == "visible") {
          chartHidden();
          chart3.style.visibility = "visible";
          chartPercent.innerText = "+0.593 (0.78%)";
          chartPercent.style.color = "#32e9b4";
          chartValue.innerText = "77.09";
        } else if (chart8.style.visibility == "visible") {
          chartHidden();
          chart4.style.visibility = "visible";
          chartPercent.innerText = "+18.625 (32.09%)";
          chartPercent.style.color = "#32e9b4";
          chartValue.innerText = "77.09";
        } else if (chart5.style.visibility == "visible") {
          chartHidden();
          chart1.style.visibility = "visible";
          chartPercent.innerText = "+0.441 (0.58%)";
          chartPercent.style.color = "#32e9b4";
          chartValue.innerText = "77.09";
        }
      }
    });
    
    function dataTransition(a) {
      dayBtn.style.transition = a;
      weekBtn.style.transition = a;
      monthBtn.style.transition = a;
      yearBtn.style.transition = a;
      iconsSwapBtn.style.transition = a;
      sizeChangerBtn.style.transition = a;
    }
    
    graphVisibilityBtn.addEventListener("click", () => {
      if (swapChartBg.style.visibility == "hidden") {
        dataTransition("0.2s");
        deleteBackground(dayBtn);
        deleteBackground(weekBtn);
        deleteBackground(monthBtn);
        deleteBackground(yearBtn);
        addBackground(dayBtn);
        chartHidden();
        coinsName.innerText = "BNB/CAKE";
        coinsName2.innerText = "BNB/CAKE";
        chart1.style.visibility = "visible";
        chartPercent.innerText = "+0.441 (0.58%)";
        chartPercent.style.color = "#32e9b4";
        cardBtn1Img.src = "./assets/swap11.svg";
        swapChartBg.style.visibility = "visible";
        if (data1.datasets[0].backgroundColor == gradient1) {
          swapChartBg.style.width = "50%";
        } else {
          swapChartBg.style.width = "100%";
        }
        chartValue.innerText = "77.09";
        swapChartBg.classList.remove("chart-off");
        swapChartBg.classList.add("chart-on");
      } else if ((swapChartBg.style.visibility = "visible")) {
        swapChartBg.classList.remove("chart-on");
        swapChartBg.classList.add("chart-off");
        swapChartBg.style.width = 0;
        dataTransition("0s");
        cardBtn1Img.src = "./assets/swap12.svg";
        swapChartBg.style.visibility = "hidden";
        chartHidden();
      }
    });
    
    let cardBox = document.getElementById("card-box");
    let graphCard = document.getElementById("graph-card");
    let calcBox = document.getElementById("calc-box");
    let calcContent = document.getElementById("calc-content");
    let price = document.getElementById("price");
    let priceInfo = document.getElementById("price-info");
    let sizeChangerBtn = document.getElementById("size-changer");
    let mainContent = document.getElementById("main-content");
    
    function whenInputNotEmpty() {
      if (contentFooter.style.display != "none") {
        graphCard.style.height = "760px";
        swapSection.style.height = "auto";
      } else {
        swapSection.style.minHeight = "811px";
      }
      cardBox.style.height = "745px";
      calcBox.style.height = "460px";
      calcContent.style.height = "376px";
      price.style.display = "flex";
      priceInfo.style.display = "block";
    }
    
    function whenInputEmpty() {
      if (contentFooter.style.display != "none") {
        graphCard.style.height = "calc(100% - 108px)";
        swapSection.style.height = "calc(100vh - 57px)";
      }
      swapSection.style.height = "calc(100vh - 57px)";
      cardBox.style.height = "589px";
      calcBox.style.height = "436px";
      calcContent.style.height = "352px";
      price.style.display = "none";
      priceInfo.style.display = "none";
    }
    
    firstInput.addEventListener("input", (el) => {
      let val1 = el.target.value * 77.09;
    
      if (el.target.value < 14) {
        secondInput.value = val1.toFixed(3);
      } else if (el.target.value < 150) {
        secondInput.value = val1.toFixed(2);
      } else {
        secondInput.value = val1.toFixed(1);
      }
    
      let val2 = el.target.value * 284.71;
      firstInput_p.innerText = `~${val2.toFixed(2)} USD`;
      let val3 = secondInput.value * 3.685;
      secondInput_p.innerText = `~${val3.toFixed(2)} USD`;
    
      if (firstInput.value == 0) {
        firstInput_p.innerText = "";
        secondInput_p.innerText = "";
        firstInput.value = "";
        secondInput.value = "";
        whenInputEmpty();
      } else {
        whenInputNotEmpty();
      }
    });
    
    secondInput.addEventListener("input", (el) => {
      let val1 = el.target.value * 0.0131594;
    
      if (el.target.value < 10) {
        firstInput.value = val1.toFixed(7);
      } else if (el.target.value < 100) {
        firstInput.value = val1.toFixed(6);
      } else if (el.target.value < 1000) {
        firstInput.value = val1.toFixed(5);
      } else if (el.target.value < 10000) {
        firstInput.value = val1.toFixed(4);
      } else if (el.target.value < 100000) {
        firstInput.value = val1.toFixed(3);
      } else {
        firstInput.value = val1.toFixed(2);
      }
    
      let val2 = firstInput.value * 284.71;
      firstInput_p.innerText = `~${val2.toFixed(2)} USD`;
      let val3 = el.target.value * 3.685;
      secondInput_p.innerText = `~${val3.toFixed(2)} USD`;
    
      if (secondInput.value == 0) {
        firstInput_p.innerText = "";
        secondInput_p.innerText = "";
        firstInput.value = "";
        secondInput.value = "";
        whenInputEmpty();
      } else {
        whenInputNotEmpty();
      }
    });
    
    let priceInfoBnbCake = document.getElementById(
      "price-info-bnb-cake"
    );
    
    inputSwitchBtn.addEventListener("click", () => {
      if (titleInput1.style.order == "4") {
        titleInput2.style.order = 3;
        lowRiskDiv.style.order = 4;
        arrowDown.style.order = 2;
        titleInput1.style.order = 1;
        priceInfoBnbCake.innerText = "BNB - CAKE";
      } else {
        titleInput2.style.order = 1;
        lowRiskDiv.style.order = 2;
        arrowDown.style.order = 3;
        titleInput1.style.order = 4;
        priceInfoBnbCake.innerText = "CAKE - BNB";
      }
    });
    
    let priceOfCoinsBtn = document.getElementById(
      "price-of-coins-btn"
    );
    let priceFirstCoin = document.getElementById(
      "price-first-coin"
    );
    let priceSecondCoin = document.getElementById(
      "price-second-coin"
    );
    
    priceOfCoinsBtn.addEventListener("click", () => {
      if (priceFirstCoin.innerText == "1 CAKE") {
        priceFirstCoin.innerText = "1 BNB";
        priceSecondCoin.innerText = "77.0942 CAKE";
      } else {
        priceFirstCoin.innerText = "1 CAKE";
        priceSecondCoin.innerText = "0.0131594 BNB";
      }
    });
    
    let MC = mainContent.clientHeight
    console.log(MC)
    
    function toLargeChard() {
      graphCard.style.height = "100%";
      graphCard.style.width = "100%";
      swapChartBg.style.height = `${MC}px`;
      swapChartBg.style.width = "100%";
      swapChartBg.style.borderRadius = "0px";
      mainContent.style.padding = "0px";
      if (swapSection.clientWidth > 962) {
        chartContainer.style.height = "calc(100% - 133px)";
      }
      console.log(swapChartBg.clientHeight);
      cardBox.style.marginTop = "24px";
      contentFooter.style.display = "none";
      sizeChangerImg.src = "./assets/swapChartSizeChanger.svg";
      chartHeight = chartContainer.clientHeight - 32;
    
      let gradient3 = document
        .getElementById("firstChart")
        .getContext("2d")
        .createLinearGradient(0, 0, 0, chartHeight);
      gradient3.addColorStop(0, "#32e9b4");
      gradient3.addColorStop(1, "#393440");
    
      let gradient4 = document
        .getElementById("firstChart")
        .getContext("2d")
        .createLinearGradient(0, 0, 0, chartHeight);
      gradient4.addColorStop(0, "#e9479d");
      gradient4.addColorStop(1, "#393440");
    
      let dataArr = [
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
      ];
    
      for (let i = 0; i < 4; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient3;
      }
      for (let i = 4; i < 8; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient4;
      }
    }
    
    function toSmallChart() {
      graphCard.style.height = "calc(100% - 108px)";
      graphCard.style.width = "auto";
      if (swapSection.clientWidth > 962) {
        swapChartBg.style.width = "50%";
        swapChartBg.style.height = "516px";
      }
      swapChartBg.style.borderRadius = "16px";
      mainContent.style.padding = "32px 32px 0px 32px";
      cardBox.style.marginTop = "0px";
      contentFooter.style.display = "flex";
      sizeChangerImg.src = "./assets/swap-size-button.svg";
      chartContainer.style.height = "340px";
    
      let dataArr = [
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
      ];
    
      for (let i = 0; i < 4; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient1;
      }
      for (let i = 4; i < 8; i++) {
        dataArr[i].datasets[0].backgroundColor = gradient2;
      }
    }
    
    // console.log(swapSection.clientWidth > 970)
    
    sizeChangerBtn.addEventListener("click", () => {
      if (contentFooter.style.display != "none") {
        if (swapSection.clientWidth > 962) {
          toLargeChard();
        }
      } else {
        if (swapSection.clientWidth > 962) {
          toSmallChart();
        }
      }
    });
    
    let chartClosingBtn = document.getElementById("chart-closing-btn")
    
    chartClosingBtn.addEventListener("click", () => {
      if (swapChartBg.style.visibility == "hidden") {
        dataTransition("0.2s");
        deleteBackground(dayBtn);
        deleteBackground(weekBtn);
        deleteBackground(monthBtn);
        deleteBackground(yearBtn);
        addBackground(dayBtn);
        chartHidden();
        coinsName.innerText = "BNB/CAKE";
        coinsName2.innerText = "BNB/CAKE";
        chart1.style.visibility = "visible";
        chartPercent.innerText = "+0.441 (0.58%)";
        chartPercent.style.color = "#32e9b4";
        cardBtn1Img.src = "./assets/swap11.svg";
        swapChartBg.style.visibility = "visible";
        if (data1.datasets[0].backgroundColor == gradient1) {
          swapChartBg.style.width = "50%";
        } else {
          swapChartBg.style.width = "100%";
        }
        chartValue.innerText = "77.09";
        swapChartBg.classList.remove("chart-off");
        swapChartBg.classList.add("chart-on");
      } else if ((swapChartBg.style.visibility = "visible")) {
        swapChartBg.classList.remove("chart-on");
        swapChartBg.classList.add("chart-off");
        swapChartBg.style.width = 0;
        dataTransition("0s");
        cardBtn1Img.src = "./assets/swap12.svg";
        swapChartBg.style.visibility = "hidden";
        chartHidden();
      }
    })
    
    const media = matchMedia("(max-width: 1200px");
    
    const media2 = matchMedia("(max-width: 970px");
    
    media.addEventListener("change", ({ matches }) => {
      if (matches) {
        data1.labels = [
          "9:00 PM",
          "",
          "",
          "",
          "",
          "",
          "3:00 AM",
          "",
          "",
          "",
          "",
          "",
          "9:00 AM",
          "",
          "",
          "",
          "",
          "",
          "3:00 PM",
          "",
          "",
          "",
          "",
          "",
          "9:00 PM",
        ];
        data5.labels = [
          "9:00 PM",
          "",
          "",
          "",
          "",
          "",
          "3:00 AM",
          "",
          "",
          "",
          "",
          "",
          "9:00 AM",
          "",
          "",
          "",
          "",
          "",
          "3:00 PM",
          "",
          "",
          "",
          "",
          "",
          "9:00 PM",
        ];
      } else {
        data1.labels = [
          "9:00 PM",
          "",
          "",
          "12:00 AM",
          "",
          "",
          "3:00 AM",
          "",
          "",
          "6:00 AM",
          "",
          "",
          "9:00 AM",
          "",
          "",
          "12:00 PM",
          "",
          "",
          "3:00 PM",
          "",
          "",
          "6:00 PM",
          "",
          "",
          "9:00 PM",
        ];
        data5.labels = [
          "9:00 PM",
          "",
          "",
          "12:00 AM",
          "",
          "",
          "3:00 AM",
          "",
          "",
          "6:00 AM",
          "",
          "",
          "9:00 AM",
          "",
          "",
          "12:00 PM",
          "",
          "",
          "3:00 PM",
          "",
          "",
          "6:00 PM",
          "",
          "",
          "9:00 PM",
        ];
      }
    });
    
    media2.addEventListener("change", ({ matches }) => {
      if (matches) {
        chartContainer.style.height = "calc(100% - 167px)";
        swapChartBg.style.width = "100%";
        swapChartBg.style.height = "100vh";
    
        chartHeight = chartContainer.clientHeight - 32;
        let dataArr = [
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
        ];
    
        let gradient3 = document
          .getElementById("firstChart")
          .getContext("2d")
          .createLinearGradient(0, 0, 0, chartHeight);
        gradient3.addColorStop(0, "#32e9b4");
        gradient3.addColorStop(1, "#393440");
    
        let gradient4 = document
          .getElementById("firstChart")
          .getContext("2d")
          .createLinearGradient(0, 0, 0, chartHeight);
        gradient4.addColorStop(0, "#e9479d");
        gradient4.addColorStop(1, "#393440");
    
        for (let i = 0; i < 4; i++) {
          dataArr[i].datasets[0].backgroundColor = gradient3;
        }
        for (let i = 4; i < 8; i++) {
          dataArr[i].datasets[0].backgroundColor = gradient4;
        }
      } else {
        chartHeight = chartContainer.clientHeight - 32;
        let dataArr = [
          data1,
          data2,
          data3,
          data4,
          data5,
          data6,
          data7,
          data8,
        ];
        let gradient3 = document
          .getElementById("firstChart")
          .getContext("2d")
          .createLinearGradient(0, 0, 0, chartHeight);
        gradient3.addColorStop(0, "#32e9b4");
        gradient3.addColorStop(1, "#393440");
    
        let gradient4 = document
          .getElementById("firstChart")
          .getContext("2d")
          .createLinearGradient(0, 0, 0, chartHeight);
        gradient4.addColorStop(0, "#e9479d");
        gradient4.addColorStop(1, "#393440");
    
        for (let i = 0; i < 4; i++) {
          dataArr[i].datasets[0].backgroundColor = gradient1;
        }
        for (let i = 4; i < 8; i++) {
          dataArr[i].datasets[0].backgroundColor = gradient2;
        }
    
        if (contentFooter.style.display == "flex") {
          chartContainer.style.height = "340px";
    
          if (swapChartBg.classList.contains("chart-on")) {
            swapChartBg.style.width = "50%";
          } else {
            swapChartBg.style.width = "0px";
          }
    
          swapChartBg.style.height = "516px";
        } else {
          swapChartBg.style.width = "100%";
          swapChartBg.style.height = "100%";
        }
      }
    });
    
    return () => {
      console.log("unmounted")
    };
  }, []);

  return (
    <div className="swap-body">
      <Header />
      {/*<!-- Main Section Start --> */}
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
                    <button id="chart-closing-btn">
                      <img
                        id="chart-closing-img"
                        src="./assets/swapChartCloseBtn.svg"
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
      {/* <!-- Main Section End -->*/}
      {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <script src="./scripts/header-footer.js"></script>
      <script src="./scripts/swap.js"></script> */}
      <Footer />
    </div>
  );
}

export default Swap;
