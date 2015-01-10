'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the dnuApp
 */
angular.module('dnuApp')
  .controller('SubjectsCtrl', function ($scope, $timeout, restSubjects) {
    $scope.collection = [];
    $scope.update = function () {
      restSubjects.list({}, function (data) {
        $scope.collection = data;
      });

      $timeout($scope.update, 10000);
    };

    $scope.update();
    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Subject", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };

  });

angular.module('dnuApp')
  .controller('SubjectCtrl', function ($scope, $routeParams, restSubject) {
    $scope.subject = restSubject.get({id: $routeParams.id});
  });
