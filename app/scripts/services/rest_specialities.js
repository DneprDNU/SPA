'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restSpecialityResource', ['ngResource'])
  .factory('restSpeciality', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/speciality/:id', {},
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
  .factory('restSpecialities', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/speciality', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/speciality/count',
          method: 'GET'
        }
      }
    );
  });