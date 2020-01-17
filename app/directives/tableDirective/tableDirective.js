angular.module('myApp.graphics').directive('tableDirective', [function () {
    return {
        templateUrl: '/directives/tableDirective/table.html',
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