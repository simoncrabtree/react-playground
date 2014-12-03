var React = require('react');
var addItemToBasket = require('../commands/addItemToBasket');

module.exports = React.createClass({
  render: function () {
    return (
      <li onClick={addItemToBasket.bind(this, this.props.item.key)}>{this.props.item.description} {this.props.item.isInBasket ? "(In Basket)": ""}</li>
    )
  }
});
