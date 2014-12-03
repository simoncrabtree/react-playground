var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Router = require('react-router');
var ReactRouterBootstrap = require('react-router-bootstrap');
var NavItemLink = ReactRouterBootstrap.NavItemLink;

module.exports = React.createClass({
	render: function () {
		return (
			<Navbar>
			<Nav>
			<NavItemLink to="app">Shopping List</NavItemLink>
			<NavItemLink to="about">About</NavItemLink>
			</Nav>
			</Navbar>
		)
	}
});