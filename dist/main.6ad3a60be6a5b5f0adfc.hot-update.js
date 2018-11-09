webpackHotUpdate("main",{

/***/ "./node_modules/antd/dist/antd.css":
false,

/***/ "./node_modules/antd/dist/antd.less":
/*!******************************************!*\
  !*** ./node_modules/antd/dist/antd.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!../../less-loader/dist/cjs.js!./antd.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/dist/antd.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader!../../less-loader/dist/cjs.js!./antd.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/dist/antd.less", function() {
		var newContent = __webpack_require__(/*! !../../css-loader!../../less-loader/dist/cjs.js!./antd.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/dist/antd.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/dist/antd.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./node_modules/antd/dist/antd.less ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/less-loader/dist/cjs.js):\nError: Cannot find module 'less'\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:587:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:513:25)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\n    at Object.<anonymous> (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/less-loader/dist/index.js:7:13)\n    at Module._compile (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)\n    at Module.load (internal/modules/cjs/loader.js:605:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:536:3)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\n    at Object.<anonymous> (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/less-loader/dist/cjs.js:3:18)\n    at Module._compile (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)\n    at Module.load (internal/modules/cjs/loader.js:605:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:544:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:536:3)\n    at Module.require (internal/modules/cjs/loader.js:643:17)\n    at require (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\n    at loadLoader (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/webpack/lib/NormalModule.js:265:3)\n    at NormalModule.build (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/webpack/lib/NormalModule.js:412:15)\n    at Compilation.buildModule (/Users/aochtinsky/Dropbox/Dev/github/skylo/node_modules/webpack/lib/Compilation.js:626:10)");

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tracker */ "./src/components/Tracker/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.scss */ "./src/components/App/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.less */ "./node_modules/antd/dist/antd.less");
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_4__);






var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: Home
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/about",
    component: About
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/tracker",
    component: _Tracker__WEBPACK_IMPORTED_MODULE_1__["default"]
  }))));
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Home");
};

var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About");
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    id: "topnav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Skylo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about"
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/tracker"
  }, "Tracker"))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9kaXN0L2FudGQubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkhvbWUiLCJBYm91dCIsIlRyYWNrZXIiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxjQUFjLG1CQUFPLENBQUMsaUxBQXVFOztBQUU3Riw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUZBQXNDOztBQUUzRDs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsaUxBQXVFO0FBQzFGLG1CQUFtQixtQkFBTyxDQUFDLGlMQUF1RTs7QUFFbEcsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNWLDJEQUFDLDhEQUFELFFBQ0Usd0VBQ0UsMkRBQUMsTUFBRCxPQURGLEVBR0U7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUNFLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQXNCLGFBQVMsRUFBRUM7QUFBakMsSUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFFQztBQUFoQyxJQUZGLEVBR0UsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFTLEVBQUVDLGdEQUFPQTtBQUF6QyxJQUhGLENBSEYsQ0FERixDQURVO0FBQUEsQ0FBWjs7QUFjQSxJQUFNRixJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sOEVBQU47QUFBQSxDQUFiOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsU0FBTSwrRUFBTjtBQUFBLENBQWQ7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUssTUFBRSxFQUFDO0FBQVIsS0FDRSwrRUFERixFQUVFLHVFQUNFLHVFQUNFLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsWUFERixDQURGLEVBSUUsdUVBQ0UsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxhQURGLENBSkYsRUFPRSx1RUFDRSwyREFBQyxxREFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGVBREYsQ0FQRixDQUZGLENBRGE7QUFBQSxDQUFmOztBQWlCZUosa0VBQWYsRSIsImZpbGUiOiJtYWluLjZhZDNhNjBiZTZhNWI1ZjBhZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FudGQubGVzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW50ZC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FudGQubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFja2VyIGZyb20gJy4uL1RyYWNrZXInO1xuXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgJy4vQXBwLnNjc3MnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5sZXNzJzsgXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFJvdXRlcj5cbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdHJhY2tlclwiIGNvbXBvbmVudD17VHJhY2tlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1JvdXRlcj5cbik7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiA8aDE+SG9tZTwvaDE+O1xuY29uc3QgQWJvdXQgPSAoKSA9PiA8aDE+QWJvdXQ8L2gxPjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8bmF2IGlkPVwidG9wbmF2XCI+XG4gICAgPGgxPlNreWxvPC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgdG89XCIvdHJhY2tlclwiPlRyYWNrZXI8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=