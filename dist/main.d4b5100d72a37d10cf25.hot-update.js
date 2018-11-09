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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsImhhbmRsZVNsaWRlckNoYW5nZSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInZhbCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7SUFHcUJBLE87Ozs7O0FBQ25CLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLGlGQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLHNCQUFnQixFQUFFLENBRE47QUFFWkMsVUFBSSxFQUFFLEVBRk07QUFHWkMsa0JBQVksRUFBRSxDQUhGO0FBSVpDLGtCQUFZLEVBQUU7QUFKRixLQUFiO0FBSG1CO0FBU2xCOzs7O3dDQUVtQjtBQUNuQixXQUFLQyxJQUFMO0FBQ0E7Ozt1Q0FFa0JDLEssRUFBTztBQUN4QixXQUFLQyxRQUFMLENBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1QsS0FBdkIsRUFBOEI7QUFBRUMsd0JBQWdCLEVBQUNLO0FBQW5CLE9BQTlCLENBQWY7QUFDRDs7OzJCQUVNO0FBQUE7O0FBQ047QUFDQTtBQUNBSSwwRUFBUyxHQUNQQyxJQURGLENB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V0FBZjtBQUEyQixZQUFJLEVBQUMsUUFBaEM7QUFBeUMsY0FBTSxFQUFFLENBQUMsU0FBRCxFQUFXLFNBQVgsQ0FBakQ7QUFBd0UsZ0JBQVEsRUFBQyxrQkFBakY7QUFBb0cscUJBQWEsRUFBRSx1QkFBQUMsR0FBRztBQUFBLGlCQUFLLElBQUlDLElBQUosQ0FBU0QsR0FBVCxFQUFjRSxjQUFkLEVBQUw7QUFBQTtBQUF0SCxRQU5GLEVBT0UsNERBQUMsK0NBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixjQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVcsU0FBWDtBQUE3QixRQVBGLEVBUUUsNERBQUMsK0NBQUQsT0FSRixFQVNFLDREQUFDLHVEQUFEO0FBQWUsU0FBQyxFQUFFLEtBQUsxQixLQUFMLENBQVdDLGdCQUE3QjtBQUErQyxjQUFNLEVBQUMsS0FBdEQ7QUFBNEQsYUFBSyxFQUFDO0FBQWxFLFFBVEYsRUFVRSw0REFBQyxpREFBRCxPQVZGLEVBV0UsNERBQUMsdURBQUQ7QUFBZSxjQUFNLEVBQUM7QUFBdEIsUUFYRixFQVlFLDREQUFDLDhDQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDLGNBQTlCO0FBQTZDLGNBQU0sRUFBQyxTQUFwRDtBQUE4RCxlQUFPLEVBQUU7QUFBdkUsUUFaRixDQUZELENBckNELENBZk0sQ0FBUDtBQXlFQzs7OztFQXhHa0MwQiw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Im1haW4uZDRiNTEwMGQ3MmEzN2QxMGNmMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHZW9EYXRhIGZyb20gJy4uLy4uL3NlcnZpY2VzL0dlb0RhdGEnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJ1c2gsIExpbmVDaGFydCwgUmVmZXJlbmNlTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMaW5lIH0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgJy4vVHJhY2tlci5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudFRpbWVzdGFtcDogMCxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0bWluVGltZXN0YW1wOiAwLFxuXHRcdFx0bWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcblx0XHR9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXHR0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgY3VycmVudFRpbWVzdGFtcDp2YWx1ZSB9KSApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgXHQvLyBjb25zdCBkYXRhID0gYXdhaXQgR2VvRGF0YS5nZXRMYXRlc3QoKTtcbiAgXHQvLyB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgXHRnZXRMYXRlc3QoKVxuICBcdFx0LnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKGRhdGEpKVxuICBcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPD0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wKVxuXG5cdFx0cmV0dXJuIDxkaXYgaWQ9XCJ0cmFja2VyXCI+XG5cdFx0XHQ8c2VjdGlvbiBpZD1cInRpdGxlXCIgcm93PVwiMVwiPlxuXHRcdFx0XHQ8aDE+VmVoaWNsZSBTdGF0aXN0aWNzPC9oMT5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiZGF0ZXNcIiByb3c9XCIxXCI+XG5cdFx0XHRcdGRhdGVzXG5cdFx0XHQ8L2FzaWRlPlxuXG5cdFx0XHQ8c2VjdGlvbiBpZD1cIm1hcFwiIHJvdz1cIjJcIj5cblx0XHRcdFx0PE1hcCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IGN1cnJlbnRUaW1lc3RhbXA9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gLz5cbiAgICAgICAgXHRcdDxTbGlkZXIgbWluPXt0aGlzLnN0YXRlLm1pblRpbWVzdGFtcH0gbWF4PXt0aGlzLnN0YXRlLm1heFRpbWVzdGFtcH0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKX0gLz5cblxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJjaGFydHNcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwic2lnbmFsXCI+XG5cdFx0XHRcdFx0PGgyPlNpZ25hbDwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyAvPlxuXHRcdFx0XHRcdCAgPEJydXNoIC8+XG5cdFx0XHRcdFx0ICA8UmVmZXJlbmNlTGluZSB4PXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IHN0cm9rZT1cInJlZFwiIGxhYmVsPVwiQ3VycmVudCBUaW1lXCIgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJyc3NpXCIgc3Ryb2tlPVwiI2ZmNzMwMFwiIHlBeGlzSWQ9ezB9IC8+XG5cdFx0XHRcdFx0ICB7Lyo8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHZcIiBzdHJva2U9XCIjMzg3OTA4XCIgeUF4aXNJZD17MX0gLz4qL31cblx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNwZWVkXCI+XG5cdFx0XHRcdFx0PGgyPlNwZWVkPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInNwZWVkXCIgc3Ryb2tlPVwiI2ZmNzMwMFwiIHlBeGlzSWQ9ezB9IC8+XG5cdFx0XHRcdFx0ICB7Lyo8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHZcIiBzdHJva2U9XCIjMzg3OTA4XCIgeUF4aXNJZD17MX0gLz4qL31cblx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFjY2VsZXJhdGlvblwiPlxuXHRcdFx0XHRcdDxoMj5BY2NlbGVyYXRpb248L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSAvPlxuXHRcdFx0XHRcdCAgPEJydXNoIC8+XG5cdFx0XHRcdFx0ICA8UmVmZXJlbmNlTGluZSB4PXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IHN0cm9rZT1cInJlZFwiIGxhYmVsPVwiQ3VycmVudCBUaW1lXCIgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJhY2NlbGVyYXRpb25cIiBzdHJva2U9XCIjMDAwMGZmXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQ8L2FzaWRlPlxuXG5cdFx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==