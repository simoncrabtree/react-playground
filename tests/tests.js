var assert = require('assert');
var shoppingListStore = require('../src/js/stores/shoppingListStore');
var addItemToBasket = require('../src/js/commands/addItemToBasket');

describe('Add item to basket', function () {

	shoppingListStore.items = [
		{key: "1", description: "Test Item", isInBasket: false}
	];

	it('Changes the shoppingListStore (which raises a change event)', function (done) {
		
		shoppingListStore.on('change', function () {
			assert.equal(shoppingListStore.items[0].description, "Test Item")
			assert(shoppingListStore.items[0].isInBasket);
			done();
		});

		addItemToBasket("1");
	});
});