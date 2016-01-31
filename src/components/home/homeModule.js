define(["src/components/home/homeController", "src/components/home/config", "angular-ui", "src/components/products/productsModule", "src/components/admin/adminModule"], function (HomeController, config) {
  'use strict';
  var homeModule = angular.module("dsplApp.homeModule", ["ui.router", "dsplApp.productsModule", "dsplApp.adminModule"]);
  homeModule.controller("homeController", HomeController);
  homeModule.config(config);
});
