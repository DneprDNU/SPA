'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('UserAdminEditCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restUser) {
    $scope.save = function() {
      restTeachers.update($scope.user);
      $location.path('/admin/users');
    };

    $scope.cancel = function () {
      $location.path('/admin/users');
    };

    $scope.user = restUser.get({id: $routeParams.id});

    $scope.createNewUser = function () {
      $location.path('/admin/users');
    };
  });

angular.module('dnuApp')
  .controller('UserAdminCreateCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restUsers) {
    $scope.save = function() {
      restUsers.create($scope.user);
      $location.path('/admin/users');
    };

    $scope.cancel = function () {
      $location.path('/admin/users');
    };
  });
