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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_8__);
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
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, text);
};

var Dot = function Dot() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dot, {
          lat: d.lat,
          lng: d.long
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "map",
        style: {
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914'
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, dots, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Dot, {
        lat: 59.955413,
        lng: 30.337844
      })));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_defineProperty(Map, "defaultProps", {
  center: {
    lat: 37.5714,
    lng: -122.33099
  },
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJtYXAiLCJkIiwibGF0IiwibG9uZyIsImhlaWdodCIsIndpZHRoIiwia2V5IiwiY2VudGVyIiwiem9vbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsd0VBQU1BLElBQU4sQ0FBZDtBQUFBLENBQTFCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTTtBQUFLLFNBQUssRUFBQztBQUFYLElBQU47QUFBQSxDQUFaOztJQUVxQkMsRzs7Ozs7QUFTbkIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRFQUNiQSxLQURhO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLSCxLQUFMLENBQVdDLElBQXpCLEtBQWtDLEtBQUtELEtBQUwsQ0FBV0MsSUFBN0MsSUFBcUQsRUFBbEU7QUFDQSxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxlQUFJLDJEQUFDLEdBQUQ7QUFBSyxhQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixhQUFHLEVBQUVELENBQUMsQ0FBQ0U7QUFBeEIsVUFBSjtBQUFBLE9BQVYsQ0FBYjtBQUNBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDJEQUFDLHVEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUtYLEtBQUwsQ0FBV1ksTUFGakM7QUFHTyxtQkFBVyxFQUFFLEtBQUtaLEtBQUwsQ0FBV2E7QUFIL0IsU0FLUVQsSUFMUixFQU1PLDJEQUFDLEdBQUQ7QUFDRSxXQUFHLEVBQUUsU0FEUDtBQUVFLFdBQUcsRUFBRTtBQUZQLFFBTlAsQ0FEUSxDQUFQO0FBYUQ7Ozs7RUE3QjhCVSw0Q0FBSyxDQUFDQyxTOztnQkFBbEJoQixHLGtCQUNFO0FBQ25CYSxRQUFNLEVBQUU7QUFDTkwsT0FBRyxFQUFFLE9BREM7QUFFTlMsT0FBRyxFQUFFLENBQUM7QUFGQSxHQURXO0FBS25CSCxNQUFJLEVBQUU7QUFMYSxDIiwiZmlsZSI6Im1haW4uMGM4NDQ2M2JmZTQ5ZjVlMWQ3YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb29nbGVNYXBSZWFjdCBmcm9tICdnb29nbGUtbWFwLXJlYWN0JztcblxuaW1wb3J0ICcuL01hcC5zY3NzJztcblxuY29uc3QgQW55UmVhY3RDb21wb25lbnQgPSAoeyB0ZXh0IH0pID0+IDxkaXY+e3RleHR9PC9kaXY+O1xuXG5jb25zdCBEb3QgPSAoKSA9PiA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgbGF0OiAzNy41NzE0LFxuICAgICAgbG5nOiAtMTIyLjMzMDk5XG4gICAgfSxcbiAgICB6b29tOiAxMVxuICB9O1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLnByb3BzLmRhdGEgfHwgW107XG4gICAgY29uc3QgZG90cyA9IGRhdGEubWFwKGQgPT4gPERvdCBsYXQ9e2QubGF0fSBsbmc9e2QubG9uZ30gLz4pO1xuICAgIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OicxMDAlJywgd2lkdGg6JzEwMCUnIH19PlxuXHRcdFx0PEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCVUNOdzhDZzAxcy1QSVVWdGxsTzRDZVRBZUQwWG45MTQnIH19XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XG4gICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3RzfVxuICAgICAgICAgIDxEb3RcbiAgICAgICAgICAgIGxhdD17NTkuOTU1NDEzfVxuICAgICAgICAgICAgbG5nPXszMC4zMzc4NDR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Hb29nbGVNYXBSZWFjdD5cblx0PC9kaXY+O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==