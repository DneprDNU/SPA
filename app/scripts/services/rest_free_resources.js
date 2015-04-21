'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restFreeResourceResource', ['ngResource'])
  .factory('restFreeResource', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/free_resource/:id', {},
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
  .factory('restFreeResources', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/free_resource', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/free_resource/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/free_resource/count',
          method: 'GET'
        }
      }
    );
  });