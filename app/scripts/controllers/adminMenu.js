angular.module('dnuApp')
  .controller('AdminMenuCtrl', function ($scope, $rootScope, $location) {
    console.log($rootScope.user);
    if (!$rootScope.hasRole('ROLE_ADMIN')) {
      $location.path('/login');
    }
  });