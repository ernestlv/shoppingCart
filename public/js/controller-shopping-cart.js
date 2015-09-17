SSCT.controller("shoppingCart", function($scope, shoppingCart){
	
	$scope.closeCart = function(){
		location = '#/';
	};

	$scope.clearCart = function(){
		shoppingCart.clearCart();
		$scope.closeCart();
	};

	$scope.isCartEmpty = function(){
		return $scope.cart.items.length === 0;
	};

	$scope.removeItem = function(item){
		shoppingCart.removeItem(item);
		shoppingCart.updateTotal();
	};

	$scope.cart = shoppingCart.getCart();
});