'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:UserAdminListCtrl
 * @description
 * # UserAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('UserAdminListCtrl', function ($scope, $location, restFaculty, restUsers) {
    // callback for ng-click 'editResource':
    $scope.editUser = function (userId) {
      $location.path('/admin/user/' + userId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteUser = function (userId) {
      restUsers.delete({ id: userId });
      $scope.faculties = restUsers.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewUser = function () {
      $location.path('/admin/user');
    };

    $scope.users = restUsers.list({adminMode: 1});
  });
