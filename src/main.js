
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

// var Home = require('./components/homePage');
// var About = require('./components/about/aboutPage');
// var Header = require('./components/common/header');
// (function (win) {
//   "use strict";
//
//   var App = React.createClass({
// 	render: function () {
// 	  var Child;
// console.log('route',this.props.route)
// 	  switch (this.props.route) {
// 		case 'about':
// 		  Child = About;
// 		  console.log('case','ab');
// 		  break;
// 		default:
// 		  Child = Home;
// 		  console.log('case',Child);
//
// 		  break;
// 	  }
//
// 	  return (
// 	    <div>
// 		<Header/>
// 		<Child/>
// 	  </div>
// 	  );
// 	}
//   });
//
//   function render() {
// 	var route = win.location.hash.substr(1);
// 	React.render(<App route={route}/>, document.getElementById('app'));
//   }
//
//   win.addEventListener('hashchange', render);
//   render();
//   React.render(<Home/>, document.getElementById('app'));
// })(window);
>>>>>>> bcb9c6871b5cf9638f82caa3eb6e9ca36690fc79
