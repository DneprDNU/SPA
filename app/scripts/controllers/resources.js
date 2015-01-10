'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourcesCtrl', function ($scope, restResources) {
    $scope.resources = restResources.list();
  });

angular.module('dnuApp')
  .controller('LastResourcesCtrl', function ($scope, restResources) {
    $scope.resources = restResources.list();
    console.log($scope);
  });

angular.module('dnuApp')
  .controller('ResourceCtrl', function ($scope, $routeParams, restResource) {
    $scope.resource = restResource.get({id: $routeParams.id});
  });

