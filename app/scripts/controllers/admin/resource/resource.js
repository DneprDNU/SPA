'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminEditCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restResource, restCategories, restSubjects) {
    $scope.save = function() {
      if ($scope.resource.image[0] !== undefined) {
        var imageFile = $scope.resource.image[0];
        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id,
          method: 'PUT',
          data: {resource: $scope.resource},
          file: imageFile
        });
      }

      if ($scope.resource.file[0] !== undefined) {
        var resourceFile = $scope.resource.file[0];
        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/' + $routeParams.id,
          method: 'PUT',
          data: {resource: $scope.resource},
          file: resourceFile
        });
      }

      $location.path('/admin/resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };

    $scope.resource = restResource.get({id: $routeParams.id});

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    // callback for ng-click 'createResource':
    $scope.createNewResource = function () {
      $location.path('/admin/resource');
    };
  });

angular.module('dnuApp')
  .controller('ResourceAdminCreateCtrl', function ($scope, $rootScope, $location, $routeParams, $upload, restResources, restCategories, restSubjects) {
    $scope.save = function() {
      if ($scope.resource.image[0] !== undefined || $scope.resource.file[0] !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.resource.image[0] !== undefined) {
          files.push($scope.resource.image[0]);
          filesFormDataName.push('image');
        }
        if ($scope.resource.file[0] !== undefined) {
          files.push($scope.resource.file[0]);
          filesFormDataName.push('file');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/resource/',
          method: 'POST',
          data: {resource: $scope.resource},
          file: files,
          fileFormDataName: ['image', 'file']
        });
      }
      else {
        restResources.create($scope.resource);
      }

      $location.path('/admin/resources');
    };

    $scope.categories = restCategories.list();
    $scope.subjects = restSubjects.list();

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };
  });
