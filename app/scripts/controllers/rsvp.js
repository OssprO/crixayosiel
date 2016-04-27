'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:RSVPCtrl
 * @description
 * # RSVPCtrl
 * Controller of the webApp
 */
angular.module('webApp')
	.controller('RSVPCtrl', ['$scope', 'RSVPService', function ($scope, RSVPService) {
		$scope.registroObj = {
			nombre: '',
			email: '',
			estado: '',
			respuesta: ''
		};


    $scope.reset = function() {
    	$scope.obj = {
	        nombre: '',
			email: '',
			estado: '',
			respuesta: ''
	    };
	};

	$scope.submit = function() {
		RSVPService.submit();
		/*
			.then(
				function(data){
					console.log(data);
		        //$scope.data.artistData = data;
		      },function(data){
		        //alert(data);
		        	console.log(data);
		      }
		    );
		*/
	};
      
}]);
