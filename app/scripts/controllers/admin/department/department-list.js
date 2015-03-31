'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:DepartmentAdminListCtrl
 * @description
 * # DepartmentAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('DepartmentAdminListCtrl', function ($scope, $location, $routeParams, restFaculty, restDepartments, restDepartment) {
    // callback for ng-click 'editResource':
    $scope.editDepartment = function (departmentId) {
      $location.path('/admin/department/' + departmentId);
    };
    console.log($routeParams);
    // callback for ng-click 'deleteResource':
    $scope.deleteDepartment = function (departmentId) {
      restDepartment.delete({ id: departmentId });
      $scope.departments = restDepartments.list({adminMode: 1});
    };

    // callback for ng-click 'createResource':
    $scope.createNewDepartment = function () {
      $location.path('/admin/departments');
    };
    $scope.pager = {current: 1, items: [], count: 1};
    restDepartments.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 1; $scope.pager.count/10 >= i; i++) {
        $scope.pager.items.push({
          active: i == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: i,
          url: '#/admin/departments?page=' + i
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.departments = restDepartments.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.departments = restDepartments.list({adminMode: 1, from: 0, to: 10});
    }
  });
