var React = require('react');
var ShoppingListItem = require('./ShoppingListItem.jsx');

module.exports = React.createClass({
	update: function () {
		this.setState({
			items: this.props.store.items
		});
	},

	componentWillMount: function () {
		this.update();
		this.props.store.on('change', this.update);
	}, 

	renderShoppingListItems: function () {
		return this.state.items.map(function (item) {
			return <ShoppingListItem description={item.description} />
		});
	},

	render: function () {
		return (
			<div>
				<div>({this.state.items.length}) Items</div>
				<ul>
				{this.renderShoppingListItems()}
				</ul>
			</div>
		)
	}
});