'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:LinkAdminListCtrl
 * @description
 * # LinkAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('LinkAdminListCtrl', function ($scope, $location, $routeParams, restFaculty, restLinks) {
    // callback for ng-click 'editResource':
    $scope.editLink = function (linkId) {
      $location.path('/admin/link/' + linkId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteLink = function (linkId) {
      restLinks.delete({ id: linkId });
      $scope.faculties = restLinks.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewLink = function () {
      $location.path('/admin/link');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restLinks.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/links?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.links = restLinks.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.links = restLinks.list({adminMode: 1, from: 0, to: 10});
    }
  });
