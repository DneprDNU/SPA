'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('LinkAdminEditCtrl', function ($scope, restSpecialities, restSubjects, restTeachers, $location, $routeParams, restLink) {
    $scope.save = function() {
      restLink.update($scope.link);
      $location.path('/admin/links');
    };

    $scope.cancel = function () {
      $location.path('/admin/links');
    };

    $scope.link = restLink.get({id: $routeParams.id});

    $scope.specialities = restSpecialities.list();
    $scope.subjects = restSubjects.list();
    $scope.teachers = restTeachers.list();

    $scope.createNewLink = function () {
      $location.path('/admin/links');
    };
  });

angular.module('dnuApp')
  .controller('LinkAdminCreateCtrl', function ($scope, $location, restSpecialities, restSubjects, restTeachers, $routeParams, restLinks) {
    $scope.save = function() {
      restLinks.create($scope.link, function () {
        $location.path('/admin/links');
      });
    };

    $scope.specialities = restSpecialities.list();
    $scope.subjects = restSubjects.list();
    $scope.teachers = restTeachers.list();

    $scope.cancel = function () {
      $location.path('/admin/links');
    };
  });
