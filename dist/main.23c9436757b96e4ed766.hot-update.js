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
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return val.toLocaleString();
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
        dataKey: "eventTimestamp"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Brush"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Line"], {
        type: "monotone",
        dataKey: "speed",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        id: "acceleration"
      }, "acceleration")));
    }
  }]);

  return Tracker;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsImhhbmRsZVNsaWRlckNoYW5nZSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInZhbCIsInRvTG9jYWxlU3RyaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztJQUdxQkEsTzs7Ozs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsaUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCLEVBQUUsQ0FETjtBQUVaQyxVQUFJLEVBQUUsRUFGTTtBQUdaQyxrQkFBWSxFQUFFLENBSEY7QUFJWkMsa0JBQVksRUFBRTtBQUpGLEtBQWI7QUFIbUI7QUFTbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLVCxLQUF2QixFQUE4QjtBQUFFQyx3QkFBZ0IsRUFBQ0s7QUFBbkIsT0FBOUIsQ0FBZjtBQUNEOzs7MkJBRU07QUFBQTs7QUFDTjtBQUNBO0FBQ0FJLDBFQUFTLEdBQ1BDLElBREYsQ0FDTyxVQUFB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RDtBQUFPLGVBQU8sRUFBQztBQUFmLFFBTkYsRUFPRSw0REFBQywrQ0FBRCxPQVBGLEVBUUUsNERBQUMsK0NBQUQsT0FSRixFQVNFLDREQUFDLGlEQUFELE9BVEYsRUFVRSw0REFBQyx1REFBRDtBQUFlLGNBQU0sRUFBQztBQUF0QixRQVZGLEVBV0UsNERBQUMsOENBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMsT0FBOUI7QUFBc0MsY0FBTSxFQUFDLFNBQTdDO0FBQXVELGVBQU8sRUFBRTtBQUFoRSxRQVhGLENBRkQsQ0FuQkQsRUFvQ0M7QUFBUyxVQUFFLEVBQUM7QUFBWix3QkFwQ0QsQ0FmTSxDQUFQO0FBdURDOzs7O0VBdEZrQ0csNkNBQUssQ0FBQ0MsUyIsImZpbGUiOiJtYWluLjIzYzk0MzY3NTdiOTZlNGVkNzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2VvRGF0YSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCBNYXAgZnJvbSAnLi4vTWFwJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0TGF0ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEJydXNoLCBMaW5lQ2hhcnQsIFJlZmVyZW5jZUxpbmUsIFhBeGlzLCBZQXhpcywgVG9vbHRpcCwgQ2FydGVzaWFuR3JpZCwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJztcblxuaW1wb3J0ICcuL1RyYWNrZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRUaW1lc3RhbXA6IDAsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdG1pblRpbWVzdGFtcDogMCxcblx0XHRcdG1heFRpbWVzdGFtcDogMzI1MDM2ODAwMDAwMDAsXG5cdFx0fVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFx0dGhpcy5pbml0KCk7XG4gIH1cblxuICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IGN1cnJlbnRUaW1lc3RhbXA6dmFsdWUgfSkgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gIFx0Ly8gY29uc3QgZGF0YSA9IGF3YWl0IEdlb0RhdGEuZ2V0TGF0ZXN0KCk7XG4gIFx0Ly8gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIFx0Z2V0TGF0ZXN0KClcbiAgXHRcdC50aGVuKGRhdGEgPT4gdGhpcy5zZXRTdGF0ZShkYXRhKSlcbiAgXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgXHRjb25zdCBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhLmZpbHRlcihkID0+IGQudGltZXN0YW1wIDw9IHRoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcClcblxuXHRcdHJldHVybiA8ZGl2IGlkPVwidHJhY2tlclwiPlxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJ0aXRsZVwiIHJvdz1cIjFcIj5cblx0XHRcdFx0PGgxPlZlaGljbGUgU3RhdGlzdGljczwvaDE+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImRhdGVzXCIgcm93PVwiMVwiPlxuXHRcdFx0XHRkYXRlc1xuXHRcdFx0PC9hc2lkZT5cblxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJtYXBcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxNYXAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBjdXJyZW50VGltZXN0YW1wPXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IC8+XG4gICAgICAgIFx0XHQ8U2xpZGVyIG1pbj17dGhpcy5zdGF0ZS5taW5UaW1lc3RhbXB9IG1heD17dGhpcy5zdGF0ZS5tYXhUaW1lc3RhbXB9IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSl9IC8+XG5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiY2hhcnRzXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNpZ25hbFwiPlxuXHRcdFx0XHRcdDxoMj5TaWduYWw8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IHZhbC50b0xvY2FsZVN0cmluZygpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxSZWZlcmVuY2VMaW5lIHg9e3RoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcH0gc3Ryb2tlPVwicmVkXCIgbGFiZWw9XCJDdXJyZW50IFRpbWVcIiAvPlxuXHRcdFx0XHRcdCAgPFRvb2x0aXAgLz5cblx0XHRcdFx0XHQgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZT1cIiNmNWY1ZjVcIiAvPlxuXHRcdFx0XHRcdCAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInJzc2lcIiBzdHJva2U9XCIjZmY3MzAwXCIgeUF4aXNJZD17MH0gLz5cblx0XHRcdFx0XHQgIHsvKjxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJwdlwiIHN0cm9rZT1cIiMzODc5MDhcIiB5QXhpc0lkPXsxfSAvPiovfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwic3BlZWRcIj5cblx0XHRcdFx0XHQ8aDI+U3BlZWQ8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwiZXZlbnRUaW1lc3RhbXBcIiAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8QnJ1c2ggLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzcGVlZFwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhY2NlbGVyYXRpb25cIj5hY2NlbGVyYXRpb248L3NlY3Rpb24+XG5cdFx0XHQ8L2FzaWRlPlxuXG5cdFx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==