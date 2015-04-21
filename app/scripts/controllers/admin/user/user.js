'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('UserAdminEditCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restUser, restFaculties) {
    $scope.save = function() {
      restUser.update($scope.userr);
      $location.path('/admin/users');
    };

    $scope.cancel = function () {
      $location.path('/admin/users');
    };

    $scope.roles = [
      {
        id: "ROLE_ADMIN",
        name: "Адміністратор факультету"
      },
      {
        id: "ROLE_SUPERADMIN",
        name: "Адміністратор репозиторію"
      },
      {
        id: "ROLE_USER",
        name: "Простий користувач"
      }
    ];
    $scope.userr = restUser.get({id: $routeParams.id});
    $scope.faculties = restFaculties.list();

    $scope.createNewUser = function () {
      $location.path('/admin/users');
    };
  });

angular.module('dnuApp')
  .controller('UserAdminCreateCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restUsers, restFaculties) {
    $scope.save = function() {
      restUsers.create($scope.userr);
      $location.path('/admin/users');
    };
    $scope.roles = [
      {
        id: "ROLE_ADMIN",
        name: "Адміністратор факультету"
      },
      {
        id: "ROLE_SUPERADMIN",
        name: "Адміністратор репозиторію"
      },
      {
        id: "ROLE_USER",
        name: "Простий користувач"
      }
    ];
    $scope.faculties = restFaculties.list();

    $scope.cancel = function () {
      $location.path('/admin/users');
    };
  });
