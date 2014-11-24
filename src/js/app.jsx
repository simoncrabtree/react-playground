var React = require('react');

var ShoppingList = require('./components/ShoppingList.jsx');
var shoppingListItems = [{description: "Bacon"}, {description: "Eggs"}, {description: "Sausages"}];

React.render(
	<ShoppingList items={shoppingListItems}/>,
	document.getElementById('application')
)