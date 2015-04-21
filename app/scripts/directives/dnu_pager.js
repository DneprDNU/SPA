'use strict';

angular.module('dnuApp.directives')
  .directive('dnuPager', function () {
    return {
      templateUrl: 'views/dnu-pager.html'
    };
  })
  .directive('activeLink', ['$location', function (location) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var clazz = attrs.activeLink;
        var path = attrs.ngHref;
        path = path.substring(1); //hack because path does not return including hashbang
        scope.location = location;
        scope.$watch('location.url()', function (newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  }]);

