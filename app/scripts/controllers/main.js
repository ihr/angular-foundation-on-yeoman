'use strict';

angular.module('app').controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.awesomeThings = [
        'Zurb Foundation',
        'AngularJS',
        'Karma',
        'Font Awesome'
    ];

    $scope.userName = "bro";

    $http({method: 'GET', url: '/rest'}).
        success(function (data, status, headers, config) {
            $scope.serverData = data;
        }).error(function (data, status, headers, config) {
            $scope.serverData = "server error";
        });
}]);