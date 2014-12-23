'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restDepartmentResource', ['ngResource'])
  .factory('restFaculty', function($resource) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/department/:id', {},
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
  .factory('restDepartments', function ($resource) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/department', {},
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