'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:CategoryAdminListCtrl
 * @description
 * # CategoryAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('CategoryAdminEditCtrl', function ($scope, $location, $routeParams, restCategory) {
    $scope.save = function() {
      if (angular.isArray($scope.category.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.category.image[0]);
        filesFormDataName.push('image');
        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category/'+ $scope.category.id,
          method: 'PUT',
          data: {resource: $scope.category},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/categories');
        })
        .error(function (data, status, headers, config) {
          $location.path('/admin/categories');
        });
      }
      else {
        restCategory.update($scope.category, function(){
          $location.path('/admin/categories');
        }, function(){
          $location.path('/admin/categories');
        });
      }
    };

    $scope.cancel = function () {
      $location.path('/admin/categories');
    };

    $scope.category = restCategory.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewCategory = function () {
      $location.path('/admin/categories');
    };
  });

angular.module('dnuApp')
  .controller('CategoryAdminCreateCtrl', function ($scope, $location, $routeParams, restCategories) {
    $scope.save = function() {
      if (angular.isArray($scope.category.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.category.image[0]);
        filesFormDataName.push('image');

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/category/',
          method: 'POST',
          data: {resource: $scope.category},
          file: files,
          fileFormDataName: ['image']
        }).success(function () {
          $location.path('/admin/categories');
        });
      }
      else {
        restCategories.create($scope.category, function(){
          $location.path('/admin/categories');
        });
      }
    };

    $scope.cancel = function () {
      $location.path('/admin/categories');
    };
  });
