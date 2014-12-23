'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('TeacherAdminEditCtrl', function ($scope, $location, $routeParams, restTeachers) {
    $scope.save = function() {
      restTeachers.update($scope.teacher);
      $location.path('/admin/teachers');
    };

    $scope.cancel = function () {
      $location.path('/admin/teachers');
    };

    $scope.teacher = restTeachers.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewTeacher = function () {
      $location.path('/admin/teachers');
    };
  });

angular.module('dnuApp')
  .controller('TeacherAdminCreateCtrl', function ($scope, $location, $routeParams, restTeachers) {
    $scope.save = function() {
      restTeachers.create($scope.teacher);
      $location.path('/admin/teachers');
    };

    $scope.cancel = function () {
      $location.path('/admin/teachers');
    };
  });
