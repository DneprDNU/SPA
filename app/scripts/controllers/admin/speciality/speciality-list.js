'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SpecialityAdminListCtrl
 * @description
 * # SpecialityAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SpecialityAdminListCtrl', function ($scope, $location, restFaculty, restSpecialities) {
    // callback for ng-click 'editResource':
    $scope.editSpeciality = function (specialityId) {
      $location.path('/admin/speciality/' + specialityId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteSpeciality = function (specialityId) {
      restSpecialities.delete({ id: specialityId });
      $scope.faculties = restSpecialities.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewSpeciality = function () {
      $location.path('/admin/speciality');
    };

    $scope.specialities = restSpecialities.list({adminMode: 1});
  });
