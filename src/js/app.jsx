var React = require('react');
var NavigationMenu = require('./components/NavigationMenu.jsx');
var ShoppingList = require('./components/ShoppingList.jsx');
var About = require('./components/About.jsx');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Router = require('react-router');
var ReactRouterBootstrap = require('react-router-bootstrap');
var NavItemLink = ReactRouterBootstrap.NavItemLink;
var Link = Router.Link;


var App = React.createClass({
  render: function () {
    return (
      <div>
      <Navbar>
      <Nav>
      <NavItemLink to="shoppingList">Shopping List</NavItemLink>
      <NavItemLink to="about">About</NavItemLink>
      </Nav>
      </Navbar>
      <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <Route name="shoppingList" handler={ShoppingList}/>
    <Route name="about" handler={About}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
