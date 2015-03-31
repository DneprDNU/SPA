'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SubjectAdminListCtrl
 * @description
 * # SubjectAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SubjectAdminListCtrl', function ($scope, $location, restFaculty, restSubjects, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editSubject = function (subjectId) {
      $location.path('/admin/subject/' + subjectId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteSubject = function (subjectId) {
      restSubjects.delete({ id: subjectId });
      $scope.faculties = restSubjects.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewSubject = function () {
      $location.path('/admin/subject');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restSubjects.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 1; $scope.pager.count/10 >= i; i++) {
        $scope.pager.items.push({
          active: i == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: i,
          url: '#/admin/subjects?page=' + i
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.subjects = restSubjects.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.subjects = restSubjects.list({adminMode: 1, from: 0, to: 10});
    }

  });
