'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:ResourceAdminCtrl
 * @description
 * # ResourceAdminCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminListCtrl', function ($scope, $location, restResources, restResource) {
    // callback for ng-click 'editResource':
    $scope.editResource = function (resourceId) {
      $location.path('/admin/resource/' + resourceId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteResource = function (resourceId) {
      restResource.delete({ id: resourceId });
      $scope.resources = restResources.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/resource');
    };

    $scope.resources = restResources.list({adminMode: 1});
  });
