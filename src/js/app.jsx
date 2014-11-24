var React = require('react');

var HelloWorld = React.createClass({
	render: function () {
		return <div>Hello {this.props.name}</div>
	}
});

React.renderComponent(
	<HelloWorld name="Simon"/>,
	document.getElementById('application')
)