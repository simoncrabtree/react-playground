var React = require('react');
var ShoppingList = require('./components/ShoppingList.jsx');
var About = require('./components/About.jsx');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
      <header>
      <ul>
      <li><Link to="app">Shopping List</Link></li>
      <li><Link to="about">About</Link></li>
      </ul>
      </header>

      <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
  <Route name="about" handler={About}/>
  <DefaultRoute handler={ShoppingList}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
