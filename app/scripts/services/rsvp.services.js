'use strict';

/**
 * @ngdoc function
 * @name webApp.service:RSVPService
 * @description
 * # RSVPService
 * Service of the webApp
 */
angular.module('webApp')
	.factory('RSVPService', function () {
		var service = {};
		/*
		service.saveEntry = function(entryData){
			$http({
				method: 'post',
				url: '',
				data: $.param({'user' : entryData, 'type' : 'saveEntry' }),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    }).
		    success(function(data, status, headers, config) {
		    	
		    	if(data.success){
		    		if( $scope.editMode ){
		    			$scope.post.users[$scope.index].id = data.id;
		    			$scope.post.users[$scope.index].name = $scope.tempUser.name;
		    			$scope.post.users[$scope.index].email = $scope.tempUser.email;
		    			$scope.post.users[$scope.index].companyName = $scope.tempUser.companyName;
		    			$scope.post.users[$scope.index].designation = $scope.tempUser.designation;
		    		}else{
		    			$scope.post.users.push({
			    			id : data.id,
			    			name : $scope.tempUser.name,
			    			email : $scope.tempUser.email,
			    			companyName : $scope.tempUser.companyName,
			    			designation : $scope.tempUser.designation
			    		});
		    		}
		    		$scope.messageSuccess(data.message);
		    		$scope.userForm.$setPristine();
		    		$scope.tempUser = {};
		    		
		    	}else{
		    		$scope.messageFailure(data.message);
		    	}
		    	
		    }).
		    error(function(data, status, headers, config) {
		        console.log(data);
		    });

		};
		*/

		return service;
	});