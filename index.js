import Chart from 'chart.js';


var lineChartData = {
  labels: [ '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
  datasets: [{
    label: '',
    borderColor: "red",
    backgroundColor: "red",
    fill: false,
    data: [
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
    ],
    borderWidth: 6,
    yAxisID: 'y-axis-1',
  }]
};

window.onload = function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.height = 500;

  window.myLine = Chart.Line(ctx, {
    data: lineChartData,
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      responsive: true,
      hoverMode: 'index',
      stacked: false,
      title: {
        display: false,
        text: 'Chart.js Line Chart - Multi Axis'
      },
      scales: {
        yAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          display: true,
          position: 'left',
          id: 'y-axis-1',
          scaleLabel: {
            display: true,
            labelString: 'Profit',
            fontSize: '30',
            fontColor: 'black'
          }
        }],
        xAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of code lines',
            fontSize: '30',
            fontColor: 'black'
          }
        }]
      }
    }
  });
};
