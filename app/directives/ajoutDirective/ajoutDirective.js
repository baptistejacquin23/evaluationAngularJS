angular.module('myApp.graphics').directive('ajoutDirective', ["restaurantService","$window",function (restaurantService,$window) {
    return {
        templateUrl: '/directives/ajoutDirective/ajout.html',
        scope: {
            restaurant: '='
        },
        link: function (scope, element, attrs) {
            scope.$watch(() => scope.restaurant, function () {
                scope.monrestaurant = angular.copy(scope.restaurant);
                scope.myform.$setPristine();
            }),
            scope.valider = function () {
                restaurantService.save(scope.monrestaurant);
                scope.myform.$setPristine();
                $window.history.back();
            },
            scope.annuler = function () {
                $window.history.back();
            }
        }
    }
}]);