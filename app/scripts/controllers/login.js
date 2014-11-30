'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, $cookieStore, restAuthentication) {
    $scope.rememberMe = false;

    $scope.login = function() {
      restAuthentication.authenticate($.param({username: $scope.username, password: $scope.password}), function(authenticationResult) {
        var authToken = authenticationResult.token;
        console.log(authenticationResult);
        $rootScope.authToken = authToken;
        if ($scope.rememberMe) {
          $cookieStore.put('authToken', authToken);
        }
        restAuthentication.get(function(user) {
          $rootScope.user = user;
          $location.path("/");
        });
      });
    };
  });