webpackHotUpdate("main",{

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/modules/_flags.js":
false,

/***/ "./node_modules/core-js/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
false,

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
false,

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
false,

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
false,

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
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Map */ "./src/components/Map/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_GeoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/GeoData */ "./src/services/GeoData.js");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Tracker.scss */ "./src/components/Tracker/Tracker.scss");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Tracker_scss__WEBPACK_IMPORTED_MODULE_11__);









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
      Object(_services_GeoData__WEBPACK_IMPORTED_MODULE_10__["getLatest"])().then(function (data) {
        console.log('data', data);
        debugger;

        _this2.setState(data);
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "tracker"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "title",
        row: "1"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Vehicle Statistics")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("aside", {
        id: "dates",
        row: "1"
      }, "dates"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "map",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.state.data,
        currentTimestamp: this.state.currentTimestamp
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        min: this.state.minTimestamp,
        max: this.state.maxTimestamp,
        onChange: function onChange(value) {
          return _this3.handleSliderChange(value);
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("aside", {
        id: "charts",
        row: "2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "signal"
      }, "signal"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "speed"
      }, "speed"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        id: "acceleration"
      }, "acceleration")));
    }
  }]);

  return Tracker;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOztJQUdxQkEsTzs7Ozs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsaUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCLEVBQUUsQ0FETjtBQUVaQyxVQUFJLEVBQUUsRUFGTTtBQUdaQyxrQkFBWSxFQUFFLENBSEY7QUFJWkMsa0JBQVksRUFBRTtBQUpGLEtBQWI7QUFIbUI7QUFTbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLVCxLQUF2QixFQUE4QjtBQUFFQyx3QkFBZ0IsRUFBQ0s7QUFBbkIsT0FBOUIsQ0FBZjtBQUNEOzs7MkJBRU07QUFBQTs7QUFDTjtBQUNBO0FBQ0FJLDBFQUFTLEdBQ1BDLElBREYsQ0FDTyxVQUFBVCxJQUFJLEVBQUk7QUFDYlUsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFtQlgsSUFBbkI7QUFDQTs7QUFDQSxjQUFJLENBQUNLLFFBQUwsQ0FBY0wsSUFBZDtBQUNBLE9BTEYsRUFNRVksS0FORixDQU1RLFVBQUFDLEdBQUc7QUFBQSxlQUFJSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0QsR0FBZCxDQUFKO0FBQUEsT0FOWDtBQU9BOzs7NkJBRVE7QUFBQTs7QUFDVCxhQUFPO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDTjtBQUFTLFVBQUUsRUFBQyxPQUFaO0FBQW9CLFdBQUcsRUFBQztBQUF4QixTQUNDLDRGQURELENBRE0sRUFLTjtBQUFPLFVBQUUsRUFBQyxPQUFWO0FBQWtCLFdBQUcsRUFBQztBQUF0QixpQkFMTSxFQVNOO0FBQVMsVUFBRSxFQUFDLEtBQVo7QUFBa0IsV0FBRyxFQUFDO0FBQXRCLFNBQ0MsMkRBQUMsNENBQUQ7QUFBSyxZQUFJLEVBQUUsS0FBS2YsS0FBTCxDQUFXRSxJQUF0QjtBQUE0Qix3QkFBZ0IsRUFBRSxLQUFLRixLQUFMLENBQVdDO0FBQXpELFFBREQsRUFFSztBQUFRLFdBQUcsRUFBRSxLQUFLRCxLQUFMLENBQVdHLFlBQXhCO0FBQXNDLFdBQUcsRUFBRSxLQUFLSCxLQUFMLENBQVdJLFlBQXREO0FBQW9FLGdCQUFRLEVBQUUsa0JBQUFFLEtBQUs7QUFBQSxpQkFBSSxNQUFJLENBQUNXLGtCQUFMLENBQXdCWCxLQUF4QixDQUFKO0FBQUE7QUFBbkYsUUFGTCxDQVRNLEVBZU47QUFBTyxVQUFFLEVBQUMsUUFBVjtBQUFtQixXQUFHLEVBQUM7QUFBdkIsU0FDQztBQUFTLFVBQUUsRUFBQztBQUFaLGtCQURELEVBRUM7QUFBUyxVQUFFLEVBQUM7QUFBWixpQkFGRCxFQUdDO0FBQVMsVUFBRSxFQUFDO0FBQVosd0JBSEQsQ0FmTSxDQUFQO0FBc0JDOzs7O0VBdkRrQ1ksNENBQUssQ0FBQ0MsUyIsImZpbGUiOiJtYWluLjk1MGIwNTM2NWE1YzlkNzcyOGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2VvRGF0YSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCBNYXAgZnJvbSAnLi4vTWFwJztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0TGF0ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0ICcuL1RyYWNrZXIuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRUaW1lc3RhbXA6IDAsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdG1pblRpbWVzdGFtcDogMCxcblx0XHRcdG1heFRpbWVzdGFtcDogMzI1MDM2ODAwMDAwMDAsXG5cdFx0fVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIFx0dGhpcy5pbml0KCk7XG4gIH1cblxuICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB7IGN1cnJlbnRUaW1lc3RhbXA6dmFsdWUgfSkgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gIFx0Ly8gY29uc3QgZGF0YSA9IGF3YWl0IEdlb0RhdGEuZ2V0TGF0ZXN0KCk7XG4gIFx0Ly8gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIFx0Z2V0TGF0ZXN0KClcbiAgXHRcdC50aGVuKGRhdGEgPT4ge1xuICBcdFx0XHRjb25zb2xlLmxvZygnZGF0YScsZGF0YSk7XG4gIFx0XHRcdGRlYnVnZ2VyO1xuICBcdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuICBcdFx0fSlcbiAgXHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdiBpZD1cInRyYWNrZXJcIj5cblx0XHRcdDxzZWN0aW9uIGlkPVwidGl0bGVcIiByb3c9XCIxXCI+XG5cdFx0XHRcdDxoMT5WZWhpY2xlIFN0YXRpc3RpY3M8L2gxPlxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJkYXRlc1wiIHJvdz1cIjFcIj5cblx0XHRcdFx0ZGF0ZXNcblx0XHRcdDwvYXNpZGU+XG5cblx0XHRcdDxzZWN0aW9uIGlkPVwibWFwXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8TWFwIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gY3VycmVudFRpbWVzdGFtcD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSAvPlxuICAgICAgICA8U2xpZGVyIG1pbj17dGhpcy5zdGF0ZS5taW5UaW1lc3RhbXB9IG1heD17dGhpcy5zdGF0ZS5tYXhUaW1lc3RhbXB9IG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSl9IC8+XG5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiY2hhcnRzXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNpZ25hbFwiPnNpZ25hbDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPnNwZWVkPC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFjY2VsZXJhdGlvblwiPmFjY2VsZXJhdGlvbjwvc2VjdGlvbj5cblx0XHRcdDwvYXNpZGU+XG5cblx0XHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9