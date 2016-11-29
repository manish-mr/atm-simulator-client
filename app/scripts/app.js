'use strict';

/**
 * @ngdoc overview
 * @name atmSimulatorClientApp
 * @description
 * # atmSimulatorClientApp
 *
 * Main module of the application.
 */
angular
  .module('atmSimulatorClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      })
      .when('/pin', {
        templateUrl: 'views/pin.html',
        controller: 'PinCtrl'
      })
      .when('/operations', {
        templateUrl: 'views/operations.html',
        controller: 'OperationsCtrl'
      })
      .when('/withdrawal', {
        templateUrl: 'views/withdrawal.html',
        controller: 'WithdrawalCtrl'
      })
      .when('/balance', {
        templateUrl: 'views/balance.html',
        controller: 'BalanceCtrl'
      })
      .when('/withdrawalend', {
        templateUrl: 'views/withdrawalend.html',
        controller: 'WithdrawalEndCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
