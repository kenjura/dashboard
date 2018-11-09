webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/Map/Map.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/Map/Map.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map div.dot {\n  background: #df114b;\n  border-radius: 20px;\n  height: 10px;\n  width: 10px; }\n\n#map div.dot[intensity=\"high\"] {\n  background: orangered;\n  border-radius: 30px;\n  height: 30px;\n  width: 30px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/Tracker/Tracker.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/Tracker/Tracker.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#tracker {\n  display: grid;\n  grid-template-columns: auto 10px 420px;\n  grid-template-rows: 60px 10px auto;\n  height: 100%; }\n  #tracker aside, #tracker section {\n    box-sizing: border-box; }\n  #tracker section {\n    grid-column-start: 1;\n    grid-column-end: 1; }\n  #tracker aside {\n    grid-column-start: 3;\n    grid-column-end: 3; }\n  #tracker [row=\"1\"] {\n    grid-row-start: 1;\n    grid-row-end: 1; }\n  #tracker [row=\"2\"] {\n    grid-row-start: 3;\n    grid-row-end: 3; }\n  #tracker #charts {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto 10px auto 10px auto; }\n    #tracker #charts section:nth-of-type(1) {\n      grid-row-start: 1;\n      grid-row-end: 1; }\n    #tracker #charts section:nth-of-type(2) {\n      grid-row-start: 3;\n      grid-row-end: 3; }\n    #tracker #charts section:nth-of-type(3) {\n      grid-row-start: 5;\n      grid-row-end: 5; }\n  #tracker #title {\n    --color: hsla(0,50%,50%,0.25); }\n  #tracker #dates {\n    --color: hsla(40,50%,50%,0.25); }\n  #tracker #map {\n    --color: hsla(80,50%,50%,0.25); }\n  #tracker #signal {\n    --color: hsla(120,50%,50%,0.25); }\n  #tracker #speed {\n    --color: hsla(180,50%,50%,0.25); }\n  #tracker #acceleration {\n    --color: hsla(240,50%,50%,0.25); }\n  #tracker #title, #tracker #dates, #tracker #map, #tracker #signal, #tracker #speed, #tracker #acceleration {\n    background: #f7f7f7; }\n  #tracker #map {\n    position: relative; }\n  #tracker #readout {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    border: 1px solid #444;\n    background: white;\n    padding: 10px; }\n", ""]);

// exports


/***/ }),

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
  } // shouldComponentUpdate(nextProps, nextState) {
  //   return Math.random() > 0.9;
  // }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXAvTWFwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHJhY2tlci9UcmFja2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFwL01hcC5qcyJdLCJuYW1lcyI6WyJBbnlSZWFjdENvbXBvbmVudCIsInRleHQiLCJEb3QiLCJwcm9wcyIsImludGVuc2l0eSIsIk1hcCIsInN0YXRlIiwiY3VycmVudFRpbWVzdGFtcCIsIm1pblRpbWVzdGFtcCIsImRhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJkb3RzIiwiZmlsdGVyIiwiZCIsInRpbWVzdGFtcCIsIm1hcCIsImxhdCIsImxvbmciLCJNYXRoIiwicmFuZG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJrZXkiLCJjZW50ZXIiLCJ6b29tIiwiY3VycmVudERhdGFQb2ludCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibG5nIiwibWF4VGltZXN0YW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQix3QkFBd0Isd0JBQXdCLGlCQUFpQixnQkFBZ0IsRUFBRSxzQ0FBc0MsMEJBQTBCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEVBQUU7O0FBRXRQOzs7Ozs7Ozs7Ozs7QUNQQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGFBQWEsa0JBQWtCLDJDQUEyQyx1Q0FBdUMsaUJBQWlCLEVBQUUsc0NBQXNDLDZCQUE2QixFQUFFLHNCQUFzQiwyQkFBMkIseUJBQXlCLEVBQUUsb0JBQW9CLDJCQUEyQix5QkFBeUIsRUFBRSwwQkFBMEIsd0JBQXdCLHNCQUFzQixFQUFFLDBCQUEwQix3QkFBd0Isc0JBQXNCLEVBQUUsc0JBQXNCLG9CQUFvQixrQ0FBa0MsbURBQW1ELEVBQUUsK0NBQStDLDBCQUEwQix3QkFBd0IsRUFBRSwrQ0FBK0MsMEJBQTBCLHdCQUF3QixFQUFFLCtDQUErQywwQkFBMEIsd0JBQXdCLEVBQUUscUJBQXFCLG9DQUFvQyxFQUFFLHFCQUFxQixxQ0FBcUMsRUFBRSxtQkFBbUIscUNBQXFDLEVBQUUsc0JBQXNCLHNDQUFzQyxFQUFFLHFCQUFxQixzQ0FBc0MsRUFBRSw0QkFBNEIsc0NBQXNDLEVBQUUsZ0hBQWdILDBCQUEwQixFQUFFLG1CQUFtQix5QkFBeUIsRUFBRSx1QkFBdUIseUJBQXlCLGdCQUFnQixpQkFBaUIsNkJBQTZCLHdCQUF3QixvQkFBb0IsRUFBRTs7QUFFMW5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQWMsd0VBQU1BLElBQU4sQ0FBZDtBQUFBLENBQTFCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUFDLEtBQUs7QUFBQSxTQUFJO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFBaUIsYUFBUyxFQUFFQSxLQUFLLENBQUNDO0FBQWxDLElBQUo7QUFBQSxDQUFqQjs7SUFFcUJDLEc7Ozs7O0FBZ0JuQixlQUFZRixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ25CLDZFQUFNQSxLQUFOO0FBRUUsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLHNCQUFnQixFQUFFLE1BQUtKLEtBQUwsQ0FBV0s7QUFEbEIsS0FBYjtBQUhpQjtBQU1sQixHLENBRUQ7QUFDQTtBQUNBOzs7Ozs2QkFFUztBQUFBOztBQUNQLFVBQU1DLElBQUksR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWMsS0FBS1IsS0FBTCxDQUFXTSxJQUF6QixLQUFrQyxLQUFLTixLQUFMLENBQVdNLElBQTdDLElBQXFELEVBQWxFO0FBQ0EsVUFBTUcsSUFBSSxHQUFHSCxJQUFJLENBQ2RJLE1BRFUsQ0FDSCxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxTQUFGLElBQWUsTUFBSSxDQUFDWixLQUFMLENBQVdJLGdCQUE5QjtBQUFBLE9BREUsRUFFVlMsR0FGVSxDQUVOLFVBQUFGLENBQUM7QUFBQSxlQUFJLDJEQUFDLEdBQUQ7QUFBSyxhQUFHLEVBQUVBLENBQUMsQ0FBQ0csR0FBWjtBQUFpQixhQUFHLEVBQUVILENBQUMsQ0FBQ0ksSUFBeEI7QUFBOEIsYUFBRyxZQUFLSixDQUFDLENBQUNDLFNBQVAsY0FBb0JJLElBQUksQ0FBQ0MsTUFBTCxFQUFwQjtBQUFqQyxVQUFKO0FBQUEsT0FGSyxDQUFiO0FBR0EsYUFBTztBQUFLLFVBQUUsRUFBQyxLQUFSO0FBQWMsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUMsTUFBVDtBQUFpQkMsZUFBSyxFQUFDO0FBQXZCO0FBQXJCLFNBQ1IsMkRBQUMsdURBQUQ7QUFDTyx3QkFBZ0IsRUFBRTtBQUFFQyxhQUFHLEVBQUU7QUFBUCxTQUR6QjtBQUVPLHFCQUFhLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV3FCLE1BRmpDO0FBR08sbUJBQVcsRUFBRSxLQUFLckIsS0FBTCxDQUFXc0I7QUFIL0IsU0FLUWIsSUFMUixFQU1PLDJEQUFDLEdBQUQ7QUFDRSxpQkFBUyxFQUFDLE1BRFo7QUFFRSxXQUFHLEVBQUUsS0FBS1QsS0FBTCxDQUFXdUIsZ0JBQVgsQ0FBNEJULEdBRm5DO0FBR0UsV0FBRyxFQUFFLEtBQUtkLEtBQUwsQ0FBV3VCLGdCQUFYLENBQTRCUjtBQUhuQyxRQU5QLENBRFEsQ0FBUDtBQWVEOzs7O0VBaEQ4QlMsNENBQUssQ0FBQ0MsUzs7Z0JBQWxCdkIsRyxrQkFDRTtBQUNuQm1CLFFBQU0sRUFBRTtBQUNOUCxPQUFHLEVBQUUsT0FEQztBQUVOWSxPQUFHLEVBQUUsQ0FBQztBQUZBLEdBRFc7QUFLbkJILGtCQUFnQixFQUFFO0FBQ2hCVCxPQUFHLEVBQUUsQ0FEVztBQUVoQkMsUUFBSSxFQUFFO0FBRlUsR0FMQztBQVNuQlQsTUFBSSxFQUFFLEVBVGE7QUFVbkJELGNBQVksRUFBRSxDQVZLO0FBV25Cc0IsY0FBWSxFQUFFLGNBWEs7QUFZbkJMLE1BQUksRUFBRTtBQVphLEMiLCJmaWxlIjoibWFpbi5iYjQ2M2UzZGFjZDEzNmJkOTdkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbWFwIGRpdi5kb3Qge1xcbiAgYmFja2dyb3VuZDogI2RmMTE0YjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTBweDsgfVxcblxcbiNtYXAgZGl2LmRvdFtpbnRlbnNpdHk9XFxcImhpZ2hcXFwiXSB7XFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiN0cmFja2VyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTBweCA0MjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxMHB4IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gICN0cmFja2VyIGFzaWRlLCAjdHJhY2tlciBzZWN0aW9uIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgI3RyYWNrZXIgc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7IH1cXG4gICN0cmFja2VyIGFzaWRlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMzsgfVxcbiAgI3RyYWNrZXIgW3Jvdz1cXFwiMVxcXCJdIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMTsgfVxcbiAgI3RyYWNrZXIgW3Jvdz1cXFwiMlxcXCJdIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogMzsgfVxcbiAgI3RyYWNrZXIgI2NoYXJ0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwcHggYXV0byAxMHB4IGF1dG87IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgICBncmlkLXJvdy1lbmQ6IDE7IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgICBncmlkLXJvdy1lbmQ6IDM7IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogNTtcXG4gICAgICBncmlkLXJvdy1lbmQ6IDU7IH1cXG4gICN0cmFja2VyICN0aXRsZSB7XFxuICAgIC0tY29sb3I6IGhzbGEoMCw1MCUsNTAlLDAuMjUpOyB9XFxuICAjdHJhY2tlciAjZGF0ZXMge1xcbiAgICAtLWNvbG9yOiBoc2xhKDQwLDUwJSw1MCUsMC4yNSk7IH1cXG4gICN0cmFja2VyICNtYXAge1xcbiAgICAtLWNvbG9yOiBoc2xhKDgwLDUwJSw1MCUsMC4yNSk7IH1cXG4gICN0cmFja2VyICNzaWduYWwge1xcbiAgICAtLWNvbG9yOiBoc2xhKDEyMCw1MCUsNTAlLDAuMjUpOyB9XFxuICAjdHJhY2tlciAjc3BlZWQge1xcbiAgICAtLWNvbG9yOiBoc2xhKDE4MCw1MCUsNTAlLDAuMjUpOyB9XFxuICAjdHJhY2tlciAjYWNjZWxlcmF0aW9uIHtcXG4gICAgLS1jb2xvcjogaHNsYSgyNDAsNTAlLDUwJSwwLjI1KTsgfVxcbiAgI3RyYWNrZXIgI3RpdGxlLCAjdHJhY2tlciAjZGF0ZXMsICN0cmFja2VyICNtYXAsICN0cmFja2VyICNzaWduYWwsICN0cmFja2VyICNzcGVlZCwgI3RyYWNrZXIgI2FjY2VsZXJhdGlvbiB7XFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7IH1cXG4gICN0cmFja2VyICNtYXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICN0cmFja2VyICNyZWFkb3V0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCAnLi9NYXAuc2Nzcyc7XG5cbmNvbnN0IEFueVJlYWN0Q29tcG9uZW50ID0gKHsgdGV4dCB9KSA9PiA8ZGl2Pnt0ZXh0fTwvZGl2PjtcblxuY29uc3QgRG90ID0gcHJvcHMgPT4gPGRpdiBjbGFzcz1cImRvdFwiIGludGVuc2l0eT17cHJvcHMuaW50ZW5zaXR5fT48L2Rpdj47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2VudGVyOiB7XG4gICAgICBsYXQ6IDM3LjU3MTQsXG4gICAgICBsbmc6IC0xMjIuMzMwOTlcbiAgICB9LFxuICAgIGN1cnJlbnREYXRhUG9pbnQ6IHtcbiAgICAgIGxhdDogMCxcbiAgICAgIGxvbmc6IDAsXG4gICAgfSxcbiAgICBkYXRhOiBbXSxcbiAgICBtaW5UaW1lc3RhbXA6IDAsXG4gICAgbWF4VGltZXN0YW1wOiAzMjUwMzY4MDAwMDAwMCxcbiAgICB6b29tOiAxMVxuICB9O1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFRpbWVzdGFtcDogdGhpcy5wcm9wcy5taW5UaW1lc3RhbXBcbiAgICB9XG4gIH1cblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgLy8gICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuOTtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMucHJvcHMuZGF0YSB8fCBbXTtcbiAgICBjb25zdCBkb3RzID0gZGF0YVxuICAgICAgLmZpbHRlcihkID0+IGQudGltZXN0YW1wIDw9IHRoaXMucHJvcHMuY3VycmVudFRpbWVzdGFtcClcbiAgICAgIC5tYXAoZCA9PiA8RG90IGxhdD17ZC5sYXR9IGxuZz17ZC5sb25nfSBrZXk9e2Ake2QudGltZXN0YW1wfV8ke01hdGgucmFuZG9tKCl9YH0gLz4pO1xuICAgIHJldHVybiA8ZGl2IGlkPVwibWFwXCIgc3R5bGU9e3sgaGVpZ2h0OicxMDAlJywgd2lkdGg6JzEwMCUnIH19PlxuXHRcdFx0PEdvb2dsZU1hcFJlYWN0XG4gICAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6ICdBSXphU3lCVUNOdzhDZzAxcy1QSVVWdGxsTzRDZVRBZUQwWG45MTQnIH19XG4gICAgICAgICAgZGVmYXVsdENlbnRlcj17dGhpcy5wcm9wcy5jZW50ZXJ9XG4gICAgICAgICAgZGVmYXVsdFpvb209e3RoaXMucHJvcHMuem9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkb3RzfVxuICAgICAgICAgIDxEb3RcbiAgICAgICAgICAgIGludGVuc2l0eT1cImhpZ2hcIlxuICAgICAgICAgICAgbGF0PXt0aGlzLnByb3BzLmN1cnJlbnREYXRhUG9pbnQubGF0fVxuICAgICAgICAgICAgbG5nPXt0aGlzLnByb3BzLmN1cnJlbnREYXRhUG9pbnQubG9uZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuXG5cdDwvZGl2PjtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=