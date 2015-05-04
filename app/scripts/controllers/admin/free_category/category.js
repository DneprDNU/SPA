'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeCategoryAdminEditCtrl', function ($scope, $location, $routeParams, restFreeCategory) {
    $scope.save = function() {
      restFreeCategory.update($scope.category, function(){
        $location.path('/admin/free-categories');
      });
    };

    $scope.cancel = function () {
      $location.path('/admin/free-categories');
    };

    $scope.category = restFreeCategory.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/free-categories');
    };
  });

angular.module('dnuApp')
  .controller('FreeCategoryAdminCreateCtrl', function ($scope, $location, $routeParams, restFreeCategories) {
    $scope.save = function() {
      restFreeCategories.create($scope.category, function(){
        $location.path('/admin/free-categories');
      });
    };

    $scope.cancel = function () {
      $location.path('/admin/free-categories');
    };
  });
