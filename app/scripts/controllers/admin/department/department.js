'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminEditCtrl', function ($scope, $location, $routeParams, restDepartments) {
    $scope.save = function() {
      restDepartments.update($scope.department);
      $location.path('/admin/departments');
    };

    $scope.cancel = function () {
      $location.path('/admin/departments');
    };

    $scope.department = restDepartments.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewDepartment = function () {
      $location.path('/admin/departments');
    };
  });

angular.module('dnuApp')
  .controller('DepartmentAdminCreateCtrl', function ($scope, $location, $routeParams, restDepartments) {
    $scope.save = function() {
      restDepartments.create($scope.department);
      $location.path('/admin/departments');
    };

    $scope.cancel = function () {
      $location.path('/admin/departments');
    };
  });
