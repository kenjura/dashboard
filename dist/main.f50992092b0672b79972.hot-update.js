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
        lat: 59.955413,
        lng: 30.337844
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
  data: [],
  minTimestamp: 0,
  maxTimestamp: 32503680000000,
  zoom: 11
});



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwibWluVGltZXN0YW1wIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJmaWx0ZXIiLCJkIiwidGltZXN0YW1wIiwibWFwIiwibGF0IiwibG9uZyIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHQiLCJ3aWR0aCIsImtleSIsImNlbnRlciIsInpvb20iLCJSZWFjdCIsIkNvbXBvbmVudCIsImxuZyIsIm1heFRpbWVzdGFtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjLHdFQUFNQSxJQUFOLENBQWQ7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU07QUFBSyxTQUFLLEVBQUM7QUFBWCxJQUFOO0FBQUEsQ0FBWjs7SUFFcUJDLEc7Ozs7O0FBWW5CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsNkVBQU1BLEtBQU47QUFFRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEVBQUUsTUFBS0YsS0FBTCxDQUFXRztBQURsQixLQUFiO0FBSGlCO0FBTWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLTixLQUFMLENBQVdJLElBQXpCLEtBQWtDLEtBQUtKLEtBQUwsQ0FBV0ksSUFBN0MsSUFBcUQsRUFBbEU7QUFDQSxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FDZEksTUFEVSxDQUNILFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLFNBQUYsSUFBZSxNQUFJLENBQUNWLEtBQUwsQ0FBV0UsZ0JBQTlCO0FBQUEsT0FERSxFQUVWUyxHQUZVLENBRU4sVUFBQUYsQ0FBQztBQUFBLGVBQUksMkRBQUMsR0FBRDtBQUFLLGFBQUcsRUFBRUEsQ0FBQyxDQUFDRyxHQUFaO0FBQWlCLGFBQUcsRUFBRUgsQ0FBQyxDQUFDSSxJQUF4QjtBQUE4QixhQUFHLFlBQUtKLENBQUMsQ0FBQ0MsU0FBUCxjQUFvQkksSUFBSSxDQUFDQyxNQUFMLEVBQXBCO0FBQWpDLFVBQUo7QUFBQSxPQUZLLENBQWI7QUFHQSxhQUFPO0FBQUssVUFBRSxFQUFDLEtBQVI7QUFBYyxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBQyxNQUFUO0FBQWlCQyxlQUFLLEVBQUM7QUFBdkI7QUFBckIsU0FDUiwyREFBQyx1REFBRDtBQUNPLHdCQUFnQixFQUFFO0FBQUVDLGFBQUcsRUFBRTtBQUFQLFNBRHpCO0FBRU8scUJBQWEsRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUIsTUFGakM7QUFHTyxtQkFBVyxFQUFFLEtBQUtuQixLQUFMLENBQVdvQjtBQUgvQixTQUtRYixJQUxSLEVBTU8sMkRBQUMsR0FBRDtBQUNFLFdBQUcsRUFBRSxTQURQO0FBRUUsV0FBRyxFQUFFO0FBRlAsUUFOUCxDQURRLENBQVA7QUFjRDs7OztFQXZDOEJjLDRDQUFLLENBQUNDLFM7O2dCQUFsQnZCLEcsa0JBQ0U7QUFDbkJvQixRQUFNLEVBQUU7QUFDTlAsT0FBRyxFQUFFLE9BREM7QUFFTlcsT0FBRyxFQUFFLENBQUM7QUFGQSxHQURXO0FBS25CbkIsTUFBSSxFQUFFLEVBTGE7QUFNbkJELGNBQVksRUFBRSxDQU5LO0FBT25CcUIsY0FBWSxFQUFFLGNBUEs7QUFRbkJKLE1BQUksRUFBRTtBQVJhLEMiLCJmaWxlIjoibWFpbi5mNTA5OTIwOTJiMDY3MmI3OTk3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCAnLi9NYXAuc2Nzcyc7XG5cbmNvbnN0IEFueVJlYWN0Q29tcG9uZW50ID0gKHsgdGV4dCB9KSA9PiA8ZGl2Pnt0ZXh0fTwvZGl2PjtcblxuY29uc3QgRG90ID0gKCkgPT4gPGRpdiBjbGFzcz1cImRvdFwiPjwvZGl2PjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogMzcuNTcxNCxcbiAgICAgIGxuZzogLTEyMi4zMzA5OVxuICAgIH0sXG4gICAgZGF0YTogW10sXG4gICAgbWluVGltZXN0YW1wOiAwLFxuICAgIG1heFRpbWVzdGFtcDogMzI1MDM2ODAwMDAwMDAsXG4gICAgem9vbTogMTFcbiAgfTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRUaW1lc3RhbXA6IHRoaXMucHJvcHMubWluVGltZXN0YW1wXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5wcm9wcy5kYXRhIHx8IFtdO1xuICAgIGNvbnN0IGRvdHMgPSBkYXRhXG4gICAgICAuZmlsdGVyKGQgPT4gZC50aW1lc3RhbXAgPD0gdGhpcy5wcm9wcy5jdXJyZW50VGltZXN0YW1wKVxuICAgICAgLm1hcChkID0+IDxEb3QgbGF0PXtkLmxhdH0gbG5nPXtkLmxvbmd9IGtleT17YCR7ZC50aW1lc3RhbXB9XyR7TWF0aC5yYW5kb20oKX1gfSAvPik7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyBoZWlnaHQ6JzEwMCUnLCB3aWR0aDonMTAwJScgfX0+XG5cdFx0XHQ8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgICBib290c3RyYXBVUkxLZXlzPXt7IGtleTogJ0FJemFTeUJVQ053OENnMDFzLVBJVVZ0bGxPNENlVEFlRDBYbjkxNCcgfX1cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt0aGlzLnByb3BzLmNlbnRlcn1cbiAgICAgICAgICBkZWZhdWx0Wm9vbT17dGhpcy5wcm9wcy56b29tfVxuICAgICAgICA+XG4gICAgICAgICAge2RvdHN9XG4gICAgICAgICAgPERvdFxuICAgICAgICAgICAgbGF0PXs1OS45NTU0MTN9XG4gICAgICAgICAgICBsbmc9ezMwLjMzNzg0NH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuXG5cdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=