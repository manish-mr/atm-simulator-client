'use strict';

angular.module('atmSimulatorClientApp')
  .controller('WelcomeCtrl', function ($scope, $location ,accountService) {
    
    $scope.errorMessage = null;
    $scope.cardDetails = {};
    
    $scope.swipe = function() {

      if ($scope.cardDetails.custName == undefined || $scope.cardDetails.custName == "") {
        $scope.errorMessage = "Please enter valid customer name";
      } else if ($scope.cardDetails.cardNumber == undefined || $scope.cardDetails.cardNumber == "") {
        $scope.errorMessage = "Please enter valid card number";
      } else if ($scope.cardDetails.accountNumber == undefined || $scope.cardDetails.accountNumber == "") {
        $scope.errorMessage = "Please enter valid account number";
      } else {
        $scope.errorMessage = null;
        var name = $scope.cardDetails.custName.split(" ");
        $scope.cardDetails.custFirstName = name[0];
        $scope.cardDetails.custLastName = name[1];
        delete $scope.cardDetails.custName;

        accountService.swipe($scope.cardDetails)
            .then(function (response) {
              if(response.status == 200) {
                accountService.saveAccountDetails($scope.cardDetails);
                $location.url('/pin');
              }
            }, function (error) {
               if(error.data == "Invalid") {
                  $scope.errorMessage = "Invalid CARD details";
               }
            });
      }
    };
    
  });
