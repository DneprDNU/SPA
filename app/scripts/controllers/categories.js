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

    angular.forEach($scope.categories, function (category, id) {
      console.log(category);
      console.log(id);
      $scope.categoryResourcesAmount[category.id] = restResources.list({categoryId: category.id});
    });

    console.log($scope);
  });
