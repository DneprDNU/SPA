'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SpecialityAdminListCtrl
 * @description
 * # SpecialityAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SpecialityAdminEditCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restSpeciality, restDepartments, restTeachers) {
    $scope.save = function() {
      if (angular.isArray($scope.speciality.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.speciality.image[0]);
        filesFormDataName.push('image');

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/speciality/' + $scope.speciality.id,
          method: 'PUT',
          data: {resource: $scope.speciality},
          file: files,
          fileFormDataName: ['image']
        }).success(function (data, status, headers, config) {
          $location.path('/admin/specialities');
        })
          .error(function (data, status, headers, config) {
            $location.path('/admin/specialities');
          });
      }
      else {
        restSpeciality.update($scope.speciality, function(){
          $location.path('/admin/specialities');
        },
          function(){
            $location.path('/admin/specialities');
          });
      }
      $location.path('/admin/specialities');
    };

    $scope.cancel = function () {
      $location.path('/admin/specialities');
    };

    $scope.speciality = restSpeciality.get({id: $routeParams.id});

    $scope.supervisors = restTeachers.list();
    $scope.departments = restDepartments.admin_list();

    // callback for ng-click 'createResource':
    $scope.createNewSpeciality = function () {
      $location.path('/admin/specialities');
    };
  });

angular.module('dnuApp')
  .controller('SpecialityAdminCreateCtrl', function ($scope, $rootScope, $location, $upload, $routeParams, restSpecialities, restTeachers, restDepartments) {

    $scope.save = function() {
      if (angular.isArray($scope.speciality.image)) {
        var files = [],
          filesFormDataName = [];

        files.push($scope.speciality.image[0]);
        filesFormDataName.push('image');

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/speciality/',
          method: 'POST',
          data: {resource: $scope.speciality},
          file: files,
          fileFormDataName: ['image']
        }).success(function () {
          $location.path('/admin/specialities');
        })
          .error(function (data, status, headers, config) {
            $location.path('/admin/specialities');
          });
      }
      else {
        restSpecialities.create($scope.speciality, function () {
            $location.path('/admin/specialities');
          }
          , function () {
            $location.path('/admin/specialities');
          });
      }

    };

    $scope.supervisors = restTeachers.list();
    $scope.departments = restDepartments.admin_list();

    $scope.cancel = function () {
      $location.path('/admin/specialities');
    };
  });
