'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('TeacherAdminListCtrl', function ($scope, $location, restFaculty, restTeachers, restTeacher) {
    // callback for ng-click 'editResource':
    $scope.editTeacher = function (teacherId) {
      $location.path('/admin/teacher/' + teacherId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteTeacher = function (teacherId) {
      restTeacher.delete({ id: teacherId });
      $scope.faculties = restTeachers.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewTeacher = function () {
      $location.path('/admin/teacher');
    };

    $scope.teachers = restTeachers.list({adminMode: 1});
  });
