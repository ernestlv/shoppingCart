SSCT.controller("inventory", function($scope, $http, shoppingCart){

	    $scope.openCart = function(){
	    	location = '#/cart';
	    };

		$scope.addToCart = function(item){
			shoppingCart.addItem(item);
			shoppingCart.updateTotal();
			$scope.cart = shoppingCart.getCart();
		};

		$scope.cart = shoppingCart.getCart();

		$http.get('/data/inventory.json').success(function(data){
			$scope.chocolateList = data.chocolates;
		});

});