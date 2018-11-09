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
        dataKey: "eventTimestamp",
        interval: "preserveStartEnd",
        tickFormatter: function tickFormatter(val) {
          return val.toLocaleString();
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["YAxis"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__["CartesianGrid"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsIm1heFRpbWVzdGFtcCIsImluaXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0TGF0ZXN0IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsImhhbmRsZVNsaWRlckNoYW5nZSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInZhbCIsInRvTG9jYWxlU3RyaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztJQUdxQkEsTzs7Ozs7QUFDbkIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsaUZBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWkMsc0JBQWdCLEVBQUUsQ0FETjtBQUVaQyxVQUFJLEVBQUUsRUFGTTtBQUdaQyxrQkFBWSxFQUFFLENBSEY7QUFJWkMsa0JBQVksRUFBRTtBQUpGLEtBQWI7QUFIbUI7QUFTbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3hCLFdBQUtDLFFBQUwsQ0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLVCxLQUF2QixFQUE4QjtBQUFFQyx3QkFBZ0IsRUFBQ0s7QUFBbkIsT0FBOUIsQ0FBZjtBQUNEOzs7MkJBRU07QUFBQTs7QUFDTjtBQUNBO0FBQ0FJLDBFQUFTLEdBQ1BDLElBREYsQ0FDTyxVQUFB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Q0FBRDtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQyxPQUE5QjtBQUFzQyxjQUFNLEVBQUMsU0FBN0M7QUFBdUQsZUFBTyxFQUFFO0FBQWhFLFFBVkYsQ0FGRCxDQWpCRCxFQWlDQztBQUFTLFVBQUUsRUFBQztBQUFaLHdCQWpDRCxDQWZNLENBQVA7QUFvREM7Ozs7RUFuRmtDRyw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Im1haW4uNWZkMWZiNjExYjAwMjYxMTkxNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHZW9EYXRhIGZyb20gJy4uLy4uL3NlcnZpY2VzL0dlb0RhdGEnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgTGluZUNoYXJ0LCBYQXhpcywgWUF4aXMsIFRvb2x0aXAsIENhcnRlc2lhbkdyaWQsIExpbmUgfSBmcm9tICdyZWNoYXJ0cyc7XG5cbmltcG9ydCAnLi9UcmFja2VyLnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VGltZXN0YW1wOiAwLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRtaW5UaW1lc3RhbXA6IDAsXG5cdFx0XHRtYXhUaW1lc3RhbXA6IDMyNTAzNjgwMDAwMDAwLFxuXHRcdH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBcdHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSggT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBjdXJyZW50VGltZXN0YW1wOnZhbHVlIH0pICk7XG4gIH1cblxuICBpbml0KCkge1xuICBcdC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBHZW9EYXRhLmdldExhdGVzdCgpO1xuICBcdC8vIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICBcdGdldExhdGVzdCgpXG4gIFx0XHQudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoZGF0YSkpXG4gIFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA8PSB0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXApXG5cblx0XHRyZXR1cm4gPGRpdiBpZD1cInRyYWNrZXJcIj5cblx0XHRcdDxzZWN0aW9uIGlkPVwidGl0bGVcIiByb3c9XCIxXCI+XG5cdFx0XHRcdDxoMT5WZWhpY2xlIFN0YXRpc3RpY3M8L2gxPlxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJkYXRlc1wiIHJvdz1cIjFcIj5cblx0XHRcdFx0ZGF0ZXNcblx0XHRcdDwvYXNpZGU+XG5cblx0XHRcdDxzZWN0aW9uIGlkPVwibWFwXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8TWFwIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gY3VycmVudFRpbWVzdGFtcD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSAvPlxuICAgICAgICBcdFx0PFNsaWRlciBtaW49e3RoaXMuc3RhdGUubWluVGltZXN0YW1wfSBtYXg9e3RoaXMuc3RhdGUubWF4VGltZXN0YW1wfSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpfSAvPlxuXG5cdFx0XHQ8L3NlY3Rpb24+XG5cblx0XHRcdDxhc2lkZSBpZD1cImNoYXJ0c1wiIHJvdz1cIjJcIj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzaWduYWxcIj5cblx0XHRcdFx0XHQ8aDI+U2lnbmFsPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cImV2ZW50VGltZXN0YW1wXCIgaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IHZhbC50b0xvY2FsZVN0cmluZygpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicnNzaVwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPlxuXHRcdFx0XHRcdDxoMj5TcGVlZDwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJldmVudFRpbWVzdGFtcFwiIC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzcGVlZFwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhY2NlbGVyYXRpb25cIj5hY2NlbGVyYXRpb248L3NlY3Rpb24+XG5cdFx0XHQ8L2FzaWRlPlxuXG5cdFx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==