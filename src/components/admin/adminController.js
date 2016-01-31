/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["src/components/admin/adminFacade"], function (adminFacade) {
  'use strict';
  function AdminController($scope) {
    var controller = this;
    controller.init = function () {
      adminFacade.getAllUsersService().then(function (response) {
          controller.users = JSON.parse(response);
          console.log(controller.users);
          $scope.$apply();
        },
        function (error) {
          controller.errorMsg = "Error occurred while fetching users!";
          console.log(error);
        }
      );
    };

    controller.init();
  }

  AdminController.$inject = ["$scope"];
  return AdminController;
});
