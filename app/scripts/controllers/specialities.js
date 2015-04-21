'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the dnuApp
 */
angular.module('dnuApp')
  .controller('SpecialitiesCtrl', function ($scope, $timeout, restSpecialities) {
    $scope.collection = [];
    $scope.update = function () {
      restSpecialities.list({}, function (data) {
        $scope.collection = data;
      });

      $timeout($scope.update, 10000);
    };

    $scope.update();
    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Speciality", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };

  });

angular.module('dnuApp')
  .controller('SpecialityCtrl', function ($scope, $routeParams, restSpeciality, restFaculty, restSubjects, restTeachers) {
    $scope.speciality = restSpeciality.get({id: $routeParams.id, facultyId: $routeParams.facultyId});
    $scope.faculty = restFaculty.get({id: $routeParams.facultyId});
    $scope.subjects = restSubjects.list({departmentId: $routeParams.id});
    $scope.teachers = $scope.speciality.supervisors;
  });
