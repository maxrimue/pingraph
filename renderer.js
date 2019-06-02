// soos
const ping = require("./ping");
const Chart = require("chart.js");

var ctx = document.getElementById("pings").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "ping",
        data: [4, 8, 2, 2]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  },
  maintainAspectRatio: false,
  responsive: true
});

// const pingsElement = document.querySelector("#pings");

// ping(
//   ({ type, value }) =>
//     (pingsElement.innerHTML =
//       pingsElement.innerHTML + "<br/>" + `${type}: ${value}`)
// );
