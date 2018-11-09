webpackHotUpdate("main",{

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
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, this.state.currentDataPoint.speed, " mph"), ",", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", null, this.state.currentDataPoint.rssi, " bars"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("aside", {
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
        stroke: "#40bfbf",
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50RGF0YVBvaW50Iiwic3BlZWQiLCJyc3NpIiwiY3VycmVudFRpbWVzdGFtcCIsImRhdGEiLCJtaW5UaW1lc3RhbXAiLCJtYXhUaW1lc3RhbXAiLCJpbml0IiwidmFsdWUiLCJtYXAiLCJkIiwiT2JqZWN0IiwiYXNzaWduIiwidGltZURpZmYiLCJNYXRoIiwiYWJzIiwidGltZXN0YW1wIiwicmVkdWNlIiwicCIsImMiLCJJbmZpbml0eSIsInNldFN0YXRlIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwidmFsIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztJQUdxQkEsTzs7Ozs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsaUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCLEVBQUU7QUFDakJDLGFBQUssRUFBRSxDQURVO0FBRWpCQyxZQUFJLEVBQUU7QUFGVyxPQUROO0FBS1pDLHNCQUFnQixFQUFFLENBTE47QUFNWkMsVUFBSSxFQUFFLEVBTk07QUFPWkMsa0JBQVksRUFBRSxDQVBGO0FBUVpDLGtCQUFZLEVBQUU7QUFSRixLQUFiO0FBSG1CO0FBYWxCOzs7O3dDQUVtQjtBQUNuQixXQUFLQyxJQUFMO0FBQ0E7Ozt1Q0FFa0JDLEssRUFB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LHVCQUFBQyxHQUFHO0FBQUEsaUJBQUssSUFBSUMsSUFBSixDQUFTRCxHQUFULEVBQWNFLGNBQWQsRUFBTDtBQUFBO0FBQXRILFFBTkYsRUFPRSw0REFBQywrQ0FBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGNBQU0sRUFBRSxDQUFDLFNBQUQsRUFBVyxTQUFYO0FBQTdCLFFBUEYsRUFRRSw0REFBQywrQ0FBRCxPQVJGLEVBU0UsNERBQUMsdURBQUQ7QUFBZSxTQUFDLEVBQUUsS0FBS3JDLEtBQUwsQ0FBV0ksZ0JBQTdCO0FBQStDLGNBQU0sRUFBQyxLQUF0RDtBQUE0RCxhQUFLLEVBQUM7QUFBbEUsUUFURixFQVVFLDREQUFDLGlEQUFELE9BVkYsRUFXRSw0REFBQyx1REFBRDtBQUFlLGNBQU0sRUFBQztBQUF0QixRQVhGLEVBWUUsNERBQUMsOENBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMsY0FBOUI7QUFBNkMsY0FBTSxFQUFDLFNBQXBEO0FBQThELGVBQU8sRUFBRTtBQUF2RSxRQVpGLENBRkQsQ0FyQ0QsQ0FuQk0sQ0FBUDtBQTZFQzs7OztFQW5Ia0NrQyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Im1haW4uYmQ5MWY2NmJlZDI5ZTdjMzQzMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHZW9EYXRhIGZyb20gJy4uLy4uL3NlcnZpY2VzL0dlb0RhdGEnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJ1c2gsIExpbmVDaGFydCwgUmVmZXJlbmNlTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMaW5lIH0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgJy4vVHJhY2tlci5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudERhdGFQb2ludDoge1xuXHRcdFx0XHRzcGVlZDogMCxcblx0XHRcdFx0cnNzaTogMCxcblx0XHRcdH0sXG5cdFx0XHRjdXJyZW50VGltZXN0YW1wOiAwLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRtaW5UaW1lc3RhbXA6IDAsXG5cdFx0XHRtYXhUaW1lc3RhbXA6IDMyNTAzNjgwMDAwMDAwLFxuXHRcdH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBcdHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKSB7XG4gIFx0Y29uc3QgY3VycmVudERhdGFQb2ludCA9IHRoaXMuc3RhdGUuZGF0YVxuICBcdFx0Lm1hcChkID0+IE9iamVjdC5hc3NpZ24oe30sIGQsIHsgdGltZURpZmY6TWF0aC5hYnMoZC50aW1lc3RhbXAgLSB2YWx1ZSkgfSkpXG4gIFx0XHQucmVkdWNlKChwLGMpPT5jLnRpbWVEaWZmPHAudGltZURpZmY/YzpwLHsgdGltZURpZmY6SW5maW5pdHkgfSkgfHwgeyBzcGVlZDotMSwgcnNzaTogLTEgfTtcbiAgICB0aGlzLnNldFN0YXRlKCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IGN1cnJlbnREYXRhUG9pbnQsIGN1cnJlbnRUaW1lc3RhbXA6dmFsdWUgfSkgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gIFx0Ly8gY29uc3QgZGF0YSA9IGF3YWl0IEdlb0RhdGEuZ2V0TGF0ZXN0KCk7XG4gIFx0Ly8gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIFx0Z2V0TGF0ZXN0KClcbiAgXHRcdC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZShkYXRhKSlcbiAgXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihkID0+IGQudGltZXN0YW1wIDw9IHRoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcClcblxuXHRcdHJldHVybiA8ZGl2IGlkPVwidHJhY2tlclwiPlxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJ0aXRsZVwiIHJvdz1cIjFcIj5cblx0XHRcdFx0PGgxPlZlaGljbGUgU3RhdGlzdGljczwvaDE+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImRhdGVzXCIgcm93PVwiMVwiPlxuXHRcdFx0XHRkYXRlc1xuXHRcdFx0PC9hc2lkZT5cblxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJtYXBcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxNYXAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBjdXJyZW50VGltZXN0YW1wPXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IC8+XG4gICAgICAgIFx0XHQ8U2xpZGVyIG1pbj17dGhpcy5zdGF0ZS5taW5UaW1lc3RhbXB9IG1heD17dGhpcy5zdGF0ZS5tYXhUaW1lc3RhbXB9IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSl9IC8+XG4gICAgICAgIFx0XHQ8ZGl2IGlkPVwicmVhZG91dFwiPlxuICAgICAgICBcdFx0XHQ8c3Bhbj57dGhpcy5zdGF0ZS5jdXJyZW50RGF0YVBvaW50LnNwZWVkfSBtcGg8L3NwYW4+XG4gICAgICAgIFx0XHRcdCxcbiAgICAgICAgXHRcdFx0PHNwYW4+e3RoaXMuc3RhdGUuY3VycmVudERhdGFQb2ludC5yc3NpfSBiYXJzPC9zcGFuPlxuICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImNoYXJ0c1wiIHJvdz1cIjJcIj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzaWduYWxcIj5cblx0XHRcdFx0XHQ8aDI+U2lnbmFsPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInJzc2lcIiBzdHJva2U9XCIjZmY3MzAwXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwic3BlZWRcIj5cblx0XHRcdFx0XHQ8aDI+U3BlZWQ8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwic3BlZWRcIiBzdHJva2U9XCIjNDBiZmJmXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYWNjZWxlcmF0aW9uXCI+XG5cdFx0XHRcdFx0PGgyPkFjY2VsZXJhdGlvbjwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImFjY2VsZXJhdGlvblwiIHN0cm9rZT1cIiMwMDAwZmZcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvYXNpZGU+XG5cblx0XHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9