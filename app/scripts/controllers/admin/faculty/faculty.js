'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FacultyAdminEditCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restFaculty, restDepartments) {
    $scope.save = function() {
      // restFaculty.update($scope.faculty);
      if ($scope.faculty.image !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.faculty.image[0] !== undefined) {
          files.push($scope.faculty.image[0]);
          filesFormDataName.push('image');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/faculty/'+ $scope.faculty.id,
          method: 'PUT',
          data: {resource: $scope.faculty},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/faculties');
        });
      }
      else {
        restFaculties.create($scope.faculty, function(){
          $location.path('/admin/faculties');
        });
      }

    };

    $scope.cancel = function () {
      $location.path('/admin/faculties');
    };

    $scope.faculty = restFaculty.get({id: $routeParams.id});
    $scope.departments = restDepartments.list();

    // callback for ng-click 'createResource':
    $scope.createNewFaculty = function () {
      $location.path('/admin/faculty');
    };
  });

angular.module('dnuApp')
  .controller('FacultyAdminCreateCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restFaculties, restDepartments) {
    $scope.save = function() {
      //restFaculties.create($scope.faculty);
      if ($scope.faculty.image !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.faculty.image[0] !== undefined) {
          files.push($scope.faculty.image[0]);
          filesFormDataName.push('image');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/faculty/',
          method: 'POST',
          data: {resource: $scope.faculty},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/faculties');
        });
      }
      else {
        restFaculties.create($scope.faculty, function(){
          $location.path('/admin/faculties');
        });
      }
    };
    $scope.departments = restDepartments.list();

    $scope.cancel = function () {
      $location.path('/admin/faculties');
    };
  });
