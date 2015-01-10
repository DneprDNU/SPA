'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('SearchCtrl', function ($scope, $location) {
    $scope.searchKey = '';

    $scope.search = function () {
      $location.path('/resources').search({search: $scope.searchKey});
    }
  });
