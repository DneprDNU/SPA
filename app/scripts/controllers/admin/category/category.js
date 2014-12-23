'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoryAdminEditCtrl', function ($scope, $location, $routeParams, restCategories) {
    $scope.save = function() {
      restCategories.update($scope.category);
      $location.path('/admin/categories');
    };

    $scope.cancel = function () {
      $location.path('/admin/categories');
    };

    $scope.category = restCategories.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/categories');
    };
  });

angular.module('dnuApp')
  .controller('CategoryAdminCreateCtrl', function ($scope, $location, $routeParams, restCategories) {
    $scope.save = function() {
      restCategories.create($scope.category);
      $location.path('/admin/categories');
    };

    $scope.cancel = function () {
      $location.path('/admin/categories');
    };
  });
