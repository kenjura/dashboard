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
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Map */ "./src/components/Map/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_GeoData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/GeoData */ "./src/services/GeoData.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tracker.scss */ "./src/components/Tracker/Tracker.scss");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Tracker_scss__WEBPACK_IMPORTED_MODULE_13__);










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
      var currentDataPoint = this.state.data.filter(function (d) {
        return d.timestamp === value;
      })[0] || {
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
      Object(_services_GeoData__WEBPACK_IMPORTED_MODULE_11__["getLatest"])().then(function (data) {
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
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "tracker"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "title",
        row: "1"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Vehicle Statistics")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside", {
        id: "dates",
        row: "1"
      }, "dates"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "map",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.state.data,
        currentTimestamp: this.state.currentTimestamp
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        min: this.state.minTimestamp,
        max: this.state.maxTimestamp,
        onChange: function onChange(value) {
          return _this3.handleSliderChange(value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "readout"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, this.state.currentDataPoint.speed, " mph"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, this.state.currentDataPoint.rssi, " bars"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside", {
        id: "charts",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "signal"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Signal"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        type: "monotone",
        dataKey: "rssi",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "speed"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Speed"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        type: "monotone",
        dataKey: "speed",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "acceleration"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Acceleration"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["LineChart"], {
        width: 400,
        height: 200,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["XAxis"], {
        dataKey: "timestamp",
        type: "number",
        domain: ['dataMin', 'dataMax'],
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return new Date(val).toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], {
        type: "number",
        domain: ['dataMin', 'dataMax']
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        type: "monotone",
        dataKey: "acceleration",
        stroke: "#0000ff",
        yAxisId: 0
      })))));
    }
  }]);

  return Tracker;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50RGF0YVBvaW50Iiwic3BlZWQiLCJyc3NpIiwiY3VycmVudFRpbWVzdGFtcCIsImRhdGEiLCJtaW5UaW1lc3RhbXAiLCJtYXhUaW1lc3RhbXAiLCJpbml0IiwidmFsdWUiLCJmaWx0ZXIiLCJkIiwidGltZXN0YW1wIiwic2V0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRMYXRlc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ2YWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0lBR3FCQSxPOzs7OztBQUNuQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNuQixpRkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxzQkFBZ0IsRUFBRTtBQUNqQkMsYUFBSyxFQUFFLENBRFU7QUFFakJDLFlBQUksRUFBRTtBQUZXLE9BRE47QUFLWkMsc0JBQWdCLEVBQUUsQ0FMTjtBQU1aQyxVQUFJLEVBQUUsRUFOTTtBQU9aQyxrQkFBWSxFQUFFLENBUEY7QUFRWkMsa0JBQVksRUFBRTtBQVJGLEtBQWI7QUFIbUI7QUFhbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3pCLFVBQU1SLGdCQUFnQixHQUFHLEtBQUtELEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkssTUFBaEIsQ0FB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QUQ7QUFBZSxjQUFNLEVBQUM7QUFBdEIsUUFYRixFQVlFLDREQUFDLDhDQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDLGNBQTlCO0FBQTZDLGNBQU0sRUFBQyxTQUFwRDtBQUE4RCxlQUFPLEVBQUU7QUFBdkUsUUFaRixDQUZELENBckNELENBbEJNLENBQVA7QUE0RUM7Ozs7RUFoSGtDMEIsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJtYWluLmRmMDJiMjQyOGIyNDk1MmNjNjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2VvRGF0YSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCBNYXAgZnJvbSAnLi4vTWFwJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0TGF0ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJydXNoLCBMaW5lQ2hhcnQsIFJlZmVyZW5jZUxpbmUsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgQ2FydGVzaWFuR3JpZCwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0ICcuL1RyYWNrZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnREYXRhUG9pbnQ6IHtcblx0XHRcdFx0c3BlZWQ6IDAsXG5cdFx0XHRcdHJzc2k6IDAsXG5cdFx0XHR9LFxuXHRcdFx0Y3VycmVudFRpbWVzdGFtcDogMCxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0bWluVGltZXN0YW1wOiAwLFxuXHRcdFx0bWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcblx0XHR9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXHR0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSkge1xuICBcdGNvbnN0IGN1cnJlbnREYXRhUG9pbnQgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPT09IHZhbHVlKVswXSB8fCB7IHNwZWVkOi0xLCByc3NpOiAtMSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgY3VycmVudERhdGFQb2ludCwgY3VycmVudFRpbWVzdGFtcDp2YWx1ZSB9KSApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgXHQvLyBjb25zdCBkYXRhID0gYXdhaXQgR2VvRGF0YS5nZXRMYXRlc3QoKTtcbiAgXHQvLyB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgXHRnZXRMYXRlc3QoKVxuICBcdFx0LnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKGRhdGEpKVxuICBcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPD0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wKVxuXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJ0cmFja2VyXCI+XG5cdFx0XHQ8c2VjdGlvbiBpZD1cInRpdGxlXCIgcm93PVwiMVwiPlxuXHRcdFx0XHQ8aDE+VmVoaWNsZSBTdGF0aXN0aWNzPC9oMT5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiZGF0ZXNcIiByb3c9XCIxXCI+XG5cdFx0XHRcdGRhdGVzXG5cdFx0XHQ8L2FzaWRlPlxuXG5cdFx0XHQ8c2VjdGlvbiBpZD1cIm1hcFwiIHJvdz1cIjJcIj5cblx0XHRcdFx0PE1hcCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGN1cnJlbnRUaW1lc3RhbXA9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gLz5cbiAgICAgICAgXHRcdDxTbGlkZXIgbWluPXt0aGlzLnN0YXRlLm1pblRpbWVzdGFtcH0gbWF4PXt0aGlzLnN0YXRlLm1heFRpbWVzdGFtcH0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKX0gLz5cbiAgICAgICAgXHRcdDxkaXYgaWQ9XCJyZWFkb3V0XCI+XG4gICAgICAgIFx0XHRcdDxzcGFuPnt0aGlzLnN0YXRlLmN1cnJlbnREYXRhUG9pbnQuc3BlZWR9IG1waDwvc3Bhbj5cbiAgICAgICAgXHRcdFx0PHNwYW4+e3RoaXMuc3RhdGUuY3VycmVudERhdGFQb2ludC5yc3NpfSBiYXJzPC9zcGFuPlxuICAgICAgICBcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImNoYXJ0c1wiIHJvdz1cIjJcIj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzaWduYWxcIj5cblx0XHRcdFx0XHQ8aDI+U2lnbmFsPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInJzc2lcIiBzdHJva2U9XCIjZmY3MzAwXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwic3BlZWRcIj5cblx0XHRcdFx0XHQ8aDI+U3BlZWQ8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwic3BlZWRcIiBzdHJva2U9XCIjZmY3MzAwXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwiYWNjZWxlcmF0aW9uXCI+XG5cdFx0XHRcdFx0PGgyPkFjY2VsZXJhdGlvbjwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImFjY2VsZXJhdGlvblwiIHN0cm9rZT1cIiMwMDAwZmZcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvYXNpZGU+XG5cblx0XHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9