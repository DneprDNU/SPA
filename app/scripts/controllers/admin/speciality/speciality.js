'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SpecialityAdminListCtrl
 * @description
 * # SpecialityAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SpecialityAdminEditCtrl', function ($scope, $location, $routeParams, restSpecialities) {
    $scope.save = function() {
      restSpecialities.update($scope.speciality);
      $location.path('/admin/specialities');
    };

    $scope.cancel = function () {
      $location.path('/admin/specialities');
    };

    $scope.speciality = restSpecialities.get({id: $routeParams.id});

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
