'use strict';

angular.module('atmSimulatorClientApp')
  .controller('WithdrawalEndCtrl', function ($scope, $location, accountService) {

    $scope.withdrawObj = accountService.getWithdrawObj();

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
