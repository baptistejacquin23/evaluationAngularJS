angular.module('myApp.service').factory('restaurantService',['httprestaurantsService',function (httprestaurantsService) {
    return {
        restaurants:
            httprestaurantsService.query(),

        delete: function(restaurant){
            this.restaurants.splice(this.restaurants.indexOf(restaurant),1);
            httprestaurantsService.delete({id:restaurant.id});
        },
        save:function (restaurant){
            if (restaurant && !restaurant.id || restaurant.id == 0){
                restaurant.id = Math.max(this.restaurants.length, ...this.restaurants.map(p=> p.id))+1;
                this.restaurants.push(restaurant);
            }else{
                let p = this.restaurants.find((p)=>p.id === restaurant.id);
                angular.copy(restaurant, p);
            }
            httprestaurantsService.save(restaurant);
        },
    }
}]);