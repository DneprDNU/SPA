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
      dataService.get().then(function (data) {
        $scope.collection = data;
      });

      $timeout($scope.update, 4000);
    };

    //$scope.update();

    $scope.addOne = function () {
      $scope.collection.push({id:1, title: "Faculty", src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"});
    };
    $scope.addOne();
    $scope.addOne();
    $scope.addOne();
    $scope.addOne();


  });

angular.module('dnuApp')
  .service('dataService', function ($http) {
    return {
      get: function () {
        var randomItems = [];

        for (var i = 0; i < 10; i++) {
          var id = Math.floor(Math.random() * 101);

          randomItems.push({
            id: id,
            title: "Item " + id,
            src: "http://dnu.thebodva.com/upload/b32f3d1ef28edf602362b91cb935886f.jpg"
          });
        }

        var postData = $.param({
          'json': angular.toJson(randomItems),
          'delay': 2
        });

        var promise = restFacultiesList.getFacultiesList({}, function (response) {
            return response.data;
          });

        return promise;
      }
    }
  });

angular.module('dnuApp')
  .directive('isoRepeat', function ($timeout) {
    return {
      scope: {
        items: '=isoRepeat'
      },
      template:'<div><article ng-click="logHello()" ng-repeat="item in items | orderBy:\'title\'"><img src="{{item.src}} />"<h2>{{item.title}}</h2></article></div>',
      link: function (scope, element, attrs) {

        var options = {
          animationEngine : 'jquery',
          itemSelector: 'isotope-container',
          layoutMode: 'fitRows',
          sortAscending: true
        };

        element.isotope(options);

        scope.$watch('items', function(newVal, oldVal) {
          $timeout(function () {
            element.isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
          });
        },true);

        scope.logHello = function(){
          console.log("hello world")
        }
      }
    }
  });
