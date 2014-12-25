'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminEditCtrl', function ($scope, $location, $routeParams, restDepartment, restSpecialities, restTeachers) {
    $scope.save = function() {
      restDepartment.update($scope.department);
      $location.path('/admin/departments');
    };

    $scope.cancel = function () {
      $location.path('/admin/departments');
    };

    $scope.department = restDepartment.get({id: $routeParams.id});

    $scope.specialities = restSpecialities.list();
    $scope.employees = restTeachers.list();

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
