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
      }, 'foo' || false, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Dot, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLmpzIl0sIm5hbWVzIjpbIkFueVJlYWN0Q29tcG9uZW50IiwidGV4dCIsIkRvdCIsIk1hcCIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VGltZXN0YW1wIiwibWluVGltZXN0YW1wIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImRvdHMiLCJmaWx0ZXIiLCJkIiwidGltZXN0YW1wIiwibWFwIiwibGF0IiwibG9uZyIsIk1hdGgiLCJyYW5kb20iLCJoZWlnaHQiLCJ3aWR0aCIsImtleSIsImNlbnRlciIsInpvb20iLCJSZWFjdCIsIkNvbXBvbmVudCIsImxuZyIsIm1heFRpbWVzdGFtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUFjLHdFQUFNQSxJQUFOLENBQWQ7QUFBQSxDQUExQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQU07QUFBSyxTQUFLLEVBQUM7QUFBWCxJQUFOO0FBQUEsQ0FBWjs7SUFFcUJDLEc7Ozs7O0FBWW5CLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbkIsNkVBQU1BLEtBQU47QUFFRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsc0JBQWdCLEVBQUUsTUFBS0YsS0FBTCxDQUFXRztBQURsQixLQUFiO0FBSGlCO0FBTWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxLQUFLTixLQUFMLENBQVdJLElBQXpCLEtBQWtDLEtBQUtKLEtBQUwsQ0FBV0ksSUFBN0MsSUFBcUQsRUFBbEU7QUFDQSxVQUFNRyxJQUFJLEdBQUdILElBQUksQ0FDZEksTUFEVSxDQUNILFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLFNBQUYsSUFBZSxNQUFJLENBQUNWLEtBQUwsQ0FBV0UsZ0JBQTlCO0FBQUEsT0FERSxFQUVWUyxHQUZVLENBRU4sVUFBQUYsQ0FBQztBQUFBLGVBQUksMkRBQUMsR0FBRDtBQUFLLGFBQUcsRUFBRUEsQ0FBQyxDQUFDRyxHQUFaO0FBQWlCLGFBQUcsRUFBRUgsQ0FBQyxDQUFDSSxJQUF4QjtBQUE4QixhQUFHLFlBQUtKLENBQUMsQ0FBQ0MsU0FBUCxjQUFvQkksSUFBSSxDQUFDQyxNQUFMLEVBQXBCO0FBQWpDLFVBQUo7QUFBQSxPQUZLLENBQWI7QUFHQSxhQUFPO0FBQUssVUFBRSxFQUFDLEtBQVI7QUFBYyxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBQyxNQUFUO0FBQWlCQyxlQUFLLEVBQUM7QUFBdkI7QUFBckIsU0FDUiwyREFBQyx1REFBRDtBQUNPLHdCQUFnQixFQUFFO0FBQUVDLGFBQUcsRUFBRTtBQUFQLFNBRHpCO0FBRU8scUJBQWEsRUFBRSxLQUFLbEIsS0FBTCxDQUFXbUIsTUFGakM7QUFHTyxtQkFBVyxFQUFFLEtBQUtuQixLQUFMLENBQVdvQjtBQUgvQixTQUtRLFNBQU9iLEtBTGYsRUFNTywyREFBQyxHQUFEO0FBQ0UsV0FBRyxFQUFFLFNBRFA7QUFFRSxXQUFHLEVBQUU7QUFGUCxRQU5QLENBRFEsQ0FBUDtBQWNEOzs7O0VBdkM4QmMsNENBQUssQ0FBQ0MsUzs7Z0JBQWxCdkIsRyxrQkFDRTtBQUNuQm9CLFFBQU0sRUFBRTtBQUNOUCxPQUFHLEVBQUUsT0FEQztBQUVOVyxPQUFHLEVBQUUsQ0FBQztBQUZBLEdBRFc7QUFLbkJuQixNQUFJLEVBQUUsRUFMYTtBQU1uQkQsY0FBWSxFQUFFLENBTks7QUFPbkJxQixjQUFZLEVBQUUsY0FQSztBQVFuQkosTUFBSSxFQUFFO0FBUmEsQyIsImZpbGUiOiJtYWluLjIyYjA0MzE1YTM5ZWQwZTYyMGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlTWFwUmVhY3QgZnJvbSAnZ29vZ2xlLW1hcC1yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0ICcuL01hcC5zY3NzJztcblxuY29uc3QgQW55UmVhY3RDb21wb25lbnQgPSAoeyB0ZXh0IH0pID0+IDxkaXY+e3RleHR9PC9kaXY+O1xuXG5jb25zdCBEb3QgPSAoKSA9PiA8ZGl2IGNsYXNzPVwiZG90XCI+PC9kaXY+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNlbnRlcjoge1xuICAgICAgbGF0OiAzNy41NzE0LFxuICAgICAgbG5nOiAtMTIyLjMzMDk5XG4gICAgfSxcbiAgICBkYXRhOiBbXSxcbiAgICBtaW5UaW1lc3RhbXA6IDAsXG4gICAgbWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcbiAgICB6b29tOiAxMVxuICB9O1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFRpbWVzdGFtcDogdGhpcy5wcm9wcy5taW5UaW1lc3RhbXBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YSA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLnByb3BzLmRhdGEgfHwgW107XG4gICAgY29uc3QgZG90cyA9IGRhdGFcbiAgICAgIC5maWx0ZXIoZCA9PiBkLnRpbWVzdGFtcCA8PSB0aGlzLnByb3BzLmN1cnJlbnRUaW1lc3RhbXApXG4gICAgICAubWFwKGQgPT4gPERvdCBsYXQ9e2QubGF0fSBsbmc9e2QubG9uZ30ga2V5PXtgJHtkLnRpbWVzdGFtcH1fJHtNYXRoLnJhbmRvbSgpfWB9IC8+KTtcbiAgICByZXR1cm4gPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IGhlaWdodDonMTAwJScsIHdpZHRoOicxMDAlJyB9fT5cblx0XHRcdDxHb29nbGVNYXBSZWFjdFxuICAgICAgICAgIGJvb3RzdHJhcFVSTEtleXM9e3sga2V5OiAnQUl6YVN5QlVDTnc4Q2cwMXMtUElVVnRsbE80Q2VUQWVEMFhuOTE0JyB9fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3RoaXMucHJvcHMuY2VudGVyfVxuICAgICAgICAgIGRlZmF1bHRab29tPXt0aGlzLnByb3BzLnpvb219XG4gICAgICAgID5cbiAgICAgICAgICB7J2Zvbyd8fGRvdHN9XG4gICAgICAgICAgPERvdFxuICAgICAgICAgICAgbGF0PXs1OS45NTU0MTN9XG4gICAgICAgICAgICBsbmc9ezMwLjMzNzg0NH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuXG5cdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=