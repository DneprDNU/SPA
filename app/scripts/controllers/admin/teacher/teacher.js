'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:TeacherAdminListCtrl
 * @description
 * # TeacherAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('TeacherAdminEditCtrl', function ($scope, $location, $upload, $routeParams, restTeacher) {
    $scope.save = function() {
      //restTeachers.update($scope.teacher);
      if ($scope.teacher.image !== undefined) {
        var files = [],
          filesFormDataName = [];

        if ($scope.teacher.image[0] !== undefined) {
          files.push($scope.teacher.image[0]);
          filesFormDataName.push('image');
        }

        $scope.upload = $upload.upload({
          url: 'http://' + $rootScope.serviceIp + ':8080/filestorage/rest/department/',
          method: 'POST',
          data: {resource: $scope.teacher},
          file: files,
          fileFormDataName: ['image']
        });
      }
      else {
        restTeacher.update($scope.teacher);
      }
      $location.path('/admin/teachers');
    };

    $scope.cancel = function () {
      $location.path('/admin/teachers');
    };

    $scope.teacher = restTeachers.get({id: $routeParams.id});

    // callback for ng-click 'createResource':
    $scope.createNewTeacher = function () {
      $location.path('/admin/teachers');
    };
  });

angular.module('dnuApp')
  .controller('TeacherAdminCreateCtrl', function ($scope, $location, $upload, $routeParams, restTeachers) {
    $scope.save = function() {
      restTeachers.create($scope.teacher);
      $location.path('/admin/teachers');
    };

    $scope.cancel = function () {
      $location.path('/admin/teachers');
    };
  });
