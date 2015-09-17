var SSCT = angular.module("SSCT", [ 'ngRoute' ]);
    SSCT.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/', {
                templateUrl: '/components/inventory.html',
                controller: 'inventory'
            }).
            when('/cart', {
                templateUrl: '/components/shoppingCart.html',
                controller: 'shoppingCart'
            }).
            otherwise({
                redirectTo: '/'
            });
}]);