'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restSubjectResource', ['ngResource'])
  .factory('restFaculty', function($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/subject/:id', {},
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
  .factory('restSubjects', function ($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/subject', {},
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