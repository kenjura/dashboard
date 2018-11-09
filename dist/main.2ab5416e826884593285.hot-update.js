webpackHotUpdate("main",{

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/App/App.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/App/App.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #E7E7E7;\n  color: #444;\n  font-family: sans-serif; }\n\n#app h1, #app h2, #app h3 {\n  color: inherit;\n  font-weight: lighter; }\n\n#app h1 {\n  font-size: 32px; }\n\n#app h1:first-of-type {\n  margin-top: 0; }\n\n#app nav#topnav {\n  background: #123456;\n  box-sizing: border-box;\n  color: white;\n  height: 100vh;\n  left: 0;\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  width: 200px; }\n  #app nav#topnav a {\n    color: inherit;\n    text-decoration: none; }\n  #app nav#topnav ul {\n    margin: 0;\n    padding: 0; }\n  #app nav#topnav li {\n    list-style: none;\n    margin: 1em 0;\n    padding: 0; }\n\n#app div#main {\n  position: absolute;\n  height: calc(100vh - 40px);\n  left: 200px;\n  padding: 20px;\n  top: 0;\n  width: calc(100vw - 200px); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/Tracker/Tracker.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/Tracker/Tracker.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tracker {\n  display: grid;\n  grid-template-columns: auto 10px 420px;\n  grid-template-rows: 60px 10px auto;\n  height: 100%; }\n  #tracker aside, #tracker section {\n    box-sizing: border-box; }\n  #tracker section {\n    grid-column-start: 1;\n    grid-column-end: 1; }\n  #tracker aside {\n    grid-column-start: 3;\n    grid-column-end: 3; }\n  #tracker [row=\"1\"] {\n    grid-row-start: 1;\n    grid-row-end: 1; }\n  #tracker [row=\"2\"] {\n    grid-row-start: 3;\n    grid-row-end: 3; }\n  #tracker #charts {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto 10px auto 10px auto; }\n    #tracker #charts section:nth-of-type(1) {\n      grid-row-start: 1;\n      grid-row-end: 1; }\n    #tracker #charts section:nth-of-type(2) {\n      grid-row-start: 3;\n      grid-row-end: 3; }\n    #tracker #charts section:nth-of-type(3) {\n      grid-row-start: 5;\n      grid-row-end: 5; }\n  #tracker #title {\n    --color: hsla(0,50%,50%,0.25); }\n  #tracker #dates {\n    --color: hsla(40,50%,50%,0.25); }\n  #tracker #map {\n    --color: hsla(80,50%,50%,0.25); }\n  #tracker #signal {\n    --color: hsla(120,50%,50%,0.25); }\n  #tracker #speed {\n    --color: hsla(180,50%,50%,0.25); }\n  #tracker #acceleration {\n    --color: hsla(240,50%,50%,0.25); }\n  #tracker #title, #tracker #dates, #tracker #map, #tracker #signal, #tracker #speed, #tracker #acceleration {\n    background: var(--color); }\n", ""]);

// exports


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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "app"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ }),

/***/ "./src/components/Tracker/Tracker.js":
/*!*******************************************!*\
  !*** ./src/components/Tracker/Tracker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tracker; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/slider/style */ "./node_modules/antd/lib/slider/style/index.js");
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/slider */ "./node_modules/antd/lib/slider/index.js");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Map */ "./src/components/Map/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_GeoData__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/GeoData */ "./src/services/GeoData.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Tracker.scss */ "./src/components/Tracker/Tracker.scss");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Tracker_scss__WEBPACK_IMPORTED_MODULE_15__);












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import GeoData from '../../services/GeoData';






var Tracker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tracker, _React$Component);

  function Tracker(props) {
    var _this;

    _classCallCheck(this, Tracker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tracker).call(this, props));
    _this.state = {
      currentDataPoint: {
        speed: 0,
        rssi: 0
      },
      currentTimestamp: 0,
      data: [],
      minTimestamp: 0,
      maxTimestamp: 32503680000000
    };
    return _this;
  }

  _createClass(Tracker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "handleSliderChange",
    value: function handleSliderChange(value) {
      var currentDataPoint = this.state.data.map(function (d) {
        return Object.assign({}, d, {
          timeDiff: Math.abs(d.timestamp - value)
        });
      }).reduce(function (p, c) {
        return c.timeDiff < p.timeDiff ? c : p;
      }, {
        timeDiff: Infinity
      }) || {
        speed: -1,
        rssi: -1
      };
      this.setState(Object.assign({}, this.state, {
        currentDataPoint: currentDataPoint,
        currentTimestamp: value
      }));
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      // const data = await GeoData.getLatest();
      // this.setState({ data });
      Object(_services_GeoData__WEBPACK_IMPORTED_MODULE_13__["getLatest"])().then(function (data) {
        return _this2.setState(data);
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var data = this.state.data.filter(function (d) {
        return d.timestamp <= _this3.state.currentTimestamp;
      });
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "tracker"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
        id: "title",
        row: "1"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", null, "Vehicle Statistics")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("aside", {
        id: "dates",
        row: "1"
      }, "dates"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
        id: "map",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: this.state.data,
        currentTimestamp: this.state.currentTimestamp
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        min: this.state.minTimestamp,
        max: this.state.maxTimestamp,
        onChange: function onChange(value) {
          return _this3.handleSliderChange(value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "readout"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, this.state.currentDataPoint.speed, " mph"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, this.state.currentDataPoint.rssi, " bars"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("aside", {
        id: "charts",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
        id: "signal"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h2", null, "Signal"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Line"], {
        type: "monotone",
        dataKey: "rssi",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
        id: "speed"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h2", null, "Speed"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Line"], {
        type: "monotone",
        dataKey: "speed",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("section", {
        id: "acceleration"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h2", null, "Acceleration"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["YAxis"], {
        type: "number",
        domain: ['dataMin', 'dataMax']
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__["Line"], {
        type: "monotone",
        dataKey: "acceleration",
        stroke: "#0000ff",
        yAxisId: 0
      })))));
    }
  }]);

  return Tracker;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);



/***/ }),

/***/ "./src/services/GeoData.js":
/*!*********************************!*\
  !*** ./src/services/GeoData.js ***!
  \*********************************/
/*! exports provided: getLatest, parseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatest", function() { return getLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseData", function() { return parseData; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5__);







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getLatest() {
  return _getLatest.apply(this, arguments);
}

function _getLatest() {
  _getLatest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var url, result, data, sorted, enriched, metadata;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/api/geo';
            _context.next = 3;
            return fetch(url);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            data = _context.sent;
            sorted = data.sort(function (a, b) {
              return a.timestamp - b.timestamp;
            });
            enriched = mapWithPrevious(sorted, function () {
              var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                speed: 0,
                timestamp: 0
              };
              var cur = arguments.length > 1 ? arguments[1] : undefined;
              if (!prev) prev = {
                speed: 0,
                timestamp: 0
              }; // ummmm....why is this necessary? Hello? V8?

              return Object.assign(cur, {
                acceleration: (cur.speed - prev.speed) / (cur.timestamp - prev.timestamp) * 1000
              });
            });
            metadata = parseData(data);
            return _context.abrupt("return", Object.assign({}, metadata, {
              data: enriched
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getLatest.apply(this, arguments);
}

function parseData(data) {
  var maxTimestamp = data.map(function (d) {
    return d.timestamp;
  }).reduce(function (p, c) {
    return c > p ? c : p;
  }, -Infinity);
  var minTimestamp = data.map(function (d) {
    return d.timestamp;
  }).reduce(function (p, c) {
    return c < p ? c : p;
  }, Infinity);
  return {
    maxTimestamp: maxTimestamp,
    minTimestamp: minTimestamp
  };
}

function mapWithPrevious(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = fn(i > 0 ? arr[i - 1] : null, arr[i]);
  }

  return arr;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYWNrZXIvVHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvR2VvRGF0YS5qcyJdLCJuYW1lcyI6WyJBcHAiLCJIb21lIiwiQWJvdXQiLCJUcmFja2VyIiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREYXRhUG9pbnQiLCJzcGVlZCIsInJzc2kiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsIm1hcCIsImQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aW1lRGlmZiIsIk1hdGgiLCJhYnMiLCJ0aW1lc3RhbXAiLCJyZWR1Y2UiLCJwIiwiYyIsIkluZmluaXR5Iiwic2V0U3RhdGUiLCJnZXRMYXRlc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJmaWx0ZXIiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ2YWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsInVybCIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInNvcnRlZCIsInNvcnQiLCJhIiwiYiIsImVucmljaGVkIiwibWFwV2l0aFByZXZpb3VzIiwicHJldiIsImN1ciIsImFjY2VsZXJhdGlvbiIsIm1ldGFkYXRhIiwicGFyc2VEYXRhIiwiYXJyIiwiZm4iLCJpIiwibGVuZ3Ro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akMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNHLE1BQXhCLEVBQWdDRCxDQUFDLEVBQWpDLEVBQXFDO0FBQ3BDRixPQUFHLENBQUNFLENBQUQsQ0FBSCxHQUFTRCxFQUFFLENBQUNDLENBQUMsR0FBQyxDQUFGLEdBQU1GLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFDLENBQUgsQ0FBVCxHQUFpQixJQUFsQixFQUF3QkYsR0FBRyxDQUFDRSxDQUFELENBQTNCLENBQVg7QUFDQTs7QUFDRCxTQUFPRixHQUFQO0FBQ0EsQyIsImZpbGUiOiJtYWluLjJhYjU0MTZlODI2ODg0NTkzMjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkc29ydCA9IFtdLnNvcnQ7XG52YXIgdGVzdCA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI0U3RTdFNztcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH1cXG5cXG4jYXBwIGgxLCAjYXBwIGgyLCAjYXBwIGgzIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IH1cXG5cXG4jYXBwIGgxIHtcXG4gIGZvbnQtc2l6ZTogMzJweDsgfVxcblxcbiNhcHAgaDE6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuI2FwcCBuYXYjdG9wbmF2IHtcXG4gIGJhY2tncm91bmQ6ICMxMjM0NTY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuICAjYXBwIG5hdiN0b3BuYXYgYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICNhcHAgbmF2I3RvcG5hdiB1bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2FwcCBuYXYjdG9wbmF2IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgcGFkZGluZzogMDsgfVxcblxcbiNhcHAgZGl2I21haW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XFxuICBsZWZ0OiAyMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3RyYWNrZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxMHB4IDQyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDEwcHggYXV0bztcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgI3RyYWNrZXIgYXNpZGUsICN0cmFja2VyIHNlY3Rpb24ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAjdHJhY2tlciBzZWN0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMTsgfVxcbiAgI3RyYWNrZXIgYXNpZGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzOyB9XFxuICAjdHJhY2tlciBbcm93PVxcXCIxXFxcIl0ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiAxOyB9XFxuICAjdHJhY2tlciBbcm93PVxcXCIyXFxcIl0ge1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1yb3ctZW5kOiAzOyB9XFxuICAjdHJhY2tlciAjY2hhcnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMTBweCBhdXRvIDEwcHggYXV0bzsgfVxcbiAgICAjdHJhY2tlciAjY2hhcnRzIHNlY3Rpb246bnRoLW9mLXR5cGUoMSkge1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICAgIGdyaWQtcm93LWVuZDogMTsgfVxcbiAgICAjdHJhY2tlciAjY2hhcnRzIHNlY3Rpb246bnRoLW9mLXR5cGUoMikge1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICAgIGdyaWQtcm93LWVuZDogMzsgfVxcbiAgICAjdHJhY2tlciAjY2hhcnRzIHNlY3Rpb246bnRoLW9mLXR5cGUoMykge1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xcbiAgICAgIGdyaWQtcm93LWVuZDogNTsgfVxcbiAgI3RyYWNrZXIgI3RpdGxlIHtcXG4gICAgLS1jb2xvcjogaHNsYSgwLDUwJSw1MCUsMC4yNSk7IH1cXG4gICN0cmFja2VyICNkYXRlcyB7XFxuICAgIC0tY29sb3I6IGhzbGEoNDAsNTAlLDUwJSwwLjI1KTsgfVxcbiAgI3RyYWNrZXIgI21hcCB7XFxuICAgIC0tY29sb3I6IGhzbGEoODAsNTAlLDUwJSwwLjI1KTsgfVxcbiAgI3RyYWNrZXIgI3NpZ25hbCB7XFxuICAgIC0tY29sb3I6IGhzbGEoMTIwLDUwJSw1MCUsMC4yNSk7IH1cXG4gICN0cmFja2VyICNzcGVlZCB7XFxuICAgIC0tY29sb3I6IGhzbGEoMTgwLDUwJSw1MCUsMC4yNSk7IH1cXG4gICN0cmFja2VyICNhY2NlbGVyYXRpb24ge1xcbiAgICAtLWNvbG9yOiBoc2xhKDI0MCw1MCUsNTAlLDAuMjUpOyB9XFxuICAjdHJhY2tlciAjdGl0bGUsICN0cmFja2VyICNkYXRlcywgI3RyYWNrZXIgI21hcCwgI3RyYWNrZXIgI3NpZ25hbCwgI3RyYWNrZXIgI3NwZWVkLCAjdHJhY2tlciAjYWNjZWxlcmF0aW9uIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3IpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi4vVHJhY2tlcic7XG5cbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCAnLi9BcHAuc2Nzcyc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmxlc3MnOyBcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8Um91dGVyPlxuICAgIDxkaXYgaWQ9XCJhcHBcIj5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3RyYWNrZXJcIiBjb21wb25lbnQ9e1RyYWNrZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9Sb3V0ZXI+XG4pO1xuXG5jb25zdCBIb21lID0gKCkgPT4gPGgxPkhvbWU8L2gxPjtcbmNvbnN0IEFib3V0ID0gKCkgPT4gPGgxPkFib3V0PC9oMT47XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPG5hdiBpZD1cInRvcG5hdlwiPlxuICAgIDxoMT5Ta3lsbzwvaDE+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIHRvPVwiL3RyYWNrZXJcIj5UcmFja2VyPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyBpbXBvcnQgR2VvRGF0YSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCBNYXAgZnJvbSAnLi4vTWFwJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0TGF0ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJydXNoLCBMaW5lQ2hhcnQsIFJlZmVyZW5jZUxpbmUsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgQ2FydGVzaWFuR3JpZCwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0ICcuL1RyYWNrZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnREYXRhUG9pbnQ6IHtcblx0XHRcdFx0c3BlZWQ6IDAsXG5cdFx0XHRcdHJzc2k6IDAsXG5cdFx0XHR9LFxuXHRcdFx0Y3VycmVudFRpbWVzdGFtcDogMCxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0bWluVGltZXN0YW1wOiAwLFxuXHRcdFx0bWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcblx0XHR9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXHR0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSkge1xuICBcdGNvbnN0IGN1cnJlbnREYXRhUG9pbnQgPSB0aGlzLnN0YXRlLmRhdGFcbiAgXHRcdC5tYXAoZCA9PiBPYmplY3QuYXNzaWduKHt9LCBkLCB7IHRpbWVEaWZmOk1hdGguYWJzKGQudGltZXN0YW1wIC0gdmFsdWUpIH0pKVxuICBcdFx0LnJlZHVjZSgocCxjKT0+Yy50aW1lRGlmZjxwLnRpbWVEaWZmP2M6cCx7IHRpbWVEaWZmOkluZmluaXR5IH0pIHx8IHsgc3BlZWQ6LTEsIHJzc2k6IC0xIH07XG4gICAgdGhpcy5zZXRTdGF0ZSggT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBjdXJyZW50RGF0YVBvaW50LCBjdXJyZW50VGltZXN0YW1wOnZhbHVlIH0pICk7XG4gIH1cblxuICBpbml0KCkge1xuICBcdC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBHZW9EYXRhLmdldExhdGVzdCgpO1xuICBcdC8vIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICBcdGdldExhdGVzdCgpXG4gIFx0XHQudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoZGF0YSkpXG4gIFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA8PSB0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXApXG5cblx0XHRyZXR1cm4gPGRpdiBpZD1cInRyYWNrZXJcIj5cblx0XHRcdDxzZWN0aW9uIGlkPVwidGl0bGVcIiByb3c9XCIxXCI+XG5cdFx0XHRcdDxoMT5WZWhpY2xlIFN0YXRpc3RpY3M8L2gxPlxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJkYXRlc1wiIHJvdz1cIjFcIj5cblx0XHRcdFx0ZGF0ZXNcblx0XHRcdDwvYXNpZGU+XG5cblx0XHRcdDxzZWN0aW9uIGlkPVwibWFwXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8TWFwIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gY3VycmVudFRpbWVzdGFtcD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSAvPlxuICAgICAgICBcdFx0PFNsaWRlciBtaW49e3RoaXMuc3RhdGUubWluVGltZXN0YW1wfSBtYXg9e3RoaXMuc3RhdGUubWF4VGltZXN0YW1wfSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpfSAvPlxuICAgICAgICBcdFx0PGRpdiBpZD1cInJlYWRvdXRcIj5cbiAgICAgICAgXHRcdFx0PHNwYW4+e3RoaXMuc3RhdGUuY3VycmVudERhdGFQb2ludC5zcGVlZH0gbXBoPC9zcGFuPlxuICAgICAgICBcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS5jdXJyZW50RGF0YVBvaW50LnJzc2l9IGJhcnM8L3NwYW4+XG4gICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiY2hhcnRzXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNpZ25hbFwiPlxuXHRcdFx0XHRcdDxoMj5TaWduYWw8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicnNzaVwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPlxuXHRcdFx0XHRcdDxoMj5TcGVlZDwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyAvPlxuXHRcdFx0XHRcdCAgPEJydXNoIC8+XG5cdFx0XHRcdFx0ICA8UmVmZXJlbmNlTGluZSB4PXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IHN0cm9rZT1cInJlZFwiIGxhYmVsPVwiQ3VycmVudCBUaW1lXCIgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzcGVlZFwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhY2NlbGVyYXRpb25cIj5cblx0XHRcdFx0XHQ8aDI+QWNjZWxlcmF0aW9uPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiYWNjZWxlcmF0aW9uXCIgc3Ryb2tlPVwiIzAwMDBmZlwiIHlBeGlzSWQ9ezB9IC8+XG5cdFx0XHRcdFx0ICB7Lyo8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHZcIiBzdHJva2U9XCIjMzg3OTA4XCIgeUF4aXNJZD17MX0gLz4qL31cblx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9hc2lkZT5cblxuXHRcdDwvZGl2PjtcbiAgfVxufSIsImV4cG9ydCB7IGdldExhdGVzdCwgcGFyc2VEYXRhIH07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdCgpIHtcblx0Y29uc3QgdXJsID0gJy9hcGkvZ2VvJztcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cdGNvbnN0IHNvcnRlZCA9IGRhdGEuc29ydCgoYSxiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKTtcblx0Y29uc3QgZW5yaWNoZWQgPSBtYXBXaXRoUHJldmlvdXMoc29ydGVkLCAocHJldj17IHNwZWVkOjAsIHRpbWVzdGFtcDowIH0sIGN1cikgPT4ge1xuXHRcdGlmICghcHJldikgcHJldiA9IHsgc3BlZWQ6MCwgdGltZXN0YW1wOjAgfTsgLy8gdW1tbW0uLi4ud2h5IGlzIHRoaXMgbmVjZXNzYXJ5PyBIZWxsbz8gVjg/XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oY3VyLCB7XG5cdFx0XHRhY2NlbGVyYXRpb246IChjdXIuc3BlZWQgLSBwcmV2LnNwZWVkKSAvIChjdXIudGltZXN0YW1wIC0gcHJldi50aW1lc3RhbXApICogMTAwMFxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBtZXRhZGF0YSA9IHBhcnNlRGF0YShkYXRhKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbWV0YWRhdGEsIHsgZGF0YTplbnJpY2hlZCB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcblx0Y29uc3QgbWF4VGltZXN0YW1wID0gZGF0YS5tYXAoZCA9PiBkLnRpbWVzdGFtcCkucmVkdWNlKChwLGMpPT5jPnA/YzpwLC1JbmZpbml0eSk7XG5cdGNvbnN0IG1pblRpbWVzdGFtcCA9IGRhdGEubWFwKGQgPT4gZC50aW1lc3RhbXApLnJlZHVjZSgocCxjKT0+YzxwP2M6cCxJbmZpbml0eSk7XG5cblx0cmV0dXJuIHtcblx0XHRtYXhUaW1lc3RhbXAsXG5cdFx0bWluVGltZXN0YW1wLFxuXHR9XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhQcmV2aW91cyhhcnIsIGZuKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXJyW2ldID0gZm4oaT4wID8gYXJyW2ktMV0gOiBudWxsLCBhcnJbaV0pO1xuXHR9XG5cdHJldHVybiBhcnI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==