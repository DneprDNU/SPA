'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restAuth', ['ngResource'])
.factory('restAuthentication', function($resource) {
    return $resource('http://5.101.104.13:8080/login', {},
      {
        authenticate: {
          method: 'POST',
          params: {
            'username' : 'admin',
            'password' : 'password'
          },
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        },
        get: {
          method: 'GET'
        }
      }
    );
  });