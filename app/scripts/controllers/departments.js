'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the dnuApp
 */
angular.module('dnuApp')
  .controller('DepartmentsCtrl', function ($scope, $timeout, restTeachers) {
    $scope.collection = [];
    $scope.update = function () {
      restTeachers.list({}, function (data) {
        $scope.collection = data;
      });

      $timeout($scope.update, 10000);
    };

    $scope.update();
    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Department", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };

  });

angular.module('dnuApp')
  .controller('DepartmentCtrl', function ($scope, $timeout, $routeParams, restDepartment, restSubjects, restTeachers, restFaculty) {
    $scope.department = restDepartment.get({id: $routeParams.id});
    $scope.faculty = restFaculty.get({id: $routeParams.facultyId});
    $scope.subjects = restSubjects({'departmentId': $routeParams.id});
    $scope.specialities = $scope.department.specialities;
    $scope.teachers = $scope.department.employees;
    console.log($scope);
  });