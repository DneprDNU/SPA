"use strict"

angular.module('dnuApp')
  .controller('MainMenuCtrl', function ($scope, $rootScope, $cookieStore, Session, AuthService) {
    console.log($rootScope.isAdmin);
    $scope.isAdmin = $rootScope.isAdmin;
    $scope.loggedIn = $rootScope.isLoggedIn;
    $scope.logout = function() {
      Session.destroy();
      AuthService.reInit();
      $cookieStore.remove('authToken');
    };
    console.log($scope);
  });