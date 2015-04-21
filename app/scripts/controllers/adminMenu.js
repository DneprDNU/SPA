"use strict"

angular.module('dnuApp')
  .controller('AdminMenuCtrl', function ($scope, $rootScope, $location, restAuthentication, AuthService) {

    restAuthentication.get(function(user) {
      if (!AuthService.isAdmin()) {
        $location.path('/auth');
      }
      $scope.isSuper = AuthService.isSuper();
      $scope.isEditor = AuthService.isEditor();
    });

  });
