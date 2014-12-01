'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the dnuApp
 */
angular.module('dnuApp')
  .controller('FacultiesCtrl', function ($scope, $timeout, restFaculties) {
    $scope.collection = [];
    $scope.update = function () {
      restFaculties.list({}, function (data) {
        $scope.collection = data;
      });

      $timeout($scope.update, 10000);
    };

    $scope.update();

    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Faculty", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };

  });

