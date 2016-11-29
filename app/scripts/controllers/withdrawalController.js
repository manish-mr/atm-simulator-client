'use strict';

angular.module('atmSimulatorClientApp')
  .controller('WithdrawalCtrl', function ($scope, $location, accountService) {
    
    $scope.errorMessage = null;
    $scope.withdrawObj = {};

    $scope.withdraw = function() {
      if ($scope.withdrawObj.amount == undefined || $scope.withdrawObj.amount == "") {
        $scope.errorMessage = "Please enter withdrawal amount"; 
      } else {
        $scope.errorMessage = null;
        accountService.withdraw($scope.withdrawObj)
            .then(function (response) {
              if(response.status == 200) {
                $scope.withdrawObj.balance = response.data;
                accountService.saveWithdrawObj($scope.withdrawObj);
                $location.url('/withdrawalend');
              }
            }, function (error) {
                $scope.errorMessage = error.data;
            });
      }
    };
    
  });
