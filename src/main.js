
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
//Router.HistoryLocation - for clean url but not supported in all browsers ex: IE < 10
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});