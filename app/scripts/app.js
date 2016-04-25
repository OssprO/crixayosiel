'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    //'ngTouch',
    'angularMoment',
    'ngMaterial',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/historia', {
        templateUrl: 'views/historia.html',
        controller: 'HistoriaCtrl',
        controllerAs: 'historia'
      })
      .when('/union', {
        templateUrl: 'views/union.html',
        controller: 'UnionCtrl',
        controllerAs: 'union'
      })
      .when('/donde', {
        templateUrl: 'views/donde.html',
        controller: 'DondeCtrl',
        controllerAs: 'donde'
      })
      .when('/alojamiento', {
        templateUrl: 'views/alojamiento.html',
        controller: 'AlojamientoCtrl',
        controllerAs: 'alojamiento'
      })
      .when('/rsvp', {
        templateUrl: 'views/rsvp.html',
        controller: 'RSVPCtrl',
        controllerAs: 'rsvp'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config( ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
            china: true
        });
    }]
  );
