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
    'ui.bootstrap',
    'angularFileUpload',
    'restFacultyResource',
    'restCategoryResource',
    'restDepartmentResource',
    'restSpecialityResource',
    'restSearchResource',
    'restSubjectResource',
    'restTeacherResource',
    'restResourceResource',
    'restFreeResourceResource',
    'dnuApp.directives'
  ])
  .run(function($rootScope) {
    $rootScope.serviceIp = '80.240.139.45';
  })
  .config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
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
      .when('/faculty/:id', {
        templateUrl: 'views/faculty.html',
        controller: 'FacultyCtrl'
      })
      .when('/departments', {
        templateUrl: 'views/departments.html',
        controller: 'DepartmentsCtrl'
      })
      .when('/faculty/:facultyId/department/:id', {
        templateUrl: 'views/department.html',
        controller: 'DepartmentCtrl'
      })
      .when('/subjects', {
        templateUrl: 'views/subjects.html',
        controller: 'SubjectsCtrl'
      })
      .when('/teachers', {
        templateUrl: 'views/teachers.html',
        controller: 'TeachersCtrl'
      })
      .when('/free-resources', {
        templateUrl: 'views/free-resources.html'
      })
      .when('/free-resources', {
        templateUrl: 'views/free-resources.html',
        controller: 'ResourcesCtrl'
      })
      .when('/resource/:id', {
        templateUrl: 'views/resource.html',
        controller: 'ResourcesCtrl'
      })
      .when('/specialities', {
        templateUrl: 'views/specialities.html',
        controller: 'SpecialitiesCtrl'
      })
      .when('/faculty/:facultyId/speciality/:id', {
        templateUrl: 'views/speciality.html',
        controller: 'SpecialityCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin_menu.html',
        controller: 'AdminMenuCtrl'
      })
      .when('/admin/faculties', {
        templateUrl: 'views/admin/faculty/faculties.html',
        controller: 'FacultyAdminListCtrl'
      })
      .when('/admin/faculty', {
        templateUrl: 'views/admin/faculty/faculty.html',
        controller: 'FacultyAdminCreateCtrl'
      })
      .when('/admin/faculty/:id', {
        templateUrl: 'views/admin/faculty/faculty.html',
        controller: 'FacultyAdminEditCtrl'
      })
      .when('/admin/categories', {
        templateUrl: 'views/admin/category/categories.html',
        controller: 'CategoryAdminListCtrl'
      })
      .when('/admin/category', {
        templateUrl: 'views/admin/category/category.html',
        controller: 'CategoryAdminCreateCtrl'
      })
      .when('/admin/category/:id', {
        templateUrl: 'views/admin/category/category.html',
        controller: 'CategoryAdminEditCtrl'
      })
      .when('/admin/resources', {
        templateUrl: 'views/admin/resource/resources.html',
        controller: 'ResourceAdminListCtrl'
      })
      .when('/admin/resource', {
        templateUrl: 'views/admin/resource/resource.html',
        controller: 'ResourceAdminCreateCtrl'
      })
      .when('/admin/resource/:id', {
        templateUrl: 'views/admin/resource/resource.html',
        controller: 'ResourceAdminEditCtrl'
      })
      .when('/admin/free-resources', {
        templateUrl: 'views/admin/free-resource/free-resources.html',
        controller: 'FreeResourceAdminListCtrl'
      })
      .when('/admin/free-resource', {
        templateUrl: 'views/admin/free-resource/free-resource.html',
        controller: 'FreeResourceAdminCreateCtrl'
      })
      .when('/admin/free-resource/:id', {
        templateUrl: 'views/admin/free-resource/free-resource.html',
        controller: 'FreeResourceAdminEditCtrl'
      })
      .when('/admin/teachers', {
        templateUrl: 'views/admin/teacher/teachers.html',
        controller: 'TeacherAdminListCtrl'
      })
      .when('/admin/teacher', {
        templateUrl: 'views/admin/teacher/teacher.html',
        controller: 'TeacherAdminCreateCtrl'
      })
      .when('/admin/teacher/:id', {
        templateUrl: 'views/admin/teacher/teacher.html',
        controller: 'TeacherAdminEditCtrl'
      })
      .when('/admin/subjects', {
        templateUrl: 'views/admin/subject/subjects.html',
        controller: 'SubjectAdminListCtrl'
      })
      .when('/admin/subject', {
        templateUrl: 'views/admin/subject/subject.html',
        controller: 'SubjectAdminCreateCtrl'
      })
      .when('/admin/subject/:id', {
        templateUrl: 'views/admin/subject/subject.html',
        controller: 'SubjectAdminEditCtrl'
      })
      .when('/admin/specialities', {
        templateUrl: 'views/admin/speciality/specialities.html',
        controller: 'SpecialityAdminListCtrl'
      })
      .when('/admin/speciality', {
        templateUrl: 'views/admin/speciality/speciality.html',
        controller: 'SpecialityAdminCreateCtrl'
      })
      .when('/admin/speciality/:id', {
        templateUrl: 'views/admin/speciality/speciality.html',
        controller: 'SpecialityAdminEditCtrl'
      })
      .when('/admin/departments', {
        templateUrl: 'views/admin/department/departments.html',
        controller: 'DepartmentAdminListCtrl'
      })
      .when('/admin/department', {
        templateUrl: 'views/admin/department/department.html',
        controller: 'DepartmentAdminCreateCtrl'
      })
      .when('/admin/department/:id', {
        templateUrl: 'views/admin/department/department.html',
        controller: 'DepartmentAdminEditCtrl'
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

      if ($rootScope.user.roles.indexOf(role) === undefined) {
        return false;
      }

      return true;
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

    $rootScope.userMenuActions = [ {
      name : "menu.login",
      href : "#/login",
      roles : []
    }, {
      name : "menu.logout",
      href : "#/logout",
      roles : [ 'READ_ONLY', 'ADMIN' ]
    }, {
      name : "menu.foo",
      href : "#/foo",
      roles : [ 'READ_ONLY', 'ADMIN' ]
    }, {
      name : "menu.adminArea",
      href : "#/adminArea",
      roles : [ 'ADMIN' ]
    } ];

    $rootScope.serviceIp = '80.240.139.45';

    $rootScope.initialized = true;
  });
