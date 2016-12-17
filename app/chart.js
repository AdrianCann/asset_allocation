(function(){
  var ctx = document.getElementById("myChart");
  var data = {
      labels: ["Bonds", "US Stock", "Int Stock"],
      datasets: [{
        label: "Total Amount",
        data: [10, (2/3)*90, (1/3)*90],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255,99,132,1)",
        ],
        borderWidth: 1
      }]
    };
  var configuration = {
    type: "pie",
    data: data
  };

  Chart.defaults.global.defaultFontSize = 50;
  Chart.defaults.global.defaultFontFamily = "sans-serif";
  var myChart = new Chart(ctx, configuration);
  window.myChart = myChart;
}());
