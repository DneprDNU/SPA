"use strict"

angular.module('dnuApp')
  .controller('AdminMenuCtrl', function ($scope, $rootScope, $location, restAuthentication) {

    restAuthentication.get(function(user) {
      $rootScope.user = user;
      if (!$rootScope.hasRole('ROLE_ADMIN') && !$rootScope.hasRole('ROLE_SUPERADMIN')) {
        $location.path('/login');
      }
      $scope.isSuperAdmin = $rootScope.hasRole('ROLE_SUPERADMIN');
      $scope.isAdmin = $rootScope.hasRole('ROLE_ADMIN') || $rootScope.hasRole('ROLE_SUPERADMIN');
    });

  });
