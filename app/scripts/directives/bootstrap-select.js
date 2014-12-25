angular.module("dnuApp.directives", []);
"use strict"
angular.module("dnuApp.directives")
  .directive("bootstrapSelect", function () {
    return {
      link: function (scope, element, attrs) {
        setTimeout(function () { return $(element).selectpicker()}, 2000);
      }
    }
  });
