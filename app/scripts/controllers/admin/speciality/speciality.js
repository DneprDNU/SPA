'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SpecialityAdminListCtrl
 * @description
 * # SpecialityAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SpecialityAdminEditCtrl', function ($scope, $location, $routeParams, restSpeciality, restTeachers) {
    $scope.save = function() {
      restSpeciality.update($scope.speciality);
      $location.path('/admin/specialities');
    };

    $scope.cancel = function () {
      $location.path('/admin/specialities');
    };

    $scope.speciality = restSpeciality.get({id: $routeParams.id});

    $scope.supervisors = restTeachers.list();

    // callback for ng-click 'createResource':
    $scope.createNewSpeciality = function () {
      $location.path('/admin/specialities');
    };
  });

angular.module('dnuApp')
  .controller('SpecialityAdminCreateCtrl', function ($scope, $location, $routeParams, restSpecialities) {
    $scope.save = function() {
      restSpecialities.create($scope.speciality);
      $location.path('/admin/specialities');
    };

    $scope.cancel = function () {
      $location.path('/admin/specialities');
    };
  });
