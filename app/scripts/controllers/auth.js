'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('AuthCtrl', function ($scope, $rootScope, $location, $cookieStore, restAuthentication) {
    $scope.rememberMe = false;
    $scope.login = function() {
      restAuthentication.authenticate($.param({username: $scope.username, password: $scope.password}), function(authenticationResult) {
        var authToken = authenticationResult.token;
        $rootScope.authToken = authToken;
        if (authToken !== undefined) {
          $cookieStore.put('authToken', authToken);
          $rootScope.loggedIn = false;
        }
        restAuthentication.get(function(user) {
          $rootScope.user = user;
          $location.path("/");
        });
      });
    };
  });
