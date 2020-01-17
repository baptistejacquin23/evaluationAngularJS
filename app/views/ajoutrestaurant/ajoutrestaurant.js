'use strict';

angular.module('myApp.ajoutRestaurant', ['ngRoute','myApp.graphics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ajout/restaurant', {
    templateUrl: 'views/ajoutrestaurant/ajoutrestaurant.html',
    controller: 'ajoutrestaurantCtrl'
  });
}])

.controller('ajoutrestaurantCtrl', ['$scope', function($scope) {
  $scope.titre = "Ajouter un restaurant";
}]);