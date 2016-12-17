(function(){
  var assetAllocation = new AssetAllocation(100);
  var bonds = document.getElementById("percent_bonds");
  bonds.addEventListener("input", function(e){
    var bondPercent = parseInt(e.target.value);
    assetAllocation.setPercentBonds(bondPercent);
    myChart.data.datasets[0].data = [
      assetAllocation.totalBonds(),
      assetAllocation.totalUSStock(),
      assetAllocation.totalIntStock()
    ];
    myChart.update();
  });
}());
