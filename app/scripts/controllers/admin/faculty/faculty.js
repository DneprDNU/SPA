'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FacultyAdminEditCtrl', function ($scope, $location, $routeParams, restFaculty, restDepartments) {
    $scope.save = function() {
      console.log($scope.faculty);
      restFaculty.update($scope.faculty);
      $location.path('/admin/faculties');
    };

    $scope.cancel = function () {
      $location.path('/admin/faculties');
    };

    $scope.faculty = restFaculty.get({id: $routeParams.id});
    $scope.departments = restDepartments.list();

    console.log($scope);
    // callback for ng-click 'createResource':
    $scope.createNewFaculty = function () {
      $location.path('/admin/faculty');
    };
  });

angular.module('dnuApp')
  .controller('FacultyAdminCreateCtrl', function ($scope, $location, $routeParams, restFaculties, restDepartments) {
    $scope.save = function() {
      console.log($scope.faculty);
      restFaculties.create($scope.faculty);
      $location.path('/admin/faculties');
    };
    $scope.departments = restDepartments.list();

    $scope.cancel = function () {
      $location.path('/admin/faculties');
    };
  });
