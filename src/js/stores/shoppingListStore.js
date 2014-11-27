var EventEmitter = require('events').EventEmitter;
var possibleItems = [
  {key: "1", description: "Bacon"},
  {key: "2", description: "Eggs"},
  {key: "3", description: "Sausages"},
  {key: "4", description: "Chicken"},
  {key: "5", description: "Frozen Peas"},
  {key: "6", description: "Fish Fingers"},
  {key: "7", description: "Baked Beans"},
];
var shoppingListStore = new EventEmitter;

shoppingListStore.items = [];

setInterval(function () {
  if(shoppingListStore.items.length === possibleItems.length)
    return;

  shoppingListStore.items.push(possibleItems[shoppingListStore.items.length]);
  shoppingListStore.emit('change');
}, 500);

module.exports = shoppingListStore;
