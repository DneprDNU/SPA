'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SubjectAdminListCtrl
 * @description
 * # SubjectAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SubjectAdminEditCtrl', function ($scope, $location, $routeParams, restSubject, restTeachers) {
    $scope.save = function() {
      restSubject.update($scope.subject);
      $location.path('/admin/subjects');
    };

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };

    $scope.subject = restSubject.get({id: $routeParams.id});

    $scope.supervisors = restTeachers.list();

    // callback for ng-click 'createResource':
    $scope.createNewSubject = function () {
      $location.path('/admin/subjects');
    };
  });

angular.module('dnuApp')
  .controller('SubjectAdminCreateCtrl', function ($scope, $location, $routeParams, restSubjects, restTeachers) {
    $scope.save = function() {
      restSubjects.create($scope.subject);
      $location.path('/admin/subjects');
    };

    $scope.supervisors = restTeachers.list();

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };
  });
