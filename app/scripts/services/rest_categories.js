'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restCategoryResource', ['ngResource'])
  .factory('restCategory', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category/:id', {},
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
  .factory('restCategories', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category/count',
          method: 'GET'
        }
      }
    );
  })
  .factory('restFreeCategory', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/freeCategory/:id', {},
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
  .factory('restFreeCategories', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/freeCategory', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/freeCategory/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/freeCategory/count',
          method: 'GET'
        }
      }
    );
  });