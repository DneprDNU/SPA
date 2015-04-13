'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('FreeResourceAdminEditCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restFreeResource, restCategories, restSubjects) {
    $scope.save = function() {
      restFreeResource.update($scope.freeResource);

      $location.path('/admin/free-resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/free-resources');
    };

    $scope.freeResource = restFreeResource.get({id: $routeParams.id});

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/free-resource');
    };
  });

angular.module('dnuApp')
  .controller('FreeResourceAdminCreateCtrl', function ($scope, $location, $routeParams, restFreeResources, restCategories, restSubjects) {
    $scope.save = function() {
      restFreeResources.create($scope.freeResource, function(){
        $location.path('/admin/free-resources');
      });

    };

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    $scope.cancel = function () {
      $location.path('/admin/free-resources');
    };
  });
