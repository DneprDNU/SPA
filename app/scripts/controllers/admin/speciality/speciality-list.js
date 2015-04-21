'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SpecialityAdminListCtrl
 * @description
 * # SpecialityAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SpecialityAdminListCtrl', function ($scope, $location, restFaculty, restSpecialities,restSpeciality, $routeParams) {
    // callback for ng-click 'editResource':
    $scope.editSpeciality = function (specialityId) {
      $location.path('/admin/speciality/' + specialityId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteSpeciality = function (specialityId) {
      restSpeciality.delete({ id: specialityId }, function(){
        $scope.specialities = restSpecialities.list();
      });
    };

    // callback for ng-click 'createResource':
    $scope.createNewSpeciality = function () {
      $location.path('/admin/speciality');
    };

    $scope.pager = {current: 1, items: [], count: 1};
    restSpecialities.count(function (response) {
      $scope.pager.count = response.count;
      for (var i = 0; $scope.pager.count/10 >= i; i++) {
        var j = i +1;
        $scope.pager.items.push({
          active: j == ($routeParams.page !== undefined ? $routeParams.page : 1),
          number: j,
          url: '#/admin/specialities?page=' + j
        });
      }
    });
    $scope.pager.current = $routeParams.page !== undefined ? $routeParams.page : 1;
    $scope.pager.items = [];

    if ($routeParams.page !== undefined) {
      var from = ($routeParams.page - 1) * 10;
      var to = $routeParams.page * 10;

      $scope.specialities = restSpecialities.admin_list({from: from, to: to});
    }
    else {
      $scope.specialities = restSpecialities.admin_list({from: 0, to: 10});
    }
  });
