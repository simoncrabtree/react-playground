var EventEmitter = require('events').EventEmitter;
var shoppingListStore = new EventEmitter;

shoppingListStore.items = [];

module.exports = shoppingListStore;