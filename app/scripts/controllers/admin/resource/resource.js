'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminEditCtrl', function ($scope, $location, $routeParams, restResource) {
    $scope.save = function() {
      restResource.update($scope.resource);
      $location.path('/admin/resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };

    $scope.resource = restResource.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/resource');
    };
  });

angular.module('dnuApp')
  .controller('ResourceAdminCreateCtrl', function ($scope, $location, $routeParams, restResources) {
    $scope.save = function() {
      restResources.create($scope.faculty);
      $location.path('/admin/resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };
  });
