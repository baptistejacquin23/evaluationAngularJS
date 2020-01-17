'use strict';

angular.module('myApp.viewListeRestaurant', ['ngRoute','myApp.graphics'])

.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/listerestaurant/listerestaurant.html',
                controller: 'ListerestaurantCtrl'
            });
    }])

.controller('ListerestaurantCtrl', ['$scope','$location', "restaurantService", function($scope, $location, restaurantService) {
    $scope.titre = 'Restaurants';
    $scope.restos = restaurantService.restaurants;
    $scope.ajouter = function () {
        $location.path("/ajout/restaurant");

    };
}]);