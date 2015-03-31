'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoryAdminListCtrl', function ($scope, $location, restFaculty, restCategories, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editCategory = function (categoryId) {
      $location.path('/admin/category/' + categoryId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteCategory = function (categoryId) {
      restCategories.delete({ id: categoryId });
      $scope.faculties = restCategories.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/category');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restCategories.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 1; $scope.pager.count/10 >= i; i++) {
        $scope.pager.items.push({
          active: i == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: i,
          url: '#/admin/categories?page=' + i
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.categories = restCategories.list({adminMode: 1, from: from, to: to});
    }
    else {
      $scope.categories = restCategories.list({adminMode: 1, from: 0, to: 10});
    }
  });
