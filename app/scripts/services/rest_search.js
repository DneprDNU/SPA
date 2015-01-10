'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restSearchResource', ['ngResource'])
  .factory('restSearch', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/search', {},
      {
        search: {
          method: 'GET',
          params: {
            searchKey: '@search'
          },
          isArray: true
        }
      }
    );
  });