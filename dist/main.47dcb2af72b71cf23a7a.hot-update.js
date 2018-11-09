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
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Map.scss */ "./src/components/Map/Map.scss");
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Map_scss__WEBPACK_IMPORTED_MODULE_9__);








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
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, text);
};

var Dot = function Dot() {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    class: "dot"
  });
};

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    return _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      var data = Array.isArray(this.props.data) && this.props.data || [];
      var dots = data.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dot, {
          lat: d.lat,
          lng: d.long,
          key: "".concat(d.timestamp, "_").concat(Math.random())
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "map",
        style: {
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914'
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, dots, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dot, {
        lat: 59.955413,
        lng: 30.337844
      })));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

_defineProperty(Map, "defaultProps", {
  center: {
    lat: 37.5714,
    lng: -122.33099
  },
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJtYXAiLCJkIiwibGF0IiwibG9uZyIsInRpbWVzdGFtcCIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHQiLCJ3aWR0aCIsImtleSIsImNlbnRlciIsInpvb20iLCJSZWFjdCIsIkNvbXBvbmVudCIsImxuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjLHdFQUFNQSxJQUFOLENBQWQ7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU07QUFBSyxTQUFLLEVBQUM7QUFBWCxJQUFOO0FBQUEsQ0FBWjs7SUFFcUJDLEc7Ozs7O0FBU25CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0RUFDYkEsS0FEYTtBQUVsQjs7Ozs2QkFFUTtBQUNQLFVBQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWMsS0FBS0gsS0FBTCxDQUFXQyxJQUF6QixLQUFrQyxLQUFLRCxLQUFMLENBQVdDLElBQTdDLElBQXFELEVBQWxFO0FBQ0EsVUFBTUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsZUFBSSwyREFBQyxHQUFEO0FBQUssYUFBRyxFQUFFQSxDQUFDLENBQUNDLEdBQVo7QUFBaUIsYUFBRyxFQUFFRCxDQUFDLENBQUNFLElBQXhCO0FBQThCLGFBQUcsWUFBS0YsQ0FBQyxDQUFDRyxTQUFQLGNBQW9CQyxJQUFJLENBQUNDLE1BQUwsRUFBcEI7QUFBakMsVUFBSjtBQUFBLE9BQVYsQ0FBYjtBQUNBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDJEQUFDLHVEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUtkLEtBQUwsQ0FBV2UsTUFGakM7QUFHTyxtQkFBVyxFQUFFLEtBQUtmLEtBQUwsQ0FBV2dCO0FBSC9CLFNBS1FaLElBTFIsRUFNTywyREFBQyxHQUFEO0FBQ0UsV0FBRyxFQUFFLFNBRFA7QUFFRSxXQUFHLEVBQUU7QUFGUCxRQU5QLENBRFEsQ0FBUDtBQWFEOzs7O0VBN0I4QmEsNENBQUssQ0FBQ0MsUzs7Z0JBQWxCbkIsRyxrQkFDRTtBQUNuQmdCLFFBQU0sRUFBRTtBQUNOUixPQUFHLEVBQUUsT0FEQztBQUVOWSxPQUFHLEVBQUUsQ0FBQztBQUZBLEdBRFc7QUFLbkJILE1BQUksRUFBRTtBQUxhLEMiLCJmaWxlIjoibWFpbi40N2RjYjJhZjcyYjcxY2YyM2E3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgJy4vTWFwLnNjc3MnO1xuXG5jb25zdCBBbnlSZWFjdENvbXBvbmVudCA9ICh7IHRleHQgfSkgPT4gPGRpdj57dGV4dH08L2Rpdj47XG5cbmNvbnN0IERvdCA9ICgpID0+IDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDM3LjU3MTQsXG4gICAgICBsbmc6IC0xMjIuMzMwOTlcbiAgICB9LFxuICAgIHpvb206IDExXG4gIH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMucHJvcHMuZGF0YSB8fCBbXTtcbiAgICBjb25zdCBkb3RzID0gZGF0YS5tYXAoZCA9PiA8RG90IGxhdD17ZC5sYXR9IGxuZz17ZC5sb25nfSBrZXk9e2Ake2QudGltZXN0YW1wfV8ke01hdGgucmFuZG9tKCl9YH0gLz4pO1xuICAgIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OicxMDAlJywgd2lkdGg6JzEwMCUnIH19PlxuXHRcdFx0PEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCVUNOdzhDZzAxcy1QSVVWdGxsTzRDZVRBZUQwWG45MTQnIH19XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XG4gICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3RzfVxuICAgICAgICAgIDxEb3RcbiAgICAgICAgICAgIGxhdD17NTkuOTU1NDEzfVxuICAgICAgICAgICAgbG5nPXszMC4zMzc4NDR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cblx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==