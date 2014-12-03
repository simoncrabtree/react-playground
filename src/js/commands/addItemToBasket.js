var shoppingListStore = require('../stores/shoppingListStore');

module.exports = function (itemKey) {

	shoppingListStore.items.filter(function (item) {
		return item.key === itemKey;
	}).map(function (item) {
		item.isInBasket = true;
	});

	shoppingListStore.emit('change');
}