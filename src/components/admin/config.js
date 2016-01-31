/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["src/components/admin/adminController"], function(adminController) {
  'use strict';
  function Config($stateProvider){

    $stateProvider
      .state('admin', {
        url: "/admin",
        templateUrl: "src/components/admin/_admin.html",
        controller: "adminController",
        controllerAs: "admin"
      });
  }
  Config.$inject = ["$stateProvider"];
  return Config;
});
