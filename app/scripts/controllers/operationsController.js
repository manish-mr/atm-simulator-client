'use strict';

angular.module('atmSimulatorClientApp')
  .controller('OperationsCtrl', function ($scope, $location) {
    
    $scope.checkBalance = function() {
      $location.url('/balance');
    };
    
    $scope.withdraw = function() {
      $location.url('/withdrawal');
    };
  });
