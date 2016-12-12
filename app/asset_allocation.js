(function(){
  var AssetAllocation = function(amount){
    this._intStockPercent = (1.0/3.0);
    this.amount = amount;
  };

  AssetAllocation.prototype = {
    set: function(allocations){
      this.percentBonds = allocations.percentBonds;
    },

    _percentStocks: function() {
      return 100 - this.percentBonds;
    },

    _percentIntStocks: function() {
      return this._percentStocks() * this._intStockPercent;
    },

    _percentUSStock: function() {
      return this._percentStocks() * (1 - this._intStockPercent);
    },

    totalBonds: function(){
      return Math.round((this.percentBonds / 100) * this.amount);
    },

    totalUSStock: function(){
      return Math.round((this._percentUSStock() / 100) * this.amount);
    },

    totalIntStock: function(){
      return Math.round((this._percentIntStocks() / 100) * this.amount);
    }
  };

  window.AssetAllocation = AssetAllocation;
}());
