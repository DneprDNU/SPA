'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FacultyAdminListCtrl', function ($scope, $location, restFaculty, restFaculties) {
    // callback for ng-click 'editResource':
    $scope.editFaculty = function (facultyId) {
      $location.path('/admin/faculty/' + facultyId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteFaculty = function (facultyId) {
      restFaculty.delete({ id: facultyId });
      $scope.faculties = restFaculties.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewFaculty = function () {
      $location.path('/admin/faculty');
    };

    $scope.faculties = restFaculties.list({adminMode: 1});
  });
