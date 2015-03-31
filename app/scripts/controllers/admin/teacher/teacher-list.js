'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('TeacherAdminListCtrl', function ($scope, $location, restFaculty, restTeachers, restTeacher, $routeParams) {
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

    $scope.pager = {current: 1, items: [], count: 1};
    restTeachers.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 1; $scope.pager.count/10 >= i; i++) {
        $scope.pager.items.push({
          active: i == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: i,
          url: '#/admin/teachers?page=' + i
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.teachers = restTeachers.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.teachers = restTeachers.list({adminMode: 1, from: 0, to: 10});
    }

  });
