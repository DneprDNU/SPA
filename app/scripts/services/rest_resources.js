'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restResourceResource', ['ngResource'])
  .factory('restResource', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/:id', {},
      {
        get: {
          method: 'GET'
        },
        update: {
          method: 'PUT',
          params: {id: '@id'},
          headers: {
            'Content-Type': undefined
          }
        },
        delete: {
          method: 'DELETE'
        }
      }
    );
  })
  .factory('restResources', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/count',
          method: 'GET'
        }
      }
    );
  });