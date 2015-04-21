'use strict';

angular.module('dnuApp')
  .controller('AuthCtrl', function ($scope, $rootScope, $location, $cookieStore, restAuthentication, AuthService, AUTH_EVENTS, USER_ROLES) {
    $scope.login = function() {
      restAuthentication.authenticate($.param({username: $scope.username, password: $scope.password}), function(authenticationResult) {
        var authToken = authenticationResult.token;
        $rootScope.authToken = authToken;
        if (authToken !== undefined) {
          $cookieStore.put('authToken', authToken);
          $rootScope.loggedIn = false;
        }
        AuthService.login({username: $scope.username, password: $scope.password}).then(function (user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $rootScope.user = user;
          if (AuthService.isAdmin()) {
            $location.path('/admin');
          }
          else {
            $location.path('/');
          }
        }, function () {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
      });
    };
  });
