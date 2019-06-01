// soos
const ping = require("./ping");
const Chart = require("chart.js");

var ctx = document.getElementById("pings").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "ping",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "transparent",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1.5
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

// const pingsElement = document.querySelector("#pings");

// ping(
//   ({ type, value }) =>
//     (pingsElement.innerHTML =
//       pingsElement.innerHTML + "<br/>" + `${type}: ${value}`)
// );
