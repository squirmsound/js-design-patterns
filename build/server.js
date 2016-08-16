/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _express = __webpack_require__(2);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _http = __webpack_require__(3);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _socket = __webpack_require__(4);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _chalk = __webpack_require__(5);
	
	var _chalk2 = _interopRequireDefault(_chalk);
	
	var _rxjs = __webpack_require__(6);
	
	var _observableSocket = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isDevelopment = process.env.NODE_ENV !== 'production';
	
	// Setup
	// ------------------------------------------------------------------
	var app = (0, _express2.default)();
	var server = new _http2.default.Server(app);
	var io = (0, _socket2.default)(server);
	
	// Client Webpack
	// ------------------------------------------------------------------
	if (process.env.USE_WEBPACK === 'true') {
	  var webpackMiddleware = __webpack_require__(8);
	  var webpackHotMiddleware = __webpack_require__(9);
	  var webpack = __webpack_require__(10);
	  var clientConfig = __webpack_require__(11);
	
	  var compiler = webpack(clientConfig);
	  app.use(webpackMiddleware(compiler, {
	    publicPath: '/build/',
	    stats: {
	      colors: true,
	      chunks: false,
	      assets: false,
	      timings: false,
	      modules: false,
	      hash: false,
	      version: false
	    }
	  }));
	
	  app.use(webpackHotMiddleware(compiler));
	
	  console.log(_chalk2.default.bgRed('USING WEBPACK DEV MIDDLEWARE.... THIS IS FOR DEV ONLY!'));
	}
	
	// Configure Express
	// ------------------------------------------------------------------
	app.set('view engine', 'jade');
	app.use(_express2.default.static('public'));
	
	var useExternalStyles = !isDevelopment;
	app.get('/', function (req, res) {
	  res.render('index', {
	    useExternalStyles: useExternalStyles
	  });
	});
	
	// Modules
	// ------------------------------------------------------------------
	
	// Socket
	// ------------------------------------------------------------------
	io.on('connection', function (socket) {
	  console.log('GOT CONNECTION FROM ' + socket.request.connection.remoteAddress);
	
	  var client = new _observableSocket.ObservableSocket(socket);
	  // client.onAction('login', creds => {
	  //   throw new Error('ERROR');
	  // });
	  // client.onAction('login', creds => {
	  //   return Observable.of(`USER: ${creds.username}`).delay(3000);
	  // });
	  client.onAction('login', function (creds) {
	    return _rxjs.Observable.of({ username: creds.username });
	  });
	});
	
	// Startup
	// ------------------------------------------------------------------
	var port = process.env.PORT || 3000;
	function startServer() {
	  server.listen(port, function () {
	    console.log('STARTED HTTP SERVER ON ' + port);
	  });
	}
	
	startServer();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("source-map-support/register");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ObservableSocket = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.clientMessage = clientMessage;
	
	var _rxjs = __webpack_require__(6);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function clientMessage(message) {
	  // Stack trace exception
	
	  var error = new Error(message);
	  error.clientMessage = message;
	  return error;
	}
	
	var ObservableSocket = exports.ObservableSocket = function () {
	  _createClass(ObservableSocket, [{
	    key: 'isConnected',
	
	    // Know the state of my socket
	
	    get: function get() {
	      return this._state.isConnected;
	    }
	  }, {
	    key: 'isReconnecting',
	    get: function get() {
	      return this._state.isReconnecting;
	    }
	  }, {
	    key: 'isDead',
	    get: function get() {
	      return !this.isConnected && !this.isReconnecting;
	    }
	  }]);
	
	  function ObservableSocket(socket) {
	    var _this = this;
	
	    _classCallCheck(this, ObservableSocket);
	
	    this._socket = socket;
	    this._state = {};
	
	    // Callbacks to add to our socket.
	    // So, we can keep track of the actions we are able to respond to
	
	    this._actionCallbacks = {};
	
	    // Track individual requests that were sent to the server, based of the reqeustId
	
	    this._requests = {};
	
	    // Auto incremented everytime we send out a request
	
	    this._nextRequestId = 0;
	
	    // Track the state of the server connection
	
	    this.status$ = _rxjs.Observable.merge(this.on$('connect').map(function () {
	      return { isConnected: true };
	    }), this.on$('disconnect').map(function () {
	      return { isConnected: false };
	    }), this.on$('reconnecting').map(function (attempt) {
	      return {
	        isConnected: false,
	        isReconnecting: true,
	        attempt: attempt
	      };
	    }), this.on$('reconnect_failed').map(function () {
	      return { isConnected: false, isReconnecting: false };
	    })).publishReplay(1)
	
	    // if sombody new subscribes, dont reconnect to all event handlers. instead share the instance of all the event handler. but when someone new subscribes publish the latest.
	
	    .refCount();
	
	    this.status$.subscribe(function (state) {
	      return _this._state = state;
	    });
	  }
	
	  // Basic Wrappers
	  //-----------------------------
	
	
	  _createClass(ObservableSocket, [{
	    key: 'on$',
	    value: function on$(event) {
	      return _rxjs.Observable.fromEvent(this._socket, event);
	    }
	  }, {
	    key: 'on',
	    value: function on(event, callback) {
	      this._socket.on(event, callback);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, callback) {
	      this._socket.off(event, callback);
	    }
	  }, {
	    key: 'emit',
	    value: function emit(evetn, arg) {
	      this._socket.emit(event, arg);
	    }
	
	    // Bind to these actions and then send a request id when we emit
	    // Emit (Client Side)
	    //-----------------------------
	
	  }, {
	    key: 'emitAction$',
	    value: function emitAction$(action, arg) {
	
	      // send an action to the server, expect a callback response from the server with an id.
	
	      // this._socket.on(action, () => /* success */);
	      // this._socket.on(`${action}:fail`, () => /* fail */);
	      // this._socket.emit(action, arg requestId);
	
	      var id = this._nextRequestId++;
	
	      this._registerCallbacks(action);
	
	      // Everytime we subscribe to the subject, if it has a value, it will send it back to us. Otherwise wait
	
	      var subject = this._requests[id] = new _rxjs.ReplaySubject(1);
	      this._socket.emit(action, arg, id);
	      return subject;
	    }
	
	    // Register the success & failure callbacks on the socket.
	    // When the server sends me something, I'm supposed to do something
	
	  }, {
	    key: '_registerCallbacks',
	    value: function _registerCallbacks(action) {
	      var _this2 = this;
	
	      if (this._actionCallbacks.hasOwnProperty(action)) return;
	
	      this._socket.on(action, function (arg, id) {
	        var request = _this2._popRequest(id);
	        if (!request) return;
	
	        request.next(arg);
	        request.complete();
	      });
	
	      this._socket.on(action + ':fail', function (arg, id) {
	        var request = _this2._popRequest(id);
	        if (!request) return;
	
	        request.error(arg);
	      });
	
	      this._actionCallbacks[action] = true;
	    }
	
	    // Takes id from the server request
	    // Searches for request by id and returns it
	    // Then remove it from internal representation
	
	  }, {
	    key: '_popRequest',
	    value: function _popRequest(id) {
	
	      // if a request was sent with an id that I don't know about.
	
	      if (!this._requests.hasOwnProperty(id)) {
	        console.error('Event with the id ' + id + ' was returned twice, or the server did not send back an ID!');
	      }
	
	      var request = this._requests[id];
	      delete this._requests[id];
	      return request;
	    }
	
	    // On (Server Side)
	    //-----------------------------
	
	  }, {
	    key: 'onAction',
	    value: function onAction(action, callback) {
	      var _this3 = this;
	
	      this._socket.on(action, function (arg, requestId) {
	        try {
	          var _ret = function () {
	            var value = callback(arg);
	            if (!value) {
	              _this3._socket.emit(action, null, requestId);
	              return {
	                v: void 0
	              };
	            }
	
	            if (typeof value.subscribe !== 'function') {
	              _this3._socket.emit(action, value, requestId);
	              return {
	                v: void 0
	              };
	            }
	
	            var hasValue = false;
	            value.subscribe({
	              next: function next(item) {
	                if (hasValue) throw new Error('Action ' + action + ' produced more than one value.');
	
	                _this3._socket.emit(action, item, requestId);
	                hasValue = true;
	              },
	
	              error: function error(_error) {
	                _this3._emitError(action, requestId, _error);
	                console.error(_error.stack || _error);
	              },
	
	              complete: function complete() {
	                if (!hasValue) {
	                  _this3._socket.emit(action, null, requestId);
	                }
	              }
	            });
	          }();
	
	          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        } catch (error) {
	          if (typeof requestId !== 'undefined') _this3._emitError(action, requestId, error);
	
	          console.error(error.stack || error);
	        }
	      });
	    }
	  }, {
	    key: '_emitError',
	    value: function _emitError(action, id, error) {
	      var message = error && error.clientMessage || 'FATAL ERROR';
	      this._socket.emit(action + ':fail', { message: message }, id);
	    }
	  }]);

	  return ObservableSocket;
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(12),
	    webpack = __webpack_require__(10),
	    ExtractTextPlugin = __webpack_require__(13);
	
	var vendorModules = ['jquery', 'lodash', 'socket.io-client', 'rxjs', 'moment', 'moment-duration-format'];
	
	var dirname = path.resolve('./');
	function createConfig(isDebug) {
		var devTool = isDebug ? 'eval-source-map' : 'source-map';
		var plugins = [new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')];
	
		var cssLoader = { test: /\.css$/, loader: 'style!css' };
		var sassLoader = { test: /\.scss$/, loader: 'style!css!sass' };
		var appEntry = ['./src/client/application.js'];
	
		if (!isDebug) {
			plugins.push(new webpack.optimize.UglifyJsPlugin());
			plugins.push(new ExtractTextPlugin('[name].css'));
	
			cssLoader.loader = ExtractTextPlugin.extract('style', 'css');
			sassLoader.loader = ExtractTextPlugin.extract('style', 'css!sass');
		} else {
			plugins.push(new webpack.HotModuleReplacementPlugin());
			appEntry.splice(0, 0, 'webpack-hot-middleware/client');
		}
	
		// ---------------------
		// WEBPACK CONFIG
		return {
			devtool: devTool,
			entry: {
				application: appEntry,
				vendor: vendorModules
			},
			output: {
				path: path.join(dirname, 'public', 'build'),
				filename: '[name].js',
				publicPath: '/build/'
			},
			resolve: {
				alias: {
					shared: path.join(dirname, 'src', 'shared')
				}
			},
			module: {
				loaders: [{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
				// { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
				{ test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: 'url-loader?limit=1024' }, cssLoader, sassLoader]
			},
			plugins: plugins
		};
		// ---------------------
	}
	
	module.exports = createConfig(true);
	module.exports.create = createConfig;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map