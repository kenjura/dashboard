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
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, this.currentDataPoint.speed, " mph"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, this.currentDataPoint.rssi, " bars"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("aside", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFja2VyL1RyYWNrZXIuanMiXSwibmFtZXMiOlsiVHJhY2tlciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50RGF0YVBvaW50Iiwic3BlZWQiLCJyc3NpIiwiY3VycmVudFRpbWVzdGFtcCIsImRhdGEiLCJtaW5UaW1lc3RhbXAiLCJtYXhUaW1lc3RhbXAiLCJpbml0IiwidmFsdWUiLCJmaWx0ZXIiLCJkIiwidGltZXN0YW1wIiwic2V0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRMYXRlc3QiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ2YWwiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0lBR3FCQSxPOzs7OztBQUNuQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNuQixpRkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxzQkFBZ0IsRUFBRTtBQUNqQkMsYUFBSyxFQUFFLENBRFU7QUFFakJDLFlBQUksRUFBRTtBQUZXLE9BRE47QUFLWkMsc0JBQWdCLEVBQUUsQ0FMTjtBQU1aQyxVQUFJLEVBQUUsRUFOTTtBQU9aQyxrQkFBWSxFQUFFLENBUEY7QUFRWkMsa0JBQVksRUFBRTtBQVJGLEtBQWI7QUFIbUI7QUFhbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtDLElBQUw7QUFDQTs7O3VDQUVrQkMsSyxFQUFPO0FBQ3pCLFVBQU1SLGdCQUFnQixHQUFHLEtBQUtELEtBQUwsQ0FBV0ssSUFBWCxDQUFnQkssTUFBaEIsQ0FB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QixRQVhGLEVBWUUsNERBQUMsOENBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMsY0FBOUI7QUFBNkMsY0FBTSxFQUFDLFNBQXBEO0FBQThELGVBQU8sRUFBRTtBQUF2RSxRQVpGLENBRkQsQ0FyQ0QsQ0FsQk0sQ0FBUDtBQTRFQzs7OztFQWhIa0MwQiw2Q0FBSyxDQUFDQyxTIiwiZmlsZSI6Im1haW4uMGVkZWI4Y2QyOWQwNTk1MzJhMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHZW9EYXRhIGZyb20gJy4uLy4uL3NlcnZpY2VzL0dlb0RhdGEnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRMYXRlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9HZW9EYXRhJztcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJ1c2gsIExpbmVDaGFydCwgUmVmZXJlbmNlTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMaW5lIH0gZnJvbSAncmVjaGFydHMnO1xuXG5pbXBvcnQgJy4vVHJhY2tlci5zY3NzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y3VycmVudERhdGFQb2ludDoge1xuXHRcdFx0XHRzcGVlZDogMCxcblx0XHRcdFx0cnNzaTogMCxcblx0XHRcdH0sXG5cdFx0XHRjdXJyZW50VGltZXN0YW1wOiAwLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRtaW5UaW1lc3RhbXA6IDAsXG5cdFx0XHRtYXhUaW1lc3RhbXA6IDMyNTAzNjgwMDAwMDAwLFxuXHRcdH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBcdHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKSB7XG4gIFx0Y29uc3QgY3VycmVudERhdGFQb2ludCA9IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA9PT0gdmFsdWUpWzBdIHx8IHsgc3BlZWQ6LTEsIHJzc2k6IC0xIH07XG4gICAgdGhpcy5zZXRTdGF0ZSggT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBjdXJyZW50RGF0YVBvaW50LCBjdXJyZW50VGltZXN0YW1wOnZhbHVlIH0pICk7XG4gIH1cblxuICBpbml0KCkge1xuICBcdC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBHZW9EYXRhLmdldExhdGVzdCgpO1xuICBcdC8vIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICBcdGdldExhdGVzdCgpXG4gIFx0XHQudGhlbihkYXRhID0+IHRoaXMuc2V0U3RhdGUoZGF0YSkpXG4gIFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gIFx0Y29uc3QgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA8PSB0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXApXG5cblx0XHRyZXR1cm4gPGRpdiBpZD1cInRyYWNrZXJcIj5cblx0XHRcdDxzZWN0aW9uIGlkPVwidGl0bGVcIiByb3c9XCIxXCI+XG5cdFx0XHRcdDxoMT5WZWhpY2xlIFN0YXRpc3RpY3M8L2gxPlxuXHRcdFx0PC9zZWN0aW9uPlxuXG5cdFx0XHQ8YXNpZGUgaWQ9XCJkYXRlc1wiIHJvdz1cIjFcIj5cblx0XHRcdFx0ZGF0ZXNcblx0XHRcdDwvYXNpZGU+XG5cblx0XHRcdDxzZWN0aW9uIGlkPVwibWFwXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8TWFwIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gY3VycmVudFRpbWVzdGFtcD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSAvPlxuICAgICAgICBcdFx0PFNsaWRlciBtaW49e3RoaXMuc3RhdGUubWluVGltZXN0YW1wfSBtYXg9e3RoaXMuc3RhdGUubWF4VGltZXN0YW1wfSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpfSAvPlxuICAgICAgICBcdFx0PGRpdiBpZD1cInJlYWRvdXRcIj5cbiAgICAgICAgXHRcdFx0PHNwYW4+e3RoaXMuY3VycmVudERhdGFQb2ludC5zcGVlZH0gbXBoPC9zcGFuPlxuICAgICAgICBcdFx0XHQ8c3Bhbj57dGhpcy5jdXJyZW50RGF0YVBvaW50LnJzc2l9IGJhcnM8L3NwYW4+XG4gICAgICAgIFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblxuXHRcdFx0PGFzaWRlIGlkPVwiY2hhcnRzXCIgcm93PVwiMlwiPlxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cInNpZ25hbFwiPlxuXHRcdFx0XHRcdDxoMj5TaWduYWw8L2gyPlxuXHRcdFx0XHRcdDxMaW5lQ2hhcnRcblx0XHRcdFx0XHQgIHdpZHRoPXs0MDB9XG5cdFx0XHRcdFx0ICBoZWlnaHQ9ezIwMH1cblx0XHRcdFx0XHQgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHQgIG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAyMCwgbGVmdDogMTAsIGJvdHRvbTogNSB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQgIDxYQXhpcyBkYXRhS2V5PVwidGltZXN0YW1wXCIgdHlwZT1cIm51bWJlclwiIGRvbWFpbj17WydkYXRhTWluJywnZGF0YU1heCddfSBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIiB0aWNrRm9ybWF0dGVyPXt2YWwgPT4gKG5ldyBEYXRlKHZhbCkudG9Mb2NhbGVTdHJpbmcoKSl9IC8+XG5cdFx0XHRcdFx0ICA8WUF4aXMgLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicnNzaVwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJzcGVlZFwiPlxuXHRcdFx0XHRcdDxoMj5TcGVlZDwvaDI+XG5cdFx0XHRcdFx0PExpbmVDaGFydFxuXHRcdFx0XHRcdCAgd2lkdGg9ezQwMH1cblx0XHRcdFx0XHQgIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdCAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdCAgbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDIwLCBsZWZ0OiAxMCwgYm90dG9tOiA1IH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdCAgPFhBeGlzIGRhdGFLZXk9XCJ0aW1lc3RhbXBcIiB0eXBlPVwibnVtYmVyXCIgZG9tYWluPXtbJ2RhdGFNaW4nLCdkYXRhTWF4J119IGludGVydmFsPVwicHJlc2VydmVTdGFydEVuZFwiIHRpY2tGb3JtYXR0ZXI9e3ZhbCA9PiAobmV3IERhdGUodmFsKS50b0xvY2FsZVN0cmluZygpKX0gLz5cblx0XHRcdFx0XHQgIDxZQXhpcyAvPlxuXHRcdFx0XHRcdCAgPEJydXNoIC8+XG5cdFx0XHRcdFx0ICA8UmVmZXJlbmNlTGluZSB4PXt0aGlzLnN0YXRlLmN1cnJlbnRUaW1lc3RhbXB9IHN0cm9rZT1cInJlZFwiIGxhYmVsPVwiQ3VycmVudCBUaW1lXCIgLz5cblx0XHRcdFx0XHQgIDxUb29sdGlwIC8+XG5cdFx0XHRcdFx0ICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cblx0XHRcdFx0XHQgIDxMaW5lIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJzcGVlZFwiIHN0cm9rZT1cIiNmZjczMDBcIiB5QXhpc0lkPXswfSAvPlxuXHRcdFx0XHRcdCAgey8qPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInB2XCIgc3Ryb2tlPVwiIzM4NzkwOFwiIHlBeGlzSWQ9ezF9IC8+Ki99XG5cdFx0XHRcdFx0PC9MaW5lQ2hhcnQ+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PHNlY3Rpb24gaWQ9XCJhY2NlbGVyYXRpb25cIj5cblx0XHRcdFx0XHQ8aDI+QWNjZWxlcmF0aW9uPC9oMj5cblx0XHRcdFx0XHQ8TGluZUNoYXJ0XG5cdFx0XHRcdFx0ICB3aWR0aD17NDAwfVxuXHRcdFx0XHRcdCAgaGVpZ2h0PXsyMDB9XG5cdFx0XHRcdFx0ICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0ICBtYXJnaW49e3sgdG9wOiA1LCByaWdodDogMjAsIGxlZnQ6IDEwLCBib3R0b206IDUgfX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0ICA8WEF4aXMgZGF0YUtleT1cInRpbWVzdGFtcFwiIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gaW50ZXJ2YWw9XCJwcmVzZXJ2ZVN0YXJ0RW5kXCIgdGlja0Zvcm1hdHRlcj17dmFsID0+IChuZXcgRGF0ZSh2YWwpLnRvTG9jYWxlU3RyaW5nKCkpfSAvPlxuXHRcdFx0XHRcdCAgPFlBeGlzIHR5cGU9XCJudW1iZXJcIiBkb21haW49e1snZGF0YU1pbicsJ2RhdGFNYXgnXX0gLz5cblx0XHRcdFx0XHQgIDxCcnVzaCAvPlxuXHRcdFx0XHRcdCAgPFJlZmVyZW5jZUxpbmUgeD17dGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wfSBzdHJva2U9XCJyZWRcIiBsYWJlbD1cIkN1cnJlbnQgVGltZVwiIC8+XG5cdFx0XHRcdFx0ICA8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdCAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlPVwiI2Y1ZjVmNVwiIC8+XG5cdFx0XHRcdFx0ICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwiYWNjZWxlcmF0aW9uXCIgc3Ryb2tlPVwiIzAwMDBmZlwiIHlBeGlzSWQ9ezB9IC8+XG5cdFx0XHRcdFx0ICB7Lyo8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicHZcIiBzdHJva2U9XCIjMzg3OTA4XCIgeUF4aXNJZD17MX0gLz4qL31cblx0XHRcdFx0XHQ8L0xpbmVDaGFydD5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9hc2lkZT5cblxuXHRcdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=