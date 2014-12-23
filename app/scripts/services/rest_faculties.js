'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restFacultyResource', ['ngResource'])
  .factory('restFaculty', function($resource) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/faculty/:id', {},
      {

        get: {
          method: 'GET'
        },
        update: {
          method: 'PUT',
          params: {id: '@id'}
        },
        delete: {
          method: 'DELETE'
        }
      }
    );
  })
  .factory('restFaculties', function ($resource) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/faculty', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        }
      }
    );
  });