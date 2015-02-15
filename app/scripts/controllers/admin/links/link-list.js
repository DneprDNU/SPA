'use strict';

/**
 * @ngdoc function
 * @name dnuApp.controller:LinkAdminListCtrl
 * @description
 * # LinkAdminListCtrl
 * Controller of the angularApp
 */
angular.module('dnuApp')
  .controller('LinkAdminListCtrl', function ($scope, $location, restFaculty, restLinks) {
    // callback for ng-click 'editResource':
    $scope.editLink = function (linkId) {
      $location.path('/admin/link/' + linkId);
    };

    // callback for ng-click 'deleteResource':
    $scope.deleteLink = function (linkId) {
      restLinks.delete({ id: linkId });
      $scope.faculties = restLinks.list();
    };

    // callback for ng-click 'createResource':
    $scope.createNewLink = function () {
      $location.path('/admin/link');
    };

    $scope.links = restLinks.list({adminMode: 1});
  });
