'use strict';

angular.module('atmSimulatorClientApp')
  .controller('PinCtrl', function ($scope, $location, accountService) {
    
    $scope.errorMessage = "";
    $scope.accountDetails = accountService.getAccountDetails();

    $scope.validatePin = function() {
      accountService.validatePin($scope.accountDetails)
            .then(function (response) {
              if(response.status == 200) {
                  localStorage.token = response.data.authToken;
                  $location.url('/operations');
              }
            }, function (error) {
                $scope.errorMessage = error.data;
            });
    };
    
    
});
