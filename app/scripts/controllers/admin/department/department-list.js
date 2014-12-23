'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminListCtrl', function ($scope, $location, restFaculty, restDepartments) {
    // callback for ng-click 'editResource':
    $scope.editDepartment = function (departmentId) {
      $location.path('/admin/department/' + departmentId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteDepartment = function (departmentId) {
      restDepartments.delete({ id: departmentId });
      $scope.faculties = restDepartments.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewDepartment = function () {
      $location.path('/admin/department');
    };

    $scope.departments = restDepartments.list();
  });
