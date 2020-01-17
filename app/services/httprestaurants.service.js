'use strict';

angular.module('myApp.service').factory('httprestaurantsService', ['$resource', function ($resource) {
    return $resource('data/restaurants/:id.json');
}]);