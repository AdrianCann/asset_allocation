(function(){
  var AssetAllocation = function(amount){
    this._intStockPercent = (1.0/3.0);
    this.amount = amount;
  };

  AssetAllocation.prototype = {
    setPercentBonds: function(percent){
      this.percentBonds = percent;
      this.percentUSStock = (100 - percent) * (1 - this._intStockPercent);
      this.percentIntStock = (100 - percent) * (this._intStockPercent);
    },

    totalBonds: function(){
      return this._roundedTotal(this.percentBonds);
    },

    totalUSStock: function(){
      return this._roundedTotal(this.percentUSStock);
    },

    totalIntStock: function(){
      return this._roundedTotal(this.percentIntStock);
    },

    _total: function(percent){
      return (percent / 100) * this.amount;
    },

    _roundedTotal: function(percent){
      return Math.round(this._total(percent));
    }
  };

  window.AssetAllocation = AssetAllocation;
}());
