define(["src/components/home/homeFacade", "lodash"], function (homeFacade, _) {
  'use strict';
  function HomeController($state, $scope) {
    var controller = this;
    //controller.isLoggedIn = true;
    controller.initRegister = function () {
      controller.errorMsg = null;

      if(!hasErrors()){
        homeFacade.getRegisterService(controller.userName, controller.password, controller.firstName, controller.lastName,
          controller.mobileNumber, controller.emailId).then(function(response){
            console.log("Response from controller");
            console.log(response);
            if(!_.isUndefined(response) && response != null && JSON.parse(response).userId != null)
              $state.go("products");
            else
              controller.errorMsg = "Error occurred while registration";
            $scope.$apply();
          }, function(error){
            console.log("Response from controller");
            console.log(error);
            $scope.$apply();
          });
      }
    };

    function hasErrors(){
      if(_.isUndefined(controller.userName) || controller.userName == null || _.isEmpty(controller.userName) || controller.userName.length < 4){
        controller.errorMsg = "Username should be of at least 4 characters";
        return true;
      }

      if(_.isUndefined(controller.password) || !_.isEqual(controller.password, controller.confirmPassword)){
        if(_.isUndefined(controller.password)){
          controller.errorMsg = "Please choose a password";
        }else{
          controller.errorMsg = "Password mismatch";
        }
        return true;
      }

      if(_.isUndefined(controller.firstName) || controller.firstName == null || _.isEmpty(controller.firstName)){
        controller.errorMsg = "Please enter first name";
        return true;
      }

      return false;
    }
    controller.login = function () {
      homeFacade.getLoginService(controller.userName, controller.password).then(function(response){
          $state.go("products");
      },
      function(error){
        controller.errorMsg = "Error while logging in";
      }
      )
    }
  }

  HomeController.$inject = ["$state", "$scope"];
  return HomeController;
});
