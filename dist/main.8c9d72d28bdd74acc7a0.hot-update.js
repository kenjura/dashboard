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
      currentTimestamp: _this.props.data.minTimestamp
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

      var data = Array.isArray(this.props.data.data) && this.props.data.data || [];
      var dots = data.filter(function (d) {
        return d.timestamp >= _this2.state.currentTimestamp;
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
        min: this.props.data.minTimestamp,
        max: this.props.data.maxTimestamp,
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
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwiZGF0YSIsIm1pblRpbWVzdGFtcCIsInZhbHVlIiwic2V0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJkb3RzIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsIm1hcCIsImxhdCIsImxvbmciLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJrZXkiLCJjZW50ZXIiLCJ6b29tIiwibWF4VGltZXN0YW1wIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJsbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FBYyx5RUFBTUEsSUFBTixDQUFkO0FBQUEsQ0FBMUI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNO0FBQUssU0FBSyxFQUFDO0FBQVgsSUFBTjtBQUFBLENBQVo7O0lBRXFCQyxHOzs7OztBQVNuQixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLDZFQUFNQSxLQUFOO0FBRUUsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQUFFLE1BQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkM7QUFEdkIsS0FBYjtBQUhpQjtBQU1sQjs7Ozt1Q0FFa0JDLEssRUFBTztBQUN4QixXQUFLQyxRQUFMLEdBQWdCQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtQLEtBQXZCLEVBQThCO0FBQUVDLHdCQUFnQixFQUFDRztBQUFuQixPQUE5QixDQUFoQjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNRixJQUFJLEdBQUdNLEtBQUssQ0FBQ0MsT0FBTixDQUFjLEtBQUtWLEtBQUwsQ0FBV0csSUFBWCxDQUFnQkEsSUFBOUIsS0FBdUMsS0FBS0gsS0FBTCxDQUFXRyxJQUFYLENBQWdCQSxJQUF2RCxJQUErRCxFQUE1RTtBQUNBLFVBQU1RLElBQUksR0FBR1IsSUFBSSxDQUNkUyxNQURVLENBQ0gsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsU0FBRixJQUFlLE1BQUksQ0FBQ2IsS0FBTCxDQUFXQyxnQkFBOUI7QUFBQSxPQURFLEVBRVZhLEdBRlUsQ0FFTixVQUFBRixDQUFDO0FBQUEsZUFBSSw0REFBQyxHQUFEO0FBQUssYUFBRyxFQUFFQSxDQUFDLENBQUNHLEdBQVo7QUFBaUIsYUFBRyxFQUFFSCxDQUFDLENBQUNJLElBQXhCO0FBQThCLGFBQUcsWUFBS0osQ0FBQyxDQUFDQyxTQUFQLGNBQW9CSSxJQUFJLENBQUNDLE1BQUwsRUFBcEI7QUFBakMsVUFBSjtBQUFBLE9BRkssQ0FBYjtBQUdBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDREQUFDLHdEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUt0QixLQUFMLENBQVd1QixNQUZqQztBQUdPLG1CQUFXLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV3dCO0FBSC9CLFNBS1FiLElBTFIsRUFNTyw0REFBQyxHQUFEO0FBQ0UsV0FBRyxFQUFFLFNBRFA7QUFFRSxXQUFHLEVBQUU7QUFGUCxRQU5QLENBRFEsRUFhSDtBQUFRLFdBQUcsRUFBRSxLQUFLWCxLQUFMLENBQVdHLElBQVgsQ0FBZ0JDLFlBQTdCO0FBQTJDLFdBQUcsRUFBRSxLQUFLSixLQUFMLENBQVdHLElBQVgsQ0FBZ0JzQixZQUFoRTtBQUE4RSxnQkFBUSxFQUFFLGtCQUFBcEIsS0FBSztBQUFBLGlCQUFJLE1BQUksQ0FBQ3FCLGtCQUFMLENBQXdCckIsS0FBeEIsQ0FBSjtBQUFBO0FBQTdGLFFBYkcsQ0FBUDtBQWVEOzs7O0VBekM4QnNCLDZDQUFLLENBQUNDLFM7O2dCQUFsQjdCLEcsa0JBQ0U7QUFDbkJ3QixRQUFNLEVBQUU7QUFDTlAsT0FBRyxFQUFFLE9BREM7QUFFTmEsT0FBRyxFQUFFLENBQUM7QUFGQSxHQURXO0FBS25CTCxNQUFJLEVBQUU7QUFMYSxDIiwiZmlsZSI6Im1haW4uOGM5ZDcyZDI4YmRkNzRhY2M3YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCAnLi9NYXAuc2Nzcyc7XG5cbmNvbnN0IEFueVJlYWN0Q29tcG9uZW50ID0gKHsgdGV4dCB9KSA9PiA8ZGl2Pnt0ZXh0fTwvZGl2PjtcblxuY29uc3QgRG90ID0gKCkgPT4gPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogMzcuNTcxNCxcbiAgICAgIGxuZzogLTEyMi4zMzA5OVxuICAgIH0sXG4gICAgem9vbTogMTFcbiAgfTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXA6IHRoaXMucHJvcHMuZGF0YS5taW5UaW1lc3RhbXBcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgeyBjdXJyZW50VGltZXN0YW1wOnZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YS5kYXRhKSAmJiB0aGlzLnByb3BzLmRhdGEuZGF0YSB8fCBbXTtcbiAgICBjb25zdCBkb3RzID0gZGF0YVxuICAgICAgLmZpbHRlcihkID0+IGQudGltZXN0YW1wID49IHRoaXMuc3RhdGUuY3VycmVudFRpbWVzdGFtcClcbiAgICAgIC5tYXAoZCA9PiA8RG90IGxhdD17ZC5sYXR9IGxuZz17ZC5sb25nfSBrZXk9e2Ake2QudGltZXN0YW1wfV8ke01hdGgucmFuZG9tKCl9YH0gLz4pO1xuICAgIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OicxMDAlJywgd2lkdGg6JzEwMCUnIH19PlxuXHRcdFx0PEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCVUNOdzhDZzAxcy1QSVVWdGxsTzRDZVRBZUQwWG45MTQnIH19XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XG4gICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3RzfVxuICAgICAgICAgIDxEb3RcbiAgICAgICAgICAgIGxhdD17NTkuOTU1NDEzfVxuICAgICAgICAgICAgbG5nPXszMC4zMzc4NDR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cblxuICAgICAgICA8U2xpZGVyIG1pbj17dGhpcy5wcm9wcy5kYXRhLm1pblRpbWVzdGFtcH0gbWF4PXt0aGlzLnByb3BzLmRhdGEubWF4VGltZXN0YW1wfSBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UodmFsdWUpfSAvPlxuXHQ8L2Rpdj47XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9