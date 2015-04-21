'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoryAdminListCtrl', function ($scope, $location, restFaculty, restCategories, restCategory, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editCategory = function (categoryId) {
      $location.path('/admin/category/' + categoryId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteCategory = function (categoryId) {
      restCategory.delete({ id: categoryId }, function(){
        $scope.categories = restCategories.list();
      },
        function(){
          $scope.categories = restCategories.list();
        });
    };

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/category');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restCategories.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/categories?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.categories = restCategories.admin_list({from: from, to: to});
    }
    else {
      $scope.categories = restCategories.admin_list({from: 0, to: 10});
    }
  });
