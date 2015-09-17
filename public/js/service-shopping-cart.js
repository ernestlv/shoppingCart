SSCT.factory('shoppingCart', function(){ //signal when to update the video list
	var cart = {
		items:[],
		count:0,
		total:0
	};
	var updateCount = 0;
	return {
		addItem: function(item){
			var found = _.find(cart.items, function(i){
				return i.id === item.id;
			});
			if (found){
				found.count++;
			}else{ //new item added
				cart.items.push({
					'id': item.id,
					'type': item.type,
					'description': item.description,
					'price': item.price,
					'count': 1
				});
			}
			cart.count = _.reduce(cart.items, function(tot, i){
				return tot + i.count;
			}, 0);
		},
		removeItem: function(item){
			cart.items = _.reject(cart.items, function(i){
				return i.id === item.id;
			});
			cart.count = _.reduce(cart.items, function(tot, i){
				return tot + i.count;
			}, 0);
		},
		updateTotal: function(){
			cart.total = _.reduce(cart.items, function(tot, i){
				return tot + (i.price * i.count);
			}, 0);
		},
		getCart: function(){
			return cart;
		},
		clearCart: function(){
			cart.items.length = 0;
			cart.count = 0;
		}
	};
});