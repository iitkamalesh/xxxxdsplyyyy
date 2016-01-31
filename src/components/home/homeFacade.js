define(["src/service/userService"], function(userService) {
  'use strict';
  function getRegisterService(userName, password, firstName, lastName, mobile, email){
    return userService.getRegisterUrlService(userName, password, firstName, lastName, mobile, email);
  }

  function getLoginService(userName, password){
    return userService.getLoginUrlService(userName, password);
  }

  return {
    getRegisterService: getRegisterService,
    getLoginService: getLoginService
  };
});
