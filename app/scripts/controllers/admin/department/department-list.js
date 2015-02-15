'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminListCtrl', function ($scope, $location, restFaculty, restDepartments, restDepartment) {
    // callback for ng-click 'editResource':
    $scope.editDepartment = function (departmentId) {
      $location.path('/admin/department/' + departmentId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteDepartment = function (departmentId) {
      restDepartment.delete({ id: departmentId });
      $scope.departments = restDepartments.list({adminMode: 1});
    };

    // callback for ng-click 'createResource':
    $scope.createNewDepartment = function () {
      $location.path('/admin/departments');
    };

    $scope.departments = restDepartments.list({adminMode: 1});
  });
