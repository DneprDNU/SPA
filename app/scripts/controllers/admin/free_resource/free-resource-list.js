'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:ResourceAdminCtrl
 * @description
 * # ResourceAdminCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeResourceAdminListCtrl', function ($scope, $location, restFreeResources, restFreeResource, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editResource = function (freeResourceId) {
      $location.path('/admin/free-resource/' + freeResourceId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteResource = function (freeResourceId) {
      restFreeResource.delete({ id: freeResourceId }, function(){
        $scope.freeResources = restFreeResources.list();
      });
    };

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/free-resource');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restFreeResources.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/free-resources?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.freeResources = restFreeResources.admin_list({from: from, to: to});
    }
    else {
      $scope.freeResources = restFreeResources.admin_list({from: 0, to: 10});
    }
  });
