'use strict';

/**
 * @ngdoc function
 * @name webApp.directive:MainDirective
 * @description
 * # MainDirective
 * Directive of the webApp
 */
angular.module('webApp')
  .directive('timeElement', function () {
    return {
		restrict: 'E',
		scope: {
			number: '@',
			tag: '@'
	    },
		templateUrl: 'scripts/templates/time-element.html'
	};
  });