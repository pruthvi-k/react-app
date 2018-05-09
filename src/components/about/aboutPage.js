"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
	willTransitionTo: function (transition, params, query, callback) {
		if(!confirm('Are you sure you want to saty on this page')) {
		  transition.abort();
		} else {
		  callback();
		}
	},
	willTransitionFrom: function (transition, component) {
	  if(!confirm('Are you sure you want to leave this page')) {
		transition.abort();
	  }
	}
  },
  render: function () {
	return (
	  <div>
		<h1>About</h1>
		<p>Application Uses:
		<ul>
		  <li>React</li>
		  <li>React Router</li>
		  <li>Flux</li>
		  <li>Node</li>
		  <li>Gulp</li>
		  <li>Browserify</li>
		  <li>Bootstrap</li>
		</ul>
		</p>
	  </div>
	);
  }
});

module.exports = About;