'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SubjectAdminListCtrl
 * @description
 * # SubjectAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SubjectAdminEditCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restSubject, restTeachers, restResources) {
    $scope.save = function() {
      //restSubject.update($scope.subject);
      if (angular.isArray($scope.subject.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.subject.image[0]);
        filesFormDataName.push('image');

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject/' + $scope.subject.id,
          method: 'PUT',
          data: {resource: $scope.subject},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/subjects');
        })
        .error(function (data, status, headers, config) {
          $location.path('/admin/subjects');
        });
      }
      else {
        restSubject.update($scope.subject, function () {
          $location.path('/admin/subjects');
        },
        function () {
          $location.path('/admin/subjects');
        });
      }

    };

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };

    $scope.subject = restSubject.get({id: $routeParams.id});

    $scope.supervisors = restTeachers.list();
    $scope.resources = restResources.list();

    // callback for ng-click 'createResource':
    $scope.createNewSubject = function () {
      $location.path('/admin/subjects');
    };
  });

angular.module('dnuApp')
  .controller('SubjectAdminCreateCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restSubjects, restTeachers, restResources) {

    $scope.save = function() {
      if (angular.isArray($scope.subject.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.subject.image[0]);
        filesFormDataName.push('image');

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/subject/',
          method: 'POST',
          data: {resource: $scope.subject},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/subjects');
        });
      }
      else {
        restSubjects.create($scope.subject, function(){
          $location.path('/admin/subjects');
        });
      }
    };

    $scope.subject = {};
    $scope.resources = restResources.list();
    $scope.supervisors = restTeachers.list();

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };
  });
