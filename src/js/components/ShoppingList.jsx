var React = require('react');
var ShoppingListItem = require('./ShoppingListItem.jsx');

module.exports = React.createClass({
	render: function () {
		var shoppingListItems = [];
		this.props.items.forEach(function (item) {
			shoppingListItems.push(<ShoppingListItem description={item.description} />)
		});

		return (
			<div>
				{shoppingListItems}
			</div>
		)
	}
});