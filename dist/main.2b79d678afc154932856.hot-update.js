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
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Map.scss */ "./src/components/Map/Map.scss");
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Map_scss__WEBPACK_IMPORTED_MODULE_10__);









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
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, text);
};

var Dot = function Dot(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    class: "dot",
    intensity: props.intensity
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Math.random() > 0.9;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = Array.isArray(this.props.data) && this.props.data || [];
      var dots = data.filter(function (d) {
        return d.timestamp <= _this2.props.currentTimestamp;
      }).map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Dot, {
          lat: d.lat,
          lng: d.long,
          key: "".concat(d.timestamp, "_").concat(Math.random())
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "map",
        style: {
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914'
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, dots, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Dot, {
        intensity: "high",
        lat: this.props.currentDataPoint.lat,
        lng: this.props.currentDataPoint.long
      })));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

_defineProperty(Map, "defaultProps", {
  center: {
    lat: 37.5714,
    lng: -122.33099
  },
  currentDataPoint: {
    lat: 0,
    long: 0
  },
  data: [],
  minTimestamp: 0,
  maxTimestamp: 32503680000000,
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsInByb3BzIiwiaW50ZW5zaXR5IiwiTWFwIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwibWluVGltZXN0YW1wIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiTWF0aCIsInJhbmRvbSIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJkb3RzIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsIm1hcCIsImxhdCIsImxvbmciLCJoZWlnaHQiLCJ3aWR0aCIsImtleSIsImNlbnRlciIsInpvb20iLCJjdXJyZW50RGF0YVBvaW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJsbmciLCJtYXhUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyx3RUFBTUEsSUFBTixDQUFkO0FBQUEsQ0FBMUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUMsS0FBSztBQUFBLFNBQUk7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFpQixhQUFTLEVBQUVBLEtBQUssQ0FBQ0M7QUFBbEMsSUFBSjtBQUFBLENBQWpCOztJQUVxQkMsRzs7Ozs7QUFnQm5CLGVBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsNkVBQU1BLEtBQU47QUFFRSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEVBQUUsTUFBS0osS0FBTCxDQUFXSztBQURsQixLQUFiO0FBSGlCO0FBTWxCOzs7OzBDQUVxQkMsUyxFQUFXQyxTLEVBQVc7QUFDMUMsYUFBT0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXZCO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWMsS0FBS1osS0FBTCxDQUFXVSxJQUF6QixLQUFrQyxLQUFLVixLQUFMLENBQVdVLElBQTdDLElBQXFELEVBQWxFO0FBQ0EsVUFBTUcsSUFBSSxHQUFHSCxJQUFJLENBQ2RJLE1BRFUsQ0FDSCxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxTQUFGLElBQWUsTUFBSSxDQUFDaEIsS0FBTCxDQUFXSSxnQkFBOUI7QUFBQSxPQURFLEVBRVZhLEdBRlUsQ0FFTixVQUFBRixDQUFDO0FBQUEsZUFBSSwyREFBQyxHQUFEO0FBQUssYUFBRyxFQUFFQSxDQUFDLENBQUNHLEdBQVo7QUFBaUIsYUFBRyxFQUFFSCxDQUFDLENBQUNJLElBQXhCO0FBQThCLGFBQUcsWUFBS0osQ0FBQyxDQUFDQyxTQUFQLGNBQW9CUixJQUFJLENBQUNDLE1BQUwsRUFBcEI7QUFBakMsVUFBSjtBQUFBLE9BRkssQ0FBYjtBQUdBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFVyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDJEQUFDLHVEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUt0QixLQUFMLENBQVd1QixNQUZqQztBQUdPLG1CQUFXLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV3dCO0FBSC9CLFNBS1FYLElBTFIsRUFNTywyREFBQyxHQUFEO0FBQ0UsaUJBQVMsRUFBQyxNQURaO0FBRUUsV0FBRyxFQUFFLEtBQUtiLEtBQUwsQ0FBV3lCLGdCQUFYLENBQTRCUCxHQUZuQztBQUdFLFdBQUcsRUFBRSxLQUFLbEIsS0FBTCxDQUFXeUIsZ0JBQVgsQ0FBNEJOO0FBSG5DLFFBTlAsQ0FEUSxDQUFQO0FBZUQ7Ozs7RUFoRDhCTyw0Q0FBSyxDQUFDQyxTOztnQkFBbEJ6QixHLGtCQUNFO0FBQ25CcUIsUUFBTSxFQUFFO0FBQ05MLE9BQUcsRUFBRSxPQURDO0FBRU5VLE9BQUcsRUFBRSxDQUFDO0FBRkEsR0FEVztBQUtuQkgsa0JBQWdCLEVBQUU7QUFDaEJQLE9BQUcsRUFBRSxDQURXO0FBRWhCQyxRQUFJLEVBQUU7QUFGVSxHQUxDO0FBU25CVCxNQUFJLEVBQUUsRUFUYTtBQVVuQkwsY0FBWSxFQUFFLENBVks7QUFXbkJ3QixjQUFZLEVBQUUsY0FYSztBQVluQkwsTUFBSSxFQUFFO0FBWmEsQyIsImZpbGUiOiJtYWluLjJiNzlkNjc4YWZjMTU0OTMyODU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0ICcuL01hcC5zY3NzJztcblxuY29uc3QgQW55UmVhY3RDb21wb25lbnQgPSAoeyB0ZXh0IH0pID0+IDxkaXY+e3RleHR9PC9kaXY+O1xuXG5jb25zdCBEb3QgPSBwcm9wcyA9PiA8ZGl2IGNsYXNzPVwiZG90XCIgaW50ZW5zaXR5PXtwcm9wcy5pbnRlbnNpdHl9PjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogMzcuNTcxNCxcbiAgICAgIGxuZzogLTEyMi4zMzA5OVxuICAgIH0sXG4gICAgY3VycmVudERhdGFQb2ludDoge1xuICAgICAgbGF0OiAwLFxuICAgICAgbG9uZzogMCxcbiAgICB9LFxuICAgIGRhdGE6IFtdLFxuICAgIG1pblRpbWVzdGFtcDogMCxcbiAgICBtYXhUaW1lc3RhbXA6IDMyNTAzNjgwMDAwMDAwLFxuICAgIHpvb206IDExXG4gIH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50VGltZXN0YW1wOiB0aGlzLnByb3BzLm1pblRpbWVzdGFtcFxuICAgIH1cbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC45O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5wcm9wcy5kYXRhIHx8IFtdO1xuICAgIGNvbnN0IGRvdHMgPSBkYXRhXG4gICAgICAuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPD0gdGhpcy5wcm9wcy5jdXJyZW50VGltZXN0YW1wKVxuICAgICAgLm1hcChkID0+IDxEb3QgbGF0PXtkLmxhdH0gbG5nPXtkLmxvbmd9IGtleT17YCR7ZC50aW1lc3RhbXB9XyR7TWF0aC5yYW5kb20oKX1gfSAvPik7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBoZWlnaHQ6JzEwMCUnLCB3aWR0aDonMTAwJScgfX0+XG5cdFx0XHQ8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJVQ053OENnMDFzLVBJVVZ0bGxPNENlVEFlRDBYbjkxNCcgfX1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn1cbiAgICAgICAgICBkZWZhdWx0Wm9vbT17dGhpcy5wcm9wcy56b29tfVxuICAgICAgICA+XG4gICAgICAgICAge2RvdHN9XG4gICAgICAgICAgPERvdFxuICAgICAgICAgICAgaW50ZW5zaXR5PVwiaGlnaFwiXG4gICAgICAgICAgICBsYXQ9e3RoaXMucHJvcHMuY3VycmVudERhdGFQb2ludC5sYXR9XG4gICAgICAgICAgICBsbmc9e3RoaXMucHJvcHMuY3VycmVudERhdGFQb2ludC5sb25nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG5cblx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==