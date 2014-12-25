'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultyAdminListCtrl
 * @description
 * # FacultyAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('ResourceAdminEditCtrl', function ($scope, $rootScope, $location, $routeParams, restResource, restCategories, restSubjects) {
    $scope.save = function() {
      restResource.update($scope.resource);
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

    //$scope.$watch('resourceFile', function() {
    //  var file = $scope.resourceFile;
    //  $scope.upload = $upload.upload({
    //    url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/',
    //    data: {resource: $scope.resource},
    //    file: file
    //  }).progress(function (evt) {
    //    console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :' + evt.config.file.name);
    //  }).success(function (data, status, headers, config) {
    //    // file is uploaded successfully
    //    console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
    //  });
    //});
  });

angular.module('dnuApp')
  .controller('ResourceAdminCreateCtrl', function ($scope, $location, $routeParams, restResources) {
    $scope.save = function() {
      restResources.create($scope.resource);
      $location.path('/admin/resources');
    };

    $scope.cancel = function () {
      $location.path('/admin/resources');
    };
  });
