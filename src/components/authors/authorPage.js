"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var Authors = React.createClass({
  getInitialState: function(){
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },
  _onChange:function () {
    this.setState({authors: AuthorStore.getAllAuthors()});
  },
  componentWillMount: function () {
	AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnMount: function () {
	AuthorStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link activeClassName="" to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />

      </div>
    );
  }
});

module.exports = Authors;
