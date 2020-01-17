'use strict';

angular.module('myApp.commentaires', ['ngRoute','myApp.graphics'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/commentaire/:restaurant', {
    templateUrl: 'views/commentaires/commentaires.html',
    controller: 'commentaireCtrl'
  });
}])

.controller('commentaireCtrl', ['$routeParams','$scope', function($routeParams,$scope) {
  $scope.titre = "Commentaires";
  $scope.test = JSON.parse($routeParams.restaurant);
  $scope.test.date = new Date($scope.test.date);
}]);