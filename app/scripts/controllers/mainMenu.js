"use strict"

angular.module('dnuApp')
  .controller('MainMenuCtrl', function ($scope, $rootScope) {
    $scope.isAdmin = $rootScope.hasRole('ROLE_ADMIN') || $rootScope.hasRole('ROLE_SUPERADMIN');
    $scope.loggedIn = $rootScope.user !== undefined;
  });