'use strict';

/**
 * @ngdoc function
 * @name webApp.filter:MainFilter
 * @description
 * # MainFilter
 * Filter of the webApp
 */
angular.module('webApp')
  .filter('secondsToDateTime', function () {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
  });