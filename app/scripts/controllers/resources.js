'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $routeParams, restSearch, restResources) {
    if ($routeParams.search !== undefined) {
      $scope.resources = restSearch.search({searchKey: $routeParams.search});
    }
    else if ($routeParams.categoryId !== undefined) {
      $scope.resources = restResources.list({categoryId: $routeParams.categoryId});
    }
    else {
      $scope.resources = restResources.list();
    }
  });

angular.module('dnuApp')
  .controller('LastResourcesCtrl', function ($scope, restResources) {
    $scope.resources = restResources.list();
  });

angular.module('dnuApp')
  .controller('ResourceCtrl', function ($scope, $rootScope, $routeParams, restResource ) {
    $scope.isLoggedIn = $rootScope.isLoggedIn;
    $scope.resource = restResource.get({id: $routeParams.id});
  });

