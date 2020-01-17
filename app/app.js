angular.module('myApp', ["ngRoute",'myApp.service','myApp.viewListeRestaurant', 'myApp.meilleurrestaurant','myApp.commentaires','myApp.ajoutRestaurant'])
    .controller('MainController', ['$scope', function ($scope) {
    $scope.currentDate = new Date();
    $scope.selected = null;

}]).config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
});
