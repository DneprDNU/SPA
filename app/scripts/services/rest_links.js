'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restLinkResource', ['ngResource'])
  .factory('restLink', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/links/:id', {},
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
  .factory('restLinks', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/links', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/links/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/links/count',
          method: 'GET'
        }
      }
    );
  });