/**
 * Created by Praveen on 30-01-2016.
 */
define(["src/components/products/productsController"], function(productsController) {
  'use strict';
  function Config($stateProvider){
    $stateProvider
      .state('products', {
        url:"/products",
        templateUrl: "src/components/products/_products.html",
        controller: "productsController",
        controllerAs: "products"
      });
  }
  Config.$inject = ["$stateProvider"];
  return Config;
});
