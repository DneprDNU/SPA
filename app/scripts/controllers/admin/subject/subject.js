'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SubjectAdminListCtrl
 * @description
 * # SubjectAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SubjectAdminEditCtrl', function ($scope, $location, $routeParams, restSubjects) {
    $scope.save = function() {
      restSubjects.update($scope.subject);
      $location.path('/admin/subjects');
    };

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };

    $scope.subject = restSubjects.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewSubject = function () {
      $location.path('/admin/subjects');
    };
  });

angular.module('dnuApp')
  .controller('SubjectAdminCreateCtrl', function ($scope, $location, $routeParams, restSubjects) {
    $scope.save = function() {
      restSubjects.create($scope.subject);
      $location.path('/admin/subjects');
    };

    $scope.cancel = function () {
      $location.path('/admin/subjects');
    };
  });
