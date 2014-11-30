'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:FacultiesCtrl
 * @description
 * # FacultiesCtrl
 * Controller of the dnuApp
 */
angular.module('dnuApp')
  .controller('FacultiesCtrl', function ($scope, $timeout, restFacultiesList) {
    $scope.collection = [];
    $scope.update = function () {
      restFacultiesList.getFacultiesList({}, function (data) {
        $scope.collection = data;
        console.log(data);
      });

      //$timeout($scope.update, 4000);
    };

    $scope.update();

    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Faculty", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };
    //$scope.addOne();
  });

