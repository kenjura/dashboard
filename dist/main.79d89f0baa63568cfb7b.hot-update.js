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
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Map */ "./src/components/Map/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_GeoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/GeoData */ "./src/services/GeoData.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Tracker.scss */ "./src/components/Tracker/Tracker.scss");
/* harmony import */ var _Tracker_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Tracker_scss__WEBPACK_IMPORTED_MODULE_12__);









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
        return _this2.setState(data);
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // const signalData = this.state.data.map(d => d.rssi);
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
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["LineChart"], {
        width: 400,
        height: 400,
        data: this.state.data,
        margin: {
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["XAxis"], {
        dataKey: "eventTimestamp"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["CartesianGrid"], {
        stroke: "#f5f5f5"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__["Line"], {
        type: "monotone",
        dataKey: "rssi",
        stroke: "#ff7300",
        yAxisId: 0
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztJQUdxQkEsTzs7Ozs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsaUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCLEVBQUUsQ0FETjtBQUVaQyxVQUFJLEVBQUUsRUFGTTtBQUdaQyxrQkFBWSxFQUFFLENBSEY7QUFJWkMsa0JBQVksRUFBRTtBQUpGLEtBQWI7QUFIbUI7QUFTbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLVCxLQUF2QixFQUE4QjtBQUFFQyx3QkFBZ0IsRUFBQ0s7QUFBbkIsT0FBOUIsQ0FBZjtBQUNEOzs7MkJBRU07QUFBQTs7QUFDTjtBQUNBO0FBQ0FJLDBFQUFTLEdBQ1BDLElBREYsQ0FDTyxVQUFBVCxJQUFJO0FBQUEsZUFBSSxNQUFJLENBQUNLLFFBQUwsQ0FBY0wsSUFBZCxDQUFKO0FBQUEsT0FEWCxFQUVFVSxLQUZGLENBRVEsVUFBQUMsR0FBRztBQUFBLGVBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkLENBQUo7QUFBQSxPQUZYO0FBR0E7Ozs2QkFFUTtBQUFBOztBQUNSO0FBRUQsYUFBTztBQUFLLFVBQUUsRUFBQztBQUFSLFNBQ047QUFBUyxVQUFFLEVBQUMsT0FBWjtBQUFvQixXQUFHLEVBQUM7QUFBeEIsU0FDQyw0RkFERCxDQURNLEVBS047QUFBTyxVQUFFLEVBQUMsT0FBVjtBQUFrQixXQUFHLEVBQUM7QUFBdEIsaUJBTE0sRUFTTjtBQUFTLFVBQUUsRUFBQyxLQUFaO0FBQWtCLFdBQUcsRUFBQztBQUF0QixTQUNDLDJEQUFDLDRDQUFEO0FBQUssWUFBSSxFQUFFLEtBQUtiLEtBQUwsQ0FBV0UsSUFBdEI7QUFBNEIsd0JBQWdCLEVBQUUsS0FBS0YsS0FBTCxDQUFXQztBQUF6RCxRQURELEVBRUs7QUFBUSxXQUFHLEVBQUUsS0FBS0QsS0FBTCxDQUFXRyxZQUF4QjtBQUFzQyxXQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXSSxZQUF0RDtBQUFvRSxnQkFBUSxFQUFFLGtCQUFBRSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDVSxrQkFBTCxDQUF3QlYsS0FBeEIsQ0FBSjtBQUFBO0FBQW5GLFFBRkwsQ0FUTSxFQWVOO0FBQU8sVUFBRSxFQUFDLFFBQVY7QUFBbUIsV0FBRyxFQUFDO0FBQXZCLFNBQ0M7QUFBUyxVQUFFLEVBQUM7QUFBWixTQUNDLDJEQUFDLG1EQUFEO0FBQ0UsYUFBSyxFQUFFLEdBRFQ7QUFFRSxjQUFNLEVBQUUsR0FGVjtBQUdFLFlBQUksRUFBRSxLQUFLTixLQUFMLENBQVdFLElBSG5CO0FBSUUsY0FBTSxFQUFFO0FBQUVlLGFBQUcsRUFBRSxDQUFQO0FBQVVDLGVBQUssRUFBRSxFQUFqQjtBQUFxQkMsY0FBSSxFQUFFLEVBQTNCO0FBQStCQyxnQkFBTSxFQUFFO0FBQXZDO0FBSlYsU0FNRSwyREFBQywrQ0FBRDtBQUFPLGVBQU8sRUFBQztBQUFmLFFBTkYsRUFPRSwyREFBQyxpREFBRCxPQVBGLEVBUUUsMkRBQUMsdURBQUQ7QUFBZSxjQUFNLEVBQUM7QUFBdEIsUUFSRixFQVNFLDJEQUFDLDhDQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDLE1BQTlCO0FBQXFDLGNBQU0sRUFBQyxTQUE1QztBQUFzRCxlQUFPLEVBQUU7QUFBL0QsUUFURixDQURELENBREQsRUFlQztBQUFTLFVBQUUsRUFBQztBQUFaLGlCQWZELEVBZ0JDO0FBQVMsVUFBRSxFQUFDO0FBQVosd0JBaEJELENBZk0sQ0FBUDtBQW1DQzs7OztFQWxFa0NDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoibWFpbi43OWQ4OWYwYmFhNjM1NjhjZmI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdlb0RhdGEgZnJvbSAnLi4vLi4vc2VydmljZXMvR2VvRGF0YSc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL01hcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGdldExhdGVzdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0dlb0RhdGEnO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBMaW5lQ2hhcnQsIFhBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMaW5lIH0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgJy4vVHJhY2tlci5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudFRpbWVzdGFtcDogMCxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0bWluVGltZXN0YW1wOiAwLFxuXHRcdFx0bWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcblx0XHR9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgXHR0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGhhbmRsZVNsaWRlckNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHsgY3VycmVudFRpbWVzdGFtcDp2YWx1ZSB9KSApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgXHQvLyBjb25zdCBkYXRhID0gYXdhaXQgR2VvRGF0YS5nZXRMYXRlc3QoKTtcbiAgXHQvLyB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgXHRnZXRMYXRlc3QoKVxuICBcdFx0LnRoZW4oZGF0YSA9PiB0aGlzLnNldFN0YXRlKGRhdGEpKVxuICBcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICBcdC8vIGNvbnN0IHNpZ25hbERhdGEgPSB0aGlzLnN0YXRlLmRhdGEubWFwKGQgPT4gZC5yc3NpKTtcblxuXHRcdHJldHVybiA8ZGl2IGlkPVwidHJhY2tlclwiPlxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJ0aXRsZVwiIHJvdz1cIjFcIj5cblx0XHRcdFx0PGgxPlZlaGljbGUgU3RhdGlzdGljczwvaDE+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImRhdGVzXCIgcm93PVwiMVwiPlxuXHRcdFx0XHRkYXRlc1xuXHRcdFx0PC9hc2lkZT5cblxuXHRcdFx0PHNlY3Rpb24gaWQ9XCJtYXBcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxNYXAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBjdXJyZW50VGltZXN0YW1wPXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IC8+XG4gICAgICAgIDxTbGlkZXIgbWluPXt0aGlzLnN0YXRlLm1pblRpbWVzdGFtcH0gbWF4PXt0aGlzLnN0YXRlLm1heFRpbWVzdGFtcH0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKX0gLz5cblxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJjaGFydHNcIiByb3c9XCIyXCI+XG5cdFx0XHRcdDxzZWN0aW9uIGlkPVwic2lnbmFsXCI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17NDAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJldmVudFRpbWVzdGFtcFwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicnNzaVwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPnNwZWVkPC9zZWN0aW9uPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImFjY2VsZXJhdGlvblwiPmFjY2VsZXJhdGlvbjwvc2VjdGlvbj5cblx0XHRcdDwvYXNpZGU+XG5cblx0XHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9