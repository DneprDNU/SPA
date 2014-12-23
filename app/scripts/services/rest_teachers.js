'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restTeacherResource', ['ngResource'])
  .factory('restFaculty', function($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/teacher/:id', {},
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
  .factory('restTeachers', function ($resource) {
    return $resource('http://5.101.104.13:8080/filestorage/rest/teacher', {},
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