'use strict';

angular.module('app').controller('MainCtrl', ['$scope', function($scope) {
    $scope.awesomeThings = [
        'Zurb Foundation',
        'AngularJS',
        'Karma',
        'Font Awesome'
    ];

    $scope.userName = "bro";
}]);