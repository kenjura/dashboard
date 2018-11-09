webpackHotUpdate("main",{

/***/ "./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
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
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Map.scss */ "./src/components/Map/Map.scss");
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Map_scss__WEBPACK_IMPORTED_MODULE_13__);












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, text);
};

var Dot = function Dot() {
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    class: "dot"
  });
};

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));
    _this.state = {
      currentTimestamp: _this.props.minTimestamp
    };
    return _this;
  }

  _createClass(Map, [{
    key: "handleSliderChange",
    value: function handleSliderChange(value) {
      this.setState = Object.assign({}, this.state, {
        currentTimestamp: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = Array.isArray(this.props.data) && this.props.data || [];
      var dots = data.filter(function (d) {
        return d.timestamp <= _this2.state.currentTimestamp;
      }).map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Dot, {
          lat: d.lat,
          lng: d.long,
          key: "".concat(d.timestamp, "_").concat(Math.random())
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: "map",
        style: {
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_11___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914'
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, dots, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Dot, {
        lat: 59.955413,
        lng: 30.337844
      })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_6___default.a, {
        min: this.props.minTimestamp,
        max: this.props.maxTimestamp,
        onChange: function onChange(value) {
          return _this2.handleSliderChange(value);
        }
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

_defineProperty(Map, "defaultProps", {
  center: {
    lat: 37.5714,
    lng: -122.33099
  },
  data: [],
  minTimestamp: 0,
  maxTimestamp: 32503680000000,
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwibWluVGltZXN0YW1wIiwidmFsdWUiLCJzZXRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJkb3RzIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsIm1hcCIsImxhdCIsImxvbmciLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJrZXkiLCJjZW50ZXIiLCJ6b29tIiwibWF4VGltZXN0YW1wIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJsbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyx5RUFBTUEsSUFBTixDQUFkO0FBQUEsQ0FBMUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFBTjtBQUFBLENBQVo7O0lBRXFCQyxHOzs7OztBQVluQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLDZFQUFNQSxLQUFOO0FBRUUsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQUFFLE1BQUtGLEtBQUwsQ0FBV0c7QUFEbEIsS0FBYjtBQUhpQjtBQU1sQjs7Ozt1Q0FFa0JDLEssRUFBTztBQUN4QixXQUFLQyxRQUFMLEdBQWdCQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtOLEtBQXZCLEVBQThCO0FBQUVDLHdCQUFnQixFQUFDRTtBQUFuQixPQUE5QixDQUFoQjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNSSxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEtBQUtWLEtBQUwsQ0FBV1EsSUFBekIsS0FBa0MsS0FBS1IsS0FBTCxDQUFXUSxJQUE3QyxJQUFxRCxFQUFsRTtBQUNBLFVBQU1HLElBQUksR0FBR0gsSUFBSSxDQUNkSSxNQURVLENBQ0gsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsU0FBRixJQUFlLE1BQUksQ0FBQ2IsS0FBTCxDQUFXQyxnQkFBOUI7QUFBQSxPQURFLEVBRVZhLEdBRlUsQ0FFTixVQUFBRixDQUFDO0FBQUEsZUFBSSw0REFBQyxHQUFEO0FBQUssYUFBRyxFQUFFQSxDQUFDLENBQUNHLEdBQVo7QUFBaUIsYUFBRyxFQUFFSCxDQUFDLENBQUNJLElBQXhCO0FBQThCLGFBQUcsWUFBS0osQ0FBQyxDQUFDQyxTQUFQLGNBQW9CSSxJQUFJLENBQUNDLE1BQUwsRUFBcEI7QUFBakMsVUFBSjtBQUFBLE9BRkssQ0FBYjtBQUdBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDREQUFDLHdEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUt0QixLQUFMLENBQVd1QixNQUZqQztBQUdPLG1CQUFXLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV3dCO0FBSC9CLFNBS1FiLElBTFIsRUFNTyw0REFBQyxHQUFEO0FBQ0UsV0FBRyxFQUFFLFNBRFA7QUFFRSxXQUFHLEVBQUU7QUFGUCxRQU5QLENBRFEsRUFhSDtBQUFRLFdBQUcsRUFBRSxLQUFLWCxLQUFMLENBQVdHLFlBQXhCO0FBQXNDLFdBQUcsRUFBRSxLQUFLSCxLQUFMLENBQVd5QixZQUF0RDtBQUFvRSxnQkFBUSxFQUFFLGtCQUFBckIsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ3NCLGtCQUFMLENBQXdCdEIsS0FBeEIsQ0FBSjtBQUFBO0FBQW5GLFFBYkcsQ0FBUDtBQWVEOzs7O0VBNUM4QnVCLDZDQUFLLENBQUNDLFM7O2dCQUFsQjdCLEcsa0JBQ0U7QUFDbkJ3QixRQUFNLEVBQUU7QUFDTlAsT0FBRyxFQUFFLE9BREM7QUFFTmEsT0FBRyxFQUFFLENBQUM7QUFGQSxHQURXO0FBS25CckIsTUFBSSxFQUFFLEVBTGE7QUFNbkJMLGNBQVksRUFBRSxDQU5LO0FBT25Cc0IsY0FBWSxFQUFFLGNBUEs7QUFRbkJELE1BQUksRUFBRTtBQVJhLEMiLCJmaWxlIjoibWFpbi44ZjVmYzcyMmYzZjcwMTFkZGFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0ICcuL01hcC5zY3NzJztcblxuY29uc3QgQW55UmVhY3RDb21wb25lbnQgPSAoeyB0ZXh0IH0pID0+IDxkaXY+e3RleHR9PC9kaXY+O1xuXG5jb25zdCBEb3QgPSAoKSA9PiA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgbGF0OiAzNy41NzE0LFxuICAgICAgbG5nOiAtMTIyLjMzMDk5XG4gICAgfSxcbiAgICBkYXRhOiBbXSxcbiAgICBtaW5UaW1lc3RhbXA6IDAsXG4gICAgbWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcbiAgICB6b29tOiAxMVxuICB9O1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFRpbWVzdGFtcDogdGhpcy5wcm9wcy5taW5UaW1lc3RhbXBcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBjdXJyZW50VGltZXN0YW1wOnZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5wcm9wcy5kYXRhIHx8IFtdO1xuICAgIGNvbnN0IGRvdHMgPSBkYXRhXG4gICAgICAuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPD0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZXN0YW1wKVxuICAgICAgLm1hcChkID0+IDxEb3QgbGF0PXtkLmxhdH0gbG5nPXtkLmxvbmd9IGtleT17YCR7ZC50aW1lc3RhbXB9XyR7TWF0aC5yYW5kb20oKX1gfSAvPik7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBoZWlnaHQ6JzEwMCUnLCB3aWR0aDonMTAwJScgfX0+XG5cdFx0XHQ8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJVQ053OENnMDFzLVBJVVZ0bGxPNENlVEFlRDBYbjkxNCcgfX1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn1cbiAgICAgICAgICBkZWZhdWx0Wm9vbT17dGhpcy5wcm9wcy56b29tfVxuICAgICAgICA+XG4gICAgICAgICAge2RvdHN9XG4gICAgICAgICAgPERvdFxuICAgICAgICAgICAgbGF0PXs1OS45NTU0MTN9XG4gICAgICAgICAgICBsbmc9ezMwLjMzNzg0NH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuXG4gICAgICAgIDxTbGlkZXIgbWluPXt0aGlzLnByb3BzLm1pblRpbWVzdGFtcH0gbWF4PXt0aGlzLnByb3BzLm1heFRpbWVzdGFtcH0gb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlKHZhbHVlKX0gLz5cblx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==