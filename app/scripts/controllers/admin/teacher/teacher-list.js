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
      restTeacher.delete({ id: teacherId }, function(){
        $scope.teachers = restTeachers.list();
      });
    };

    // callback for ng-click 'createResource':
    $scope.createNewTeacher = function () {
      $location.path('/admin/teacher');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restTeachers.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/teachers?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.teachers = restTeachers.admin_list({from: from, to: to});
    }
    else {
      $scope.teachers = restTeachers.admin_list({from: 0, to: 10});
    }

  });
