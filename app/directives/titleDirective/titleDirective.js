angular.module('myApp.graphics').directive('titleDirective', [function () {
    return {
        templateUrl: '/directives/titleDirective/title.html',
        scope: {
            title: '='
        },
    };
}]);