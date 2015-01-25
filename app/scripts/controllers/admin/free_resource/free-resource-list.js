'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:ResourceAdminCtrl
 * @description
 * # ResourceAdminCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeResourceAdminListCtrl', function ($scope, $location, restFreeResources, restResource) {
    // callback for ng-click 'editResource':
    $scope.editResource = function (freeResourceId) {
      $location.path('/admin/free-resource/' + freeResourceId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteResource = function (freeResourceId) {
      restResource.delete({ id: freeResourceId });
      $scope.freeResources = restFreeResources.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/free-resource');
    };

    $scope.freeResources = restFreeResources.list();
  });
