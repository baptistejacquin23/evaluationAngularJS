angular.module('myApp.graphics').directive('commentDirective', ["restaurantService","$window",function (restaurantService,$window) {
    return {
        templateUrl: '/directives/commentDirective/comment.html',
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
                    scope.monrestaurant = angular.copy(scope.restaurant);
                    scope.myform.$setPristine();
                    $window.history.back();
                }
        }
    }
}]);