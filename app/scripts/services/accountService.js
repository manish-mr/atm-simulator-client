'use strict';
angular.module('atmSimulatorClientApp').factory('accountService', function ($q, $http) {

    //var URL = 'http://localhost:8080/atm-simulator-server/rest';
    var URL = 'http://localhost:8080/atm-simulator-server-1.0/rest';

    var factory = {
        accountDetails: {},
        withdrawObj: {}
    };

    factory.swipe = function (accountDetails) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/account/swipe',
            data: accountDetails,
            headers: {
                'Content-Type': 'application/json'
            }
         }).then(function successCallback(response) {
            d.resolve(response);
        }, function errorCallback(response) {
            d.reject(response);
        });
        return d.promise;
    };

    factory.validatePin = function (accountDetails) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/account/validatePin',
            data: accountDetails,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback(response) {
            d.resolve(response);
        }, function errorCallback(response) {
            d.reject(response);
        });
        return d.promise;
    };

    factory.checkBalance = function () {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: URL + '/account/balance',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then(function successCallback(response) {
            d.resolve(response);
        }, function errorCallback(response) {
            d.reject(response);
        });
        return d.promise;
    };

    factory.withdraw = function (amount) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: URL + '/account/withdraw',
            data: amount,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then(function successCallback(response) {
            d.resolve(response);
        }, function errorCallback(response) {
            d.reject(response);
        });
        return d.promise;
    };

    factory.invalidateSession = function () {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: URL + '/account/done',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token
            }
        }).then(function successCallback(response) {
            d.resolve(response);
        }, function errorCallback(response) {
            d.reject(response);
        });
        return d.promise;
    };

    factory.saveAccountDetails = function(accountDetails) {
        factory.accountDetails = accountDetails;
    };

    factory.getAccountDetails = function() {
        return factory.accountDetails;
    };

    factory.saveWithdrawObj = function(withdrawObj) {
        factory.withdrawObj = withdrawObj;
    };

     factory.getWithdrawObj = function() {
        return factory.withdrawObj;
    };

    return factory;
});
