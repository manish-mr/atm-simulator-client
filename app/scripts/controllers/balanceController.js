'use strict';

angular.module('atmSimulatorClientApp')
  .controller('BalanceCtrl', function ($scope, $location, accountService) {
    
     accountService.checkBalance()
            .then(function (response) {
              if(response.status == 200) {
                  $scope.balance = response.data;
              }
            }, function (error) {
                console.log(error);
            });
    
    $scope.endSession = function() {
      accountService.invalidateSession()
            .then(function (response) {
              if(response.status == 200) {
                  localStorage.token = "";
                  $location.url('/');
              }
            }, function (error) {
                console.log(error);
            });
    };

    
  });
