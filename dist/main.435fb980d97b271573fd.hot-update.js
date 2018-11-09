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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Map.scss */ "./src/components/Map/Map.scss");
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Map_scss__WEBPACK_IMPORTED_MODULE_8__);







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
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, text);
};

var Dot = function Dot() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
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
      var dots = this.props.data.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Dot, {
          lat: d.lat,
          lng: d.long
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "map",
        style: {
          height: '100%',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyBUCNw8Cg01s-PIUVtllO4CeTAeD0Xn914'
        },
        defaultCenter: this.props.center,
        defaultZoom: this.props.zoom
      }, dots, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Dot, {
        lat: 59.955413,
        lng: 30.337844
      })));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

_defineProperty(Map, "defaultProps", {
  center: {
    lat: 37.5714,
    lng: -122.33099
  },
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwiZG90cyIsImRhdGEiLCJtYXAiLCJkIiwibGF0IiwibG9uZyIsImhlaWdodCIsIndpZHRoIiwia2V5IiwiY2VudGVyIiwiem9vbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsd0VBQU1BLElBQU4sQ0FBZDtBQUFBLENBQTFCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTTtBQUFLLFNBQUssRUFBQztBQUFYLElBQU47QUFBQSxDQUFaOztJQUVxQkMsRzs7Ozs7QUFTbkIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRFQUNiQSxLQURhO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHLEtBQUtELEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQUMsQ0FBQztBQUFBLGVBQUksMkRBQUMsR0FBRDtBQUFLLGFBQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFaO0FBQWlCLGFBQUcsRUFBRUQsQ0FBQyxDQUFDRTtBQUF4QixVQUFKO0FBQUEsT0FBckIsQ0FBYjtBQUNBLGFBQU87QUFBSyxVQUFFLEVBQUMsS0FBUjtBQUFjLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFDLE1BQVQ7QUFBaUJDLGVBQUssRUFBQztBQUF2QjtBQUFyQixTQUNSLDJEQUFDLHVEQUFEO0FBQ08sd0JBQWdCLEVBQUU7QUFBRUMsYUFBRyxFQUFFO0FBQVAsU0FEekI7QUFFTyxxQkFBYSxFQUFFLEtBQUtULEtBQUwsQ0FBV1UsTUFGakM7QUFHTyxtQkFBVyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1c7QUFIL0IsU0FLUVYsSUFMUixFQU1PLDJEQUFDLEdBQUQ7QUFDRSxXQUFHLEVBQUUsU0FEUDtBQUVFLFdBQUcsRUFBRTtBQUZQLFFBTlAsQ0FEUSxDQUFQO0FBYUQ7Ozs7RUE1QjhCVyw0Q0FBSyxDQUFDQyxTOztnQkFBbEJkLEcsa0JBQ0U7QUFDbkJXLFFBQU0sRUFBRTtBQUNOTCxPQUFHLEVBQUUsT0FEQztBQUVOUyxPQUFHLEVBQUUsQ0FBQztBQUZBLEdBRFc7QUFLbkJILE1BQUksRUFBRTtBQUxhLEMiLCJmaWxlIjoibWFpbi40MzVmYjk4MGQ5N2IyNzE1NzNmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuXG5pbXBvcnQgJy4vTWFwLnNjc3MnO1xuXG5jb25zdCBBbnlSZWFjdENvbXBvbmVudCA9ICh7IHRleHQgfSkgPT4gPGRpdj57dGV4dH08L2Rpdj47XG5cbmNvbnN0IERvdCA9ICgpID0+IDxkaXYgY2xhc3M9XCJkb3RcIj48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDM3LjU3MTQsXG4gICAgICBsbmc6IC0xMjIuMzMwOTlcbiAgICB9LFxuICAgIHpvb206IDExXG4gIH07XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkb3RzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChkID0+IDxEb3QgbGF0PXtkLmxhdH0gbG5nPXtkLmxvbmd9IC8+KTtcbiAgICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGhlaWdodDonMTAwJScsIHdpZHRoOicxMDAlJyB9fT5cblx0XHRcdDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QlVDTnc4Q2cwMXMtUElVVnRsbE80Q2VUQWVEMFhuOTE0JyB9fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XG4gICAgICAgID5cbiAgICAgICAgICB7ZG90c31cbiAgICAgICAgICA8RG90XG4gICAgICAgICAgICBsYXQ9ezU5Ljk1NTQxM31cbiAgICAgICAgICAgIGxuZz17MzAuMzM3ODQ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG5cdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=