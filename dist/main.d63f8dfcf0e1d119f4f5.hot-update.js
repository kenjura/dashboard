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
          key: d.timestamp
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJtYXAiLCJkIiwibGF0IiwibG9uZyIsInRpbWVzdGFtcCIsImhlaWdodCIsIndpZHRoIiwia2V5IiwiY2VudGVyIiwiem9vbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibG5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsd0VBQU1BLElBQU4sQ0FBZDtBQUFBLENBQTFCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FBTTtBQUFLLFNBQUssRUFBQztBQUFYLElBQU47QUFBQSxDQUFaOztJQUVxQkMsRzs7Ozs7QUFTbkIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRFQUNiQSxLQURhO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLSCxLQUFMLENBQVdDLElBQXpCLEtBQWtDLEtBQUtELEtBQUwsQ0FBV0MsSUFBN0MsSUFBcUQsRUFBbEU7QUFDQSxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxlQUFJLDJEQUFDLEdBQUQ7QUFBSyxhQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixhQUFHLEVBQUVELENBQUMsQ0FBQ0UsSUFBeEI7QUFBOEIsYUFBRyxFQUFFRixDQUFDLENBQUNHO0FBQXJDLFVBQUo7QUFBQSxPQUFWLENBQWI7QUFDQSxhQUFPO0FBQUssVUFBRSxFQUFDLEtBQVI7QUFBYyxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBQyxNQUFUO0FBQWlCQyxlQUFLLEVBQUM7QUFBdkI7QUFBckIsU0FDUiwyREFBQyx1REFBRDtBQUNPLHdCQUFnQixFQUFFO0FBQUVDLGFBQUcsRUFBRTtBQUFQLFNBRHpCO0FBRU8scUJBQWEsRUFBRSxLQUFLWixLQUFMLENBQVdhLE1BRmpDO0FBR08sbUJBQVcsRUFBRSxLQUFLYixLQUFMLENBQVdjO0FBSC9CLFNBS1FWLElBTFIsRUFNTywyREFBQyxHQUFEO0FBQ0UsV0FBRyxFQUFFLFNBRFA7QUFFRSxXQUFHLEVBQUU7QUFGUCxRQU5QLENBRFEsQ0FBUDtBQWFEOzs7O0VBN0I4QlcsNENBQUssQ0FBQ0MsUzs7Z0JBQWxCakIsRyxrQkFDRTtBQUNuQmMsUUFBTSxFQUFFO0FBQ05OLE9BQUcsRUFBRSxPQURDO0FBRU5VLE9BQUcsRUFBRSxDQUFDO0FBRkEsR0FEVztBQUtuQkgsTUFBSSxFQUFFO0FBTGEsQyIsImZpbGUiOiJtYWluLmQ2M2Y4ZGZjZjBlMWQxMTlmNGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAnLi9NYXAuc2Nzcyc7XG5cbmNvbnN0IEFueVJlYWN0Q29tcG9uZW50ID0gKHsgdGV4dCB9KSA9PiA8ZGl2Pnt0ZXh0fTwvZGl2PjtcblxuY29uc3QgRG90ID0gKCkgPT4gPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogMzcuNTcxNCxcbiAgICAgIGxuZzogLTEyMi4zMzA5OVxuICAgIH0sXG4gICAgem9vbTogMTFcbiAgfTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5wcm9wcy5kYXRhIHx8IFtdO1xuICAgIGNvbnN0IGRvdHMgPSBkYXRhLm1hcChkID0+IDxEb3QgbGF0PXtkLmxhdH0gbG5nPXtkLmxvbmd9IGtleT17ZC50aW1lc3RhbXB9IC8+KTtcbiAgICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGhlaWdodDonMTAwJScsIHdpZHRoOicxMDAlJyB9fT5cblx0XHRcdDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QlVDTnc4Q2cwMXMtUElVVnRsbE80Q2VUQWVEMFhuOTE0JyB9fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XG4gICAgICAgID5cbiAgICAgICAgICB7ZG90c31cbiAgICAgICAgICA8RG90XG4gICAgICAgICAgICBsYXQ9ezU5Ljk1NTQxM31cbiAgICAgICAgICAgIGxuZz17MzAuMzM3ODQ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR29vZ2xlTWFwUmVhY3Q+XG5cdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=