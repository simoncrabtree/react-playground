var React = require('react');
var shoppingListStore = require('./stores/shoppingListStore');
var ShoppingList = require('./components/ShoppingList.jsx');
var shoppingListItems = [{description: "Bacon"}, {description: "Eggs"}, {description: "Sausages"}];

React.render(
	<ShoppingList store={shoppingListStore} items={shoppingListItems}/>,
	document.getElementById('application')
)