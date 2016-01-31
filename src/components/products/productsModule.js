/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["src/components/products/productsController", "src/components/products/config"], function (ProductsController, config) {
  'use strict';
  var productsModule = angular.module("dsplApp.productsModule", []);
  productsModule.controller("productsController", ProductsController);
  productsModule.config(config);
});
