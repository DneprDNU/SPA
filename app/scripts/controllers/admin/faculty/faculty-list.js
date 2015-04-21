'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FacultyAdminListCtrl', function ($scope, $routeParams, $location, restFaculty, restFaculties) {
    // callback for ng-click 'editResource':
    $scope.editFaculty = function (facultyId) {
      $location.path('/admin/faculty/' + facultyId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteFaculty = function (facultyId) {
      restFaculty.delete({ id: facultyId }, function(){
        $scope.faculties = restFaculties.list();
      });
    };

    // callback for ng-click 'createResource':
    $scope.createNewFaculty = function () {
      $location.path('/admin/faculty');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restFaculties.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/faculties?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.faculties = restFaculties.admin_list({from: from, to: to});
    }
    else {
      $scope.faculties = restFaculties.admin_list({from: 0, to: 10});
    }
  });
