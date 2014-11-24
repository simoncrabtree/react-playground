var EventEmitter = require('events').EventEmitter;
var possibleItems = [
	{description: "Bacon"},
	{description: "Eggs"},
	{description: "Sausages"},
	{description: "Chicken"},
	{description: "Frozen Peas"},
	{description: "Fish Fingers"},
	{description: "Baked Beans"},
];
var shoppingListStore = new EventEmitter;

shoppingListStore.items = [];

setInterval(function () {
	if(shoppingListStore.items.length === possibleItems.length)
		return;

	shoppingListStore.items.push(possibleItems[shoppingListStore.items.length]);
	shoppingListStore.emit('change');
}, 2000);

module.exports = shoppingListStore;