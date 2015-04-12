'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminEditCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restDepartment, restSpecialities, restTeachers) {
    $scope.save = function() {
      //restDepartment.update($scope.department);
      if ($scope.department.image !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.department.image[0] !== undefined) {
          files.push($scope.department.image[0]);
          filesFormDataName.push('image');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/department/' + $scope.department.id,
          method: 'PUT',
          data: {resource: $scope.department},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/departments');
        }).error(function (data, status, headers, config) {
            $location.path('/admin/departments');
          });
      }
      else {
        restDepartment.create($scope.department, function(){
          $location.path('/admin/departments');
        },
          function(){
            $location.path('/admin/departments');
          });
      }
    };

    $scope.cancel = function () {
      $location.path('/admin/departments');
    };

    $scope.department = restDepartment.get({id: $routeParams.id});
    console.log($scope.department);

    $scope.specialitiess = restSpecialities.list();
    $scope.employeess = restTeachers.list();
    console.log($scope);
    // callback for ng-click 'createResource':
    $scope.createNewDepartment = function () {
      $location.path('/admin/departments');
    };
  });

angular.module('dnuApp')
  .controller('DepartmentAdminCreateCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restDepartments, restSpecialities, restTeachers) {
    $scope.save = function() {

      //restDepartments.create($scope.department);
      if ($scope.department.image !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.department.image[0] !== undefined) {
          files.push($scope.department.image[0]);
          filesFormDataName.push('image');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/department/',
          method: 'POST',
          data: {resource: $scope.department},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/departments');
        })
          .error(function (data, status, headers, config) {
            $location.path('/admin/departments');
          });
      }
      else {
        restDepartments.create($scope.department, function(){
          $location.path('/admin/departments');
        },
          function(){
            $location.path('/admin/departments');
          });
      }
    };

    $scope.department = {};

    $scope.specialitiess = restSpecialities.list();
    $scope.employeess = restTeachers.list();

    $scope.cancel = function () {
      $location.path('/admin/departments');
    };
  });
