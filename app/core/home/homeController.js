var home = angular.module('home', []);
home.controller('homeController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);