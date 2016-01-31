/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["src/components/admin/adminController", "src/components/admin/config"], function (AdminController, config) {
  'use strict';
  var adminModule = angular.module("dsplApp.adminModule", []);
  adminModule.controller("adminController", AdminController);
  adminModule.config(config);
});
