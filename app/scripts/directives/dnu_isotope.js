angular.module("dnuApp.directives", []);
"use strict"
angular.module("dnuApp.directives")
  .directive("isotopeDnuContainer", function() {
    return {
      link: function(scope, element, attrs) {
        scope.$on('LastElem', function (event) {
          var iso = new Isotope('#' + element.get(0).id, {
            itemSelector: '.faculty',
            layoutMode: 'masonry'
          });
        });
        return element;
      }
    };
  })
  .directive("isotopeDnuItem", function() {
    return function(scope, element, attrs) {
        if (scope.$last){
          scope.$emit('LastElem');
        }

        return element;
      };
  });
