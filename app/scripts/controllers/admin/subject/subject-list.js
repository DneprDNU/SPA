'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SubjectAdminListCtrl
 * @description
 * # SubjectAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SubjectAdminListCtrl', function ($scope, $location, restFaculty, restSubjects) {
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

    $scope.subjects = restSubjects.list({adminMode: 1});
  });
