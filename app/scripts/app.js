'use strict';

/**
 * @ngdoc overview
 * @name dnuApp
 * @description
 * # dnuApp
 *
 * Main module of the application.
 */
angular
  .module('dnuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restAuth',
    'restFaculties',
    'dnuApp.directives'
  ])
  .config([ '$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/faculties', {
        templateUrl: 'views/faculties.html',
        controller: 'FacultiesCtrl'
      })
      .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'ResourcesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
        return {
          'responseError': function(rejection) {
            var status = rejection.status;
            var config = rejection.config;
            var method = config.method;
            var url = config.url;

            if (status == 401) {
              $location.path( "/login" );
            } else {
              $rootScope.error = method + " on " + url + " failed with status " + status;
            }

            return $q.reject(rejection);
          }
        };
      }
    );

    /* Registers auth token interceptor, auth token is either passed by header or by query parameter
     * as soon as there is an authenticated user */
    $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
        return {
          'request': function(config) {
            console.log($rootScope);
            if (angular.isDefined($rootScope.authToken)) {
              var authToken = $rootScope.authToken;
              //if (exampleAppConfig.useAuthTokenHeader) {
                config.headers['X-Auth-Token'] = authToken;
              //} else {
              //  config.url = config.url + "?token=" + authToken;
              //}
            }
            return config || $q.when(config);
          }
        };
      }
    );

  }])
  .run(function($rootScope, $location, $cookieStore, restAuthentication) {

    /* Reset error when a new view is loaded */
    $rootScope.$on('$viewContentLoaded', function() {
      delete $rootScope.error;
    });

    $rootScope.hasRole = function(role) {

      if ($rootScope.user === undefined) {
        return false;
      }

      if ($rootScope.user.roles[role] === undefined) {
        return false;
      }

      return $rootScope.user.roles[role];
    };

    $rootScope.logout = function() {
      delete $rootScope.user;
      delete $rootScope.authToken;
      $cookieStore.remove('authToken');
      $location.path("/login");
    };

    /* Try getting valid user from cookie or go to login page */
    var originalPath = $location.path();
    $location.path("/login");
    var authToken = $cookieStore.get('authToken');
    if (authToken !== undefined) {
      $rootScope.authToken = authToken;
      restAuthentication.get(function(user) {
        $rootScope.user = user;
        $location.path(originalPath);
      });
    }

    $rootScope.initialized = true;
  });
