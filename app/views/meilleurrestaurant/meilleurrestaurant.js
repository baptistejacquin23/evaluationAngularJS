'use strict';

angular.module('myApp.meilleurrestaurant', ['ngRoute','myApp.graphics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/best/restaurants', {
    templateUrl: 'views/meilleurrestaurant/meilleurrestaurant.html',
    controller: 'MeilleurRestaurantCtrl'
  });
}])

.controller('MeilleurRestaurantCtrl', ['$scope','restaurantService', function($scope,restaurantService) {
  $scope.titre = "Les meilleurs restaurants";
  $scope.restos = restaurantService.restaurants;
}]);