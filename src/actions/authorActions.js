"use strict";

var Dispatcher = require ('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionType');

var AuthorActions = {
  createAuthor: function (author) {
	var newAuthor = AuthorApi.saveAuthor(author);

	//Hey dispatcher, go tell all the stores that a author was just created
	Dispatcher.dispatch({
	  actionType: ActionTypes.CREATE_AUTHOR,
	  author: author
	});
  },
  updateAuthor: function (author) {
	var updatedAuthor = AuthorApi.saveAuthor(author);

	//Hey dispatcher, go tell all the stores that a author was just updated
	Dispatcher.dispatch({
	  actionType: ActionTypes.UPDATE_AUTHOR,
	  author: updatedAuthor
	});
  },
  deleteAuthor: function (id) {
  AuthorApi.deleteAuthor(id);

  //Hey dispatcher, go tell all the stores that a author was just updated
  Dispatcher.dispatch({
	actionType: ActionTypes.DELETE_AUTHOR,
	id: id
  });
}
};

module.exports = AuthorActions;