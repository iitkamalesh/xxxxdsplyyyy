define(["src/components/home/homeController"], function(homeController) {
  'use strict';
  function Config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "src/components/home/_home.html",
        controller: "homeController",
        controllerAs: "home"
      });
  }
  Config.$inject = ["$stateProvider", "$urlRouterProvider"];
  return Config;
});
