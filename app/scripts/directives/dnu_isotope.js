"use strict";

angular.module("dnuApp.directives", []);
angular.module("dnuApp.directives")
  .directive("isotopeDnuContainer", function() {
    return {
      link: function(scope, element, attrs) {
        scope.$on('LastElem', function (event) {
          console.log('#' + element.get(0).id);
          var iso = new Isotope('#' + element.get(0).id, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry'
          });
        });
        return element;
      }
    };
  })
  .directive("isotopeDnuItem", function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
          scope.$emit('LastElem');
        }

        return element;
      };
  });
