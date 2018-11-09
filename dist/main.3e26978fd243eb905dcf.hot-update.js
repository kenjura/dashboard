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

var Dot = function Dot() {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwibWluVGltZXN0YW1wIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJmaWx0ZXIiLCJkIiwidGltZXN0YW1wIiwibWFwIiwibGF0IiwibG9uZyIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHQiLCJ3aWR0aCIsImtleSIsImNlbnRlciIsInpvb20iLCJjdXJyZW50RGF0YVBvaW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJsbmciLCJtYXhUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyx3RUFBTUEsSUFBTixDQUFkO0FBQUEsQ0FBMUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFBTjtBQUFBLENBQVo7O0lBRXFCQyxHOzs7OztBQWdCbkIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNuQiw2RUFBTUEsS0FBTjtBQUVFLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxzQkFBZ0IsRUFBRSxNQUFLRixLQUFMLENBQVdHO0FBRGxCLEtBQWI7QUFIaUI7QUFNbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEtBQUtOLEtBQUwsQ0FBV0ksSUFBekIsS0FBa0MsS0FBS0osS0FBTCxDQUFXSSxJQUE3QyxJQUFxRCxFQUFsRTtBQUNBLFVBQU1HLElBQUksR0FBR0gsSUFBSSxDQUNkSSxNQURVLENBQ0gsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsU0FBRixJQUFlLE1BQUksQ0FBQ1YsS0FBTCxDQUFXRSxnQkFBOUI7QUFBQSxPQURFLEVBRVZTLEdBRlUsQ0FFTixVQUFBRixDQUFDO0FBQUEsZUFBSSwyREFBQyxHQUFEO0FBQUssYUFBRyxFQUFFQSxDQUFDLENBQUNHLEdBQVo7QUFBaUIsYUFBRyxFQUFFSCxDQUFDLENBQUNJLElBQXhCO0FBQThCLGFBQUcsWUFBS0osQ0FBQyxDQUFDQyxTQUFQLGNBQW9CSSxJQUFJLENBQUNDLE1BQUwsRUFBcEI7QUFBakMsVUFBSjtBQUFBLE9BRkssQ0FBYjtBQUdBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDJEQUFDLHVEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUtsQixLQUFMLENBQVdtQixNQUZqQztBQUdPLG1CQUFXLEVBQUUsS0FBS25CLEtBQUwsQ0FBV29CO0FBSC9CLFNBS1FiLElBTFIsRUFNTywyREFBQyxHQUFEO0FBQ0UsaUJBQVMsRUFBQyxNQURaO0FBRUUsV0FBRyxFQUFFLEtBQUtQLEtBQUwsQ0FBV3FCLGdCQUFYLENBQTRCVCxHQUZuQztBQUdFLFdBQUcsRUFBRSxLQUFLWixLQUFMLENBQVdxQixnQkFBWCxDQUE0QlI7QUFIbkMsUUFOUCxDQURRLENBQVA7QUFlRDs7OztFQTVDOEJTLDRDQUFLLENBQUNDLFM7O2dCQUFsQnhCLEcsa0JBQ0U7QUFDbkJvQixRQUFNLEVBQUU7QUFDTlAsT0FBRyxFQUFFLE9BREM7QUFFTlksT0FBRyxFQUFFLENBQUM7QUFGQSxHQURXO0FBS25CSCxrQkFBZ0IsRUFBRTtBQUNoQlQsT0FBRyxFQUFFLENBRFc7QUFFaEJDLFFBQUksRUFBRTtBQUZVLEdBTEM7QUFTbkJULE1BQUksRUFBRSxFQVRhO0FBVW5CRCxjQUFZLEVBQUUsQ0FWSztBQVduQnNCLGNBQVksRUFBRSxjQVhLO0FBWW5CTCxNQUFJLEVBQUU7QUFaYSxDIiwiZmlsZSI6Im1haW4uM2UyNjk3OGZkMjQzZWI5MDVkY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5pbXBvcnQgJy4vTWFwLnNjc3MnO1xuXG5jb25zdCBBbnlSZWFjdENvbXBvbmVudCA9ICh7IHRleHQgfSkgPT4gPGRpdj57dGV4dH08L2Rpdj47XG5cbmNvbnN0IERvdCA9ICgpID0+IDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDM3LjU3MTQsXG4gICAgICBsbmc6IC0xMjIuMzMwOTlcbiAgICB9LFxuICAgIGN1cnJlbnREYXRhUG9pbnQ6IHtcbiAgICAgIGxhdDogMCxcbiAgICAgIGxvbmc6IDAsXG4gICAgfSxcbiAgICBkYXRhOiBbXSxcbiAgICBtaW5UaW1lc3RhbXA6IDAsXG4gICAgbWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcbiAgICB6b29tOiAxMVxuICB9O1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFRpbWVzdGFtcDogdGhpcy5wcm9wcy5taW5UaW1lc3RhbXBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLnByb3BzLmRhdGEgfHwgW107XG4gICAgY29uc3QgZG90cyA9IGRhdGFcbiAgICAgIC5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA8PSB0aGlzLnByb3BzLmN1cnJlbnRUaW1lc3RhbXApXG4gICAgICAubWFwKGQgPT4gPERvdCBsYXQ9e2QubGF0fSBsbmc9e2QubG9uZ30ga2V5PXtgJHtkLnRpbWVzdGFtcH1fJHtNYXRoLnJhbmRvbSgpfWB9IC8+KTtcbiAgICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGhlaWdodDonMTAwJScsIHdpZHRoOicxMDAlJyB9fT5cblx0XHRcdDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QlVDTnc4Q2cwMXMtUElVVnRsbE80Q2VUQWVEMFhuOTE0JyB9fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XG4gICAgICAgID5cbiAgICAgICAgICB7ZG90c31cbiAgICAgICAgICA8RG90XG4gICAgICAgICAgICBpbnRlbnNpdHk9XCJoaWdoXCJcbiAgICAgICAgICAgIGxhdD17dGhpcy5wcm9wcy5jdXJyZW50RGF0YVBvaW50LmxhdH1cbiAgICAgICAgICAgIGxuZz17dGhpcy5wcm9wcy5jdXJyZW50RGF0YVBvaW50Lmxvbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cblxuXHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9