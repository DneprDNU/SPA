"use strict"

angular.module('dnuApp')
  .controller('AdminMenuCtrl', function ($scope, $rootScope, $location) {
    if (!$rootScope.hasRole('ROLE_ADMIN') && !$rootScope.hasRole('ROLE_SUPERADMIN')) {
      $location.path('/login');
    }

    $scope.isSuperAdmin = $rootScope.hasRole('ROLE_SUPERADMIN');
  });