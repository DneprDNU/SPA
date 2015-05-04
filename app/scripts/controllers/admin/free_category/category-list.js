'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeCategoryAdminListCtrl', function ($scope, $location, restFaculty, restFreeCategories, restFreeCategory, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editCategory = function (categoryId) {
      $location.path('/admin/free-category/' + categoryId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteCategory = function (categoryId) {
      restFreeCategory.delete({ id: categoryId }, function(){
        $scope.categories = restFreeCategories.list();
      },
      function(){
        $scope.categories = restFreeCategories.list();
      });
    };

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/free-category');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restFreeCategories.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/free-categories?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.categories = restFreeCategories.admin_list({from: from, to: to});
    }
    else {
      $scope.categories = restFreeCategories.admin_list({from: 0, to: 10});
    }
  });
