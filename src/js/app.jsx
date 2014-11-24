var React = require('react');

var HelloWorld = require('./components/helloWorld.jsx');

React.render(
	<HelloWorld name="Simon"/>,
	document.getElementById('application')
)