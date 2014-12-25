"use strict"

angular.module('dnuApp')
  .controller('AdminMenuCtrl', function ($scope, $rootScope, $location) {
    if (!$rootScope.hasRole('ROLE_ADMIN')) {
      $location.path('/login');
    }
  });