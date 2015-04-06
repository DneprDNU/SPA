'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:ResourceAdminCtrl
 * @description
 * # ResourceAdminCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminListCtrl', function ($scope, $location, $routeParams, restResources, restResource) {
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

    $scope.pager = {current: 1, items: [], count: 1};
    restResources.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/resources?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.resources = restResources.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.resources = restResources.list({adminMode: 1, from: 0, to: 10});
    }

  });
