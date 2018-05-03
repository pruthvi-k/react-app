"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function () {
	return (
	  <div className="jumbotron">
		<h1>Page Not Found</h1>
		<p>Woops! Sorry, there is nothing to see here</p>
		<Link to="app" className="btn btn-primary btn-lg"> Back to More </Link>
	  </div>
	);
  }
});

module.exports = NotFoundPage;