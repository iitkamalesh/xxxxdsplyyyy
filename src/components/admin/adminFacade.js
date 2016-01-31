/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["src/service/userService"], function(userService) {
  'use strict';

  function getAllUsersService(){
    return userService.getAllUsersUrlService();
  }

  return {
    getAllUsersService: getAllUsersService
  };
});
