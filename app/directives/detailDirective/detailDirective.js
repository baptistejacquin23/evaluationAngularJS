angular.module('myApp.graphics').directive('detailDirective', ["restaurantService",function (restaurantService) {
    return {
        templateUrl: '/directives/detailDirective/detail.html',
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
            },
            scope.annuler = function () {
                scope.monrestaurant = angular.copy(scope.restaurant);
                scope.myform.$setPristine();
            },
                scope.supprimer = function () {
                    restaurantService.delete(scope.restaurant);
                    scope.myform.$setPristine();
                    scope.restaurant = null;
                }
        }
    }
}]);