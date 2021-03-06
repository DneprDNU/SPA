'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 */
angular.module('restSubjectResource', ['ngResource'])
  .factory('restSubject', function($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject/:id', {},
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
  .factory('restSubjects', function ($resource, $rootScope) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject', {},
      {
        list: {
          method: 'GET',
          isArray: true
        },
        admin_list: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject/filtered',
          method: 'GET',
          isArray: true
        },
        create: {
          method: 'POST'
        },
        count: {
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject/count',
          method: 'GET'
        }
      }
    );
  });