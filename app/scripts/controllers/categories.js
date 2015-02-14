'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoriesListCtrl', function ($scope, $routeParams, restResources, restCategories) {
    $scope.categories = restCategories.list();
    $scope.categoryResourcesAmount = [];

    $scope.categoriesWithContent = [];

    angular.forEach($scope.categories, function (category, id) {
      $scope.categoriesWithContent[id] = category;
    });

    $scope.filterCategories = function(category) {
      return category.resourceCount > 0;
    };
  });
