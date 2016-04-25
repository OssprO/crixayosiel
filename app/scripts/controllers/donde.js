'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:DondeCtrl
 * @description
 * # DondeCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('DondeCtrl', ['$scope', function ($scope) {
  	var styles = [
		{
			'featureType':'administrative',
			'elementType':'labels.text.fill',
			'stylers':[
				{
					'color':'#444444'
				}
			]
		},
		{
			'featureType':'administrative.country',
			'elementType':'geometry.fill',
			'stylers':[
				{
					'saturation':'17'
				}
			]
		},
		{
			'featureType':'landscape',
			'elementType':'all',
			'stylers':[
				{
					'color':'#f2f2f2'
				}
			]
		},
		{
			'featureType':'poi',
			'elementType':'all',
			'stylers':[
				{
					'visibility':'off'
				}
			]
		},
		{
			'featureType':'road',
			'elementType':'all',
			'stylers':[
				{
					'saturation':-90
				},
				{
					'lightness':15
				}
			]
		},
		{
			'featureType':'road.highway',
			'elementType':'all',
			'stylers':[
				{
					'visibility':'simplified'
				}
			]
		},
		{
			'featureType':'road.arterial',
			'elementType':'labels.icon',
			'stylers':[
				{
					'visibility':'off'
				}
			]
		},
		{
			'featureType':'transit',
			'elementType':'all',
			'stylers':[
				{
					'visibility':'off'
				}
			]
		},
		{
			'featureType':'water',
			'elementType':'all',
			'stylers':[
				{
					'color':'#f8ded9'
				},
				{
					'visibility':'on'
				}
			]
		}
	];

    $scope.map = { 
    	center: { 
    		latitude: 20.5434246, 
    		longitude: -99.9133077 
    	}, 
    	zoom: 13,
    	options: {
			styles: styles
		}
    };

  }]);
