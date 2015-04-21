'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular.module('restAuth', ['ngResource'])
  .factory('restAuthentication', function($rootScope, $resource) {
    return $resource('http://' + $rootScope.serviceIp + ':8080/filestorage/login', {},
      {
        authenticate: {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      }
    );
  })
  .factory('AuthService', function ($http, Session, $rootScope, USER_ROLES, $cookieStore) {
    var authService = {};

    authService.login = function () {
      var req = {
        method: 'GET',
        url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/login'
      };

      return $http(req)
        .success(function (res) {
          console.log(res);
          Session.create(res.name, res.roles);
          authService.reInit();
          return res.data;
        })
        .error(function() {
          $cookieStore.remove('authToken');
          authService.reInit();
        });
    };

    authService.isAuthenticated = function () {
      return !!Session.userName;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
      authorizedRoles.filter(function (n) {
        return Session.userRoles.indexOf(n) != -1;
      }).length > 0);
    };

    authService.isSuper = function () {
      return authService.isAuthorized(USER_ROLES.admin);
    };

    authService.isAdmin = function() {
      return authService.isAuthorized([USER_ROLES.editor, USER_ROLES.admin]);
    };

    authService.isEditor = function() {
      return authService.isAuthorized(USER_ROLES.editor);
    };

    authService.reInit = function() {
      $rootScope.isLoggedIn = authService.isAuthenticated();
      $rootScope.isSuper = authService.isSuper();
      $rootScope.isAdmin = authService.isAdmin();
      $rootScope.isEditor = authService.isEditor();
    };

    return authService;
  })
  .service('Session', function () {
    this.create = function (userName, userRoles) {
      this.userName = userName;
      this.userRoles = userRoles;
    };

    this.destroy = function () {
      this.userName = null;
      this.userRoles = null;
    };
  })
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'ROLE_SUPERADMIN',
    editor: 'ROLE_ADMIN',
    guest: 'ROLE_USER'
  });
