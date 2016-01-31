/**
 * Created by Kamalesh on 30-01-2016.
 */
define(["jquery"], function(jquery) {
  'use strict';
  var baseUrl = "http://localhost:8081/dspl-webapp/rest";


  function getRegister(userName, password, firstName, lastName, mobile, email){
    var deferred = jquery.Deferred();
    var user = {
      "userName": userName,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "emailId": email,
      "mobileNumber": mobile
    };
    jquery.ajax({
      method: "PUT",
      contentType: "application/json",
      url: baseUrl+'/user/add/'+ JSON.stringify(user)
    }).then(function(response){
      deferred.resolve(response);
    }, function(response){
      deferred.reject(response);
    });

    return deferred.promise();
  }

  function getLogin(userName, password){
    var deferred = jquery.Deferred();
    jQuery.ajax({
      method: "GET",
      url: baseUrl + "/login?userName="+ userName + "&password="+ password
    }).then(function(response){
      deferred.resolve(response);
    }, function(error){
      deferred.reject(error);
    });
    return deferred.promise();
  }

  function getAllUsers(){
    var deferred = jquery.Deferred();
    jQuery.ajax({
      method: "GET",
      url: baseUrl + "/user"
    }).then(function(response){
        deferred.resolve(response);
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise();
  }

  return {
    getRegister: getRegister,
    getLogin: getLogin,
    getAllUsers: getAllUsers
  };
});
