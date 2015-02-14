'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoryAdminListCtrl', function ($scope, $location, restFaculty, restCategories) {
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

    $scope.categories = restCategories.list({adminMode: 1});
  });
