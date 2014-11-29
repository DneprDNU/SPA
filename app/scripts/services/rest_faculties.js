'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restFaculties', ['ngResource'])
  .factory('restFacultiesList', function($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/faculty', {},
      {
        getFacultiesList: {
          method: 'GET',
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      }
    );
  });