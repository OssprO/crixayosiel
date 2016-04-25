'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', ['$scope','$interval', function ($scope, $interval) {
    $scope.targetTime = new Date(2016,9,29,12,0,0,0);
    $scope.nowTime = new Date();
    
    var stop;

	$scope.updateClock = function () {
		if ( angular.isDefined(stop) ) { return; }

		stop = $interval(function() {
			$scope.nowTime = new Date();
		}, 1000);
	};

	$scope.stopClock = function() {
		if (angular.isDefined(stop)) {
			$interval.cancel(stop);
			stop = undefined;
		}
	};

	$scope.$on('$destroy', function() {
		$scope.stopClock();
	});
	
	$scope.updateClock();
	

  }]);
