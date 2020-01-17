angular.module('myApp.graphics').directive('bestDirective', [function () {
    return {
        templateUrl: '/directives/bestDirective/best.html',
        scope: {
            restaurants: '=',
            restoDetail: '=',
        },
        link: function (scope) {
            scope.selectResto = function (selectedResto,index) {
                scope.restoDetail = selectedResto;
                scope.selected = index;
            }
        },
    };
}]);