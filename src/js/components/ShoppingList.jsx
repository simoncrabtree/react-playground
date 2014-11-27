var React = require('react');
var shoppingListStore = require('../stores/shoppingListStore');
var ShoppingListItem = require('./ShoppingListItem.jsx');

module.exports = React.createClass({
  update: function () {
    this.setState({
      items: shoppingListStore.items
    });
  },

  getInitialState: function () {
    return {
      items: shoppingListStore.items
    }
  },

  componentDidMount: function () {
    shoppingListStore.on('change', this.update);
  }, 

  componentWillUnmount: function () {
    shoppingListStore.removeListener('change', this.update);
  },

  renderShoppingListItems: function () {
    return this.state.items.map(function (item) {
      return <ShoppingListItem item={item} />
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
