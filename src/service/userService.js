/**
 * Created by Praveen on 30-01-2016.
 */
define(["src/urlService/urlService"], function(urlService) {
  'use strict';
  function getRegisterUrlService(userName, password, firstName, lastName, mobile, email){
    return urlService.getRegister(userName, password, firstName, lastName, mobile, email);
  }

  function getLoginUrlService(userName, password){
    return urlService.getLogin(userName, password);
  }

  function getAllUsersUrlService(){
    return urlService.getAllUsers();
  }

  return {
    getRegisterUrlService: getRegisterUrlService,
    getLoginUrlService: getLoginUrlService,
    getAllUsersUrlService: getAllUsersUrlService

  };
});
