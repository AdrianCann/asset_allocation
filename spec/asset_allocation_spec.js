QUnit.test("set a bond amount", function(assert){
  var amount = 100*1000;
  var assetAllocation = new AssetAllocation(amount);

  assetAllocation.setPercentBonds(10);

  assert.equal(assetAllocation.totalBonds(), 10*1000);
  assert.equal(assetAllocation.totalUSStock(), (2/3)* (90/100) * (100*1000));
  assert.equal(assetAllocation.totalIntStock(), (1/3) * (90/100) * (100*1000));
});
