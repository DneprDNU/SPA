'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeResourcesCtrl', function ($scope, $routeParams, restSearch, restFreeResources) {
    if ($routeParams.search !== undefined) {
      $scope.freeResources = restSearch.search({searchKey: $routeParams.search});
    }
    else {
      $scope.freeResources = restFreeResources.list();
    }
    console.log($scope);
  });

angular.module('dnuApp')
  .controller('FreeLastResourcesCtrl', function ($scope, restResources) {
    $scope.resources = restResources.list();
    console.log($scope);
  });

angular.module('dnuApp')
  .controller('FreeResourceCtrl', function ($scope, $routeParams, restFreeResource) {
    $scope.freeResource = restFreeResource.get({id: $routeParams.id});
  });

