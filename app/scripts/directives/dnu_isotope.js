'use strict';

angular.module('dnuApp.directives', []);
angular.module('dnuApp.directives')
  .directive('isotopeDnuContainer', function () {
    return {
      link: function (scope, element) {
        scope.$on('LastElem', function () {
          new Isotope('#' + element.get(0).id, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry'
          });
        });
        return element;
      }
    };
  })
  .directive("isotopeDnuItem", function () {
    return function (scope, element) {
      if (scope.$last) {
        scope.$emit('LastElem');
      }
      return element;
    };
  });
