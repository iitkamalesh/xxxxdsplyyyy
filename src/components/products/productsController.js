define([], function() {
  'use strict';
  function ProductsController(){
    var controller = this;

    console.log("From products controller");
  }
  //ProductsController.$inject = ["$scope"];
  return ProductsController;
});
