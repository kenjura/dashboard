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
      this.setState(Object.assign({}, this.state, {
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
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside", {
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
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["ReferenceLine"], {
        x: this.state.currentTimestamp,
        stroke: "red",
        label: "Current Time"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        type: "monotone",
        dataKey: "acceleration",
        stroke: "#ff7300",
        yAxisId: 0
      })))));
    }
  }]);

  return Tracker;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsImhhbmRsZVNsaWRlckNoYW5nZSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInZhbCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7SUFHcUJBLE87Ozs7O0FBQ25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLGlGQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLHNCQUFnQixFQUFFLENBRE47QUFFWkMsVUFBSSxFQUFFLEVBRk07QUFHWkMsa0JBQVksRUFBRSxDQUhGO0FBSVpDLGtCQUFZLEVBQUU7QUFKRixLQUFiO0FBSG1CO0FBU2xCOzs7O3dDQUVtQjtBQUNuQixXQUFLQyxJQUFMO0FBQ0E7Ozt1Q0FFa0JDLEssRUFBTztBQUN4QixXQUFLQyxRQUFMLENBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1QsS0FBdkIsRUFBOEI7QUFBRUMsd0JBQWdCLEVBQUNLO0FBQW5CLE9BQTlCLENBQWY7QUFDRDs7OzJCQUVNO0FBQUE7O0FBQ047QUFDQTtBQUNBSSwwRUFBUyxHQUNQQyxJQURGLENB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V0FBZjtBQUEyQixZQUFJLEVBQUMsUUFBaEM7QUFBeUMsY0FBTSxFQUFFLENBQUMsU0FBRCxFQUFXLFNBQVgsQ0FBakQ7QUFBd0UsZ0JBQVEsRUFBQyxrQkFBakY7QUFBb0cscUJBQWEsRUFBRSx1QkFBQUMsR0FBRztBQUFBLGlCQUFLLElBQUlDLElBQUosQ0FBU0QsR0FBVCxFQUFjRSxjQUFkLEVBQUw7QUFBQTtBQUF0SCxRQU5GLEVBT0UsNERBQUMsK0NBQUQsT0FQRixFQVFFLDREQUFDLCtDQUFELE9BUkYsRUFTRSw0REFBQyx1REFBRDtBQUFlLFNBQUMsRUFBRSxLQUFLMUIsS0FBTCxDQUFXQyxnQkFBN0I7QUFBK0MsY0FBTSxFQUFDLEtBQXREO0FBQTRELGFBQUssRUFBQztBQUFsRSxRQVRGLEVBVUUsNERBQUMsaURBQUQsT0FWRixFQVdFLDREQUFDLHVEQUFEO0FBQWUsY0FBTSxFQUFDO0FBQXRCLFFBWEYsRUFZRSw0REFBQyw4Q0FBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQyxjQUE5QjtBQUE2QyxjQUFNLEVBQUMsU0FBcEQ7QUFBOEQsZUFBTyxFQUFFO0FBQXZFLFFBWkYsQ0FGRCxDQXJDRCxDQWZNLENBQVA7QUF5RUM7Ozs7RUF4R2tDMEIsNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJtYWluLjg4ZTIxNTJkNDA1ODcwN2E5ZDQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2VvRGF0YSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCBNYXAgZnJvbSAnLi4vTWFwJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0TGF0ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJydXNoLCBMaW5lQ2hhcnQsIFJlZmVyZW5jZUxpbmUsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgQ2FydGVzaWFuR3JpZCwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0ICcuL1RyYWNrZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRUaW1lc3RhbXA6IDAsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdG1pblRpbWVzdGFtcDogMCxcblx0XHRcdG1heFRpbWVzdGFtcDogMzI1MDM2ODAwMDAwMDAsXG5cdFx0fVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFx0dGhpcy5pbml0KCk7XG4gIH1cblxuICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IGN1cnJlbnRUaW1lc3RhbXA6dmFsdWUgfSkgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gIFx0Ly8gY29uc3QgZGF0YSA9IGF3YWl0IEdlb0RhdGEuZ2V0TGF0ZXN0KCk7XG4gIFx0Ly8gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIFx0Z2V0TGF0ZXN0KClcbiAgXHRcdC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZShkYXRhKSlcbiAgXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihkID0+IGQudGltZXN0YW1wIDw9IHRoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcClcblxuXHRcdHJldHVybiA8ZGl2IGlkPVwidHJhY2tlclwiPlxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJ0aXRsZVwiIHJvdz1cIjFcIj5cblx0XHRcdFx0PGgxPlZlaGljbGUgU3RhdGlzdGljczwvaDE+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImRhdGVzXCIgcm93PVwiMVwiPlxuXHRcdFx0XHRkYXRlc1xuXHRcdFx0PC9hc2lkZT5cblxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJtYXBcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxNYXAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBjdXJyZW50VGltZXN0YW1wPXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IC8+XG4gICAgICAgIFx0XHQ8U2xpZGVyIG1pbj17dGhpcy5zdGF0ZS5taW5UaW1lc3RhbXB9IG1heD17dGhpcy5zdGF0ZS5tYXhUaW1lc3RhbXB9IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSl9IC8+XG5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiY2hhcnRzXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNpZ25hbFwiPlxuXHRcdFx0XHRcdDxoMj5TaWduYWw8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicnNzaVwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPlxuXHRcdFx0XHRcdDxoMj5TcGVlZDwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyAvPlxuXHRcdFx0XHRcdCAgPEJydXNoIC8+XG5cdFx0XHRcdFx0ICA8UmVmZXJlbmNlTGluZSB4PXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IHN0cm9rZT1cInJlZFwiIGxhYmVsPVwiQ3VycmVudCBUaW1lXCIgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzcGVlZFwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhY2NlbGVyYXRpb25cIj5cblx0XHRcdFx0XHQ8aDI+QWNjZWxlcmF0aW9uPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImFjY2VsZXJhdGlvblwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdDwvYXNpZGU+XG5cblx0XHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9