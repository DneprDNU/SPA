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
.factory('restAuthentication', function($rootScope, $resource) {
    return $resource('http://5.101.104.13:8080/filestorage/login', {},
      {
        authenticate: {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      }
    );
  });