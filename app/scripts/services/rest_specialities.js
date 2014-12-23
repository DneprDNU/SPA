'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restSpecialityResource', ['ngResource'])
  .factory('restFaculty', function($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/speciality/:id', {},
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
  .factory('restSpecialities', function ($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/speciality', {},
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