webpackHotUpdate("main",{

/***/ "./node_modules/antd/lib/slider/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/slider/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _Slider = __webpack_require__(/*! rc-slider/lib/Slider */ "./node_modules/rc-slider/lib/Slider.js");

var _Slider2 = _interopRequireDefault(_Slider);

var _Range = __webpack_require__(/*! rc-slider/lib/Range */ "./node_modules/rc-slider/lib/Range.js");

var _Range2 = _interopRequireDefault(_Range);

var _Handle = __webpack_require__(/*! rc-slider/lib/Handle */ "./node_modules/rc-slider/lib/Handle.js");

var _Handle2 = _interopRequireDefault(_Handle);

var _tooltip = __webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Slider = function (_React$Component) {
    (0, _inherits3['default'])(Slider, _React$Component);

    function Slider(props) {
        (0, _classCallCheck3['default'])(this, Slider);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.toggleTooltipVisible = function (index, visible) {
            _this.setState(function (_ref) {
                var visibles = _ref.visibles;
                return {
                    visibles: (0, _extends4['default'])({}, visibles, (0, _defineProperty3['default'])({}, index, visible))
                };
            });
        };
        _this.handleWithTooltip = function (_a) {
            var value = _a.value,
                dragging = _a.dragging,
                index = _a.index,
                restProps = __rest(_a, ["value", "dragging", "index"]);

            var _this$props = _this.props,
                tooltipPrefixCls = _this$props.tooltipPrefixCls,
                tipFormatter = _this$props.tipFormatter;
            var visibles = _this.state.visibles;

            var visible = tipFormatter ? visibles[index] || dragging : false;
            return React.createElement(
                _tooltip2['default'],
                { prefixCls: tooltipPrefixCls, title: tipFormatter ? tipFormatter(value) : '', visible: visible, placement: 'top', transitionName: 'zoom-down', key: index },
                React.createElement(_Handle2['default'], (0, _extends4['default'])({}, restProps, { value: value, onMouseEnter: function onMouseEnter() {
                        return _this.toggleTooltipVisible(index, true);
                    }, onMouseLeave: function onMouseLeave() {
                        return _this.toggleTooltipVisible(index, false);
                    } }))
            );
        };
        _this.saveSlider = function (node) {
            _this.rcSlider = node;
        };
        _this.state = {
            visibles: {}
        };
        return _this;
    }

    (0, _createClass3['default'])(Slider, [{
        key: 'focus',
        value: function focus() {
            this.rcSlider.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSlider.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                range = _a.range,
                restProps = __rest(_a, ["range"]);
            if (range) {
                return React.createElement(_Range2['default'], (0, _extends4['default'])({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
            }
            return React.createElement(_Slider2['default'], (0, _extends4['default'])({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
        }
    }]);
    return Slider;
}(React.Component);

exports['default'] = Slider;

Slider.defaultProps = {
    prefixCls: 'ant-slider',
    tooltipPrefixCls: 'ant-tooltip',
    tipFormatter: function tipFormatter(value) {
        return value.toString();
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _rcTooltip = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = __webpack_require__(/*! ./placements */ "./node_modules/antd/lib/tooltip/placements.js");

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var splitObject = function splitObject(obj, keys) {
    var picked = {};
    var omitted = (0, _extends3['default'])({}, obj);
    keys.forEach(function (key) {
        if (obj && key in obj) {
            picked[key] = obj[key];
            delete omitted[key];
        }
    });
    return { picked: picked, omitted: omitted };
};

var Tooltip = function (_React$Component) {
    (0, _inherits3['default'])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3['default'])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;

            if (!('visible' in _this.props)) {
                _this.setState({ visible: _this.isNoTitle() ? false : visible });
            }
            if (onVisibleChange && !_this.isNoTitle()) {
                onVisibleChange(visible);
            }
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.saveTooltip = function (node) {
            _this.tooltip = node;
        };
        _this.state = {
            visible: !!props.visible || !!props.defaultVisible
        };
        return _this;
    }

    (0, _createClass3['default'])(Tooltip, [{
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return this.tooltip.getPopupDomNode();
        }
    }, {
        key: 'getPlacements',
        value: function getPlacements() {
            var _props = this.props,
                builtinPlacements = _props.builtinPlacements,
                arrowPointAtCenter = _props.arrowPointAtCenter,
                autoAdjustOverflow = _props.autoAdjustOverflow;

            return builtinPlacements || (0, _placements2['default'])({
                arrowPointAtCenter: arrowPointAtCenter,
                verticalArrowShift: 8,
                autoAdjustOverflow: autoAdjustOverflow
            });
        }
    }, {
        key: 'isHoverTrigger',
        value: function isHoverTrigger() {
            var trigger = this.props.trigger;

            if (!trigger || trigger === 'hover') {
                return true;
            }
            if (Array.isArray(trigger)) {
                return trigger.indexOf('hover') >= 0;
            }
            return false;
        }
        // Fix Tooltip won't hide at disabled button
        // mouse events don't trigger at disabled button in Chrome
        // https://github.com/react-component/tooltip/issues/18

    }, {
        key: 'getDisabledCompatibleChildren',
        value: function getDisabledCompatibleChildren(element) {
            if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled && this.isHoverTrigger()) {
                // Pick some layout related style properties up to span
                // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
                var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
                    picked = _splitObject.picked,
                    omitted = _splitObject.omitted;

                var spanStyle = (0, _extends3['default'])({ display: 'inline-block' }, picked, { cursor: 'not-allowed' });
                var buttonStyle = (0, _extends3['default'])({}, omitted, { pointerEvents: 'none' });
                var child = (0, _react.cloneElement)(element, {
                    style: buttonStyle,
                    className: null
                });
                return React.createElement(
                    'span',
                    { style: spanStyle, className: element.props.className },
                    child
                );
            }
            return element;
        }
    }, {
        key: 'isNoTitle',
        value: function isNoTitle() {
            var _props2 = this.props,
                title = _props2.title,
                overlay = _props2.overlay;

            return !title && !overlay; // overlay for old version compatibility
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                title = props.title,
                overlay = props.overlay,
                openClassName = props.openClassName,
                getPopupContainer = props.getPopupContainer,
                getTooltipContainer = props.getTooltipContainer;

            var children = props.children;
            var visible = state.visible;
            // Hide tooltip when there is no title
            if (!('visible' in props) && this.isNoTitle()) {
                visible = false;
            }
            var child = this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement(
                'span',
                null,
                children
            ));
            var childProps = child.props;
            var childCls = (0, _classnames2['default'])(childProps.className, (0, _defineProperty3['default'])({}, openClassName || prefixCls + '-open', true));
            return React.createElement(
                _rcTooltip2['default'],
                (0, _extends3['default'])({}, this.props, { getTooltipContainer: getPopupContainer || getTooltipContainer, ref: this.saveTooltip, builtinPlacements: this.getPlacements(), overlay: overlay || title || '', visible: visible, onVisibleChange: this.onVisibleChange, onPopupAlign: this.onPopupAlign }),
                visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            if ('visible' in nextProps) {
                return { visible: nextProps.visible };
            }
            return null;
        }
    }]);
    return Tooltip;
}(React.Component);

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
};
(0, _reactLifecyclesCompat.polyfill)(Tooltip);
exports['default'] = Tooltip;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


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
exports.push([module.i, "#tracker {\n  display: grid;\n  grid-template-columns: auto 10px 400px;\n  grid-template-rows: 60px 10px auto;\n  height: 100%; }\n  #tracker aside, #tracker section {\n    border: 1px solid #444;\n    box-sizing: border-box; }\n  #tracker section {\n    grid-column-start: 1;\n    grid-column-end: 1; }\n  #tracker aside {\n    grid-column-start: 3;\n    grid-column-end: 3; }\n  #tracker [row=\"1\"] {\n    grid-row-start: 1;\n    grid-row-end: 1; }\n  #tracker [row=\"2\"] {\n    grid-row-start: 3;\n    grid-row-end: 3; }\n  #tracker #charts {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto 10px auto 10px auto; }\n    #tracker #charts section:nth-of-type(1) {\n      grid-row-start: 1;\n      grid-row-end: 1; }\n    #tracker #charts section:nth-of-type(2) {\n      grid-row-start: 3;\n      grid-row-end: 3; }\n    #tracker #charts section:nth-of-type(3) {\n      grid-row-start: 5;\n      grid-row-end: 5; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/es/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");











function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        if (element) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignElement"])(source, element, align);
        } else if (point) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignPoint"])(source, point, align);
        }

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var sourceRect = source ? source.getBoundingClientRect() : null;

      if (prevProps.disabled) {
        reAlign = true;
      } else {
        var lastElement = getElement(prevProps.target);
        var currentElement = getElement(props.target);
        var lastPoint = getPoint(prevProps.target);
        var currentPoint = getPoint(props.target);

        if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(lastElement) && Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(currentElement)) {
          // Skip if is window
          reAlign = false;
        } else if (lastElement !== currentElement || // Element change
        lastElement && !currentElement && currentPoint || // Change from element to point
        lastPoint && currentPoint && currentElement || // Change from point to element
        currentPoint && !Object(_util__WEBPACK_IMPORTED_MODULE_8__["isSamePoint"])(lastPoint, currentPoint)) {
          reAlign = true;
        }

        // If source element size changed
        var preRect = this.sourceRect || {};
        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
          reAlign = true;
        }
      }

      this.sourceRect = sourceRect;
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = Object(_util__WEBPACK_IMPORTED_MODULE_8__["buffer"])(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      var propList = Object.keys(childrenProps);
      propList.forEach(function (prop) {
        newProps[prop] = _this2.props[childrenProps[prop]];
      });

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Align.propTypes = {
  childrenProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  align: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    clientX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    clientY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  monitorBufferTime: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  monitorWindowResize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ __webpack_exports__["default"] = (Align);

/***/ }),

/***/ "./node_modules/rc-animate/es/Animate.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-animate/es/Animate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChildrenUtils */ "./node_modules/rc-animate/es/ChildrenUtils.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-animate/es/CSSMotion.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");













var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(children)) {
    if (!children.key) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(Animate, _React$Component);

  function Animate(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Animate);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  } // eslint-disable-line

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(nextChild || currentChild, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["mergeChildren"])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
      }
      return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _AnimateChild__WEBPACK_IMPORTED_MODULE_9__["default"],
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Animate.isAnimate = true;
Animate.CSSMotion = _CSSMotion__WEBPACK_IMPORTED_MODULE_10__["default"];
Animate.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  componentProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  exclusive: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  showProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (_util_animate__WEBPACK_IMPORTED_MODULE_11__["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Animate);

/***/ }),

/***/ "./node_modules/rc-animate/es/AnimateChild.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/AnimateChild.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-animation */ "./node_modules/css-animation/es/index.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnimateChild);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((css_animation__WEBPACK_IMPORTED_MODULE_7__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(css_animation__WEBPACK_IMPORTED_MODULE_7__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

AnimateChild.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (AnimateChild);

/***/ }),

/***/ "./node_modules/rc-animate/es/CSSMotion.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-animate/es/CSSMotion.js ***!
  \*************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-animate/es/util/motion.js");














var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(transitionSupport) {
  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(CSSMotion, _React$Component);

    function CSSMotion() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CSSMotion);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

      _this.onDomUpdate = function () {
        var _this$state = _this.state,
            status = _this$state.status,
            newStatus = _this$state.newStatus;
        var _this$props = _this.props,
            onAppearStart = _this$props.onAppearStart,
            onEnterStart = _this$props.onEnterStart,
            onLeaveStart = _this$props.onLeaveStart,
            onAppearActive = _this$props.onAppearActive,
            onEnterActive = _this$props.onEnterActive,
            onLeaveActive = _this$props.onLeaveActive,
            motionAppear = _this$props.motionAppear,
            motionEnter = _this$props.motionEnter,
            motionLeave = _this$props.motionLeave;


        if (!isSupportTransition(_this.props)) {
          return;
        }

        // Event injection
        var $ele = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(_this);
        if (_this.$ele !== $ele) {
          _this.removeEventListener(_this.$ele);
          _this.addEventListener($ele);
          _this.$ele = $ele;
        }

        // Init status
        if (newStatus && status === STATUS_APPEAR && motionAppear) {
          _this.updateStatus(onAppearStart, null, null, function () {
            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
          });
        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
          _this.updateStatus(onEnterStart, null, null, function () {
            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
          });
        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
          _this.updateStatus(onLeaveStart, null, null, function () {
            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
          });
        }
      };

      _this.onMotionEnd = function (event) {
        var _this$state2 = _this.state,
            status = _this$state2.status,
            statusActive = _this$state2.statusActive;
        var _this$props2 = _this.props,
            onAppearEnd = _this$props2.onAppearEnd,
            onEnterEnd = _this$props2.onEnterEnd,
            onLeaveEnd = _this$props2.onLeaveEnd;

        if (status === STATUS_APPEAR && statusActive) {
          _this.updateStatus(onAppearEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_ENTER && statusActive) {
          _this.updateStatus(onEnterEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_LEAVE && statusActive) {
          _this.updateStatus(onLeaveEnd, { status: STATUS_NONE }, event);
        }
      };

      _this.addEventListener = function ($ele) {
        if (!$ele) return;

        $ele.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        $ele.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
      };

      _this.removeEventListener = function ($ele) {
        if (!$ele) return;

        $ele.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        $ele.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
      };

      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
        var statusStyle = styleFunc ? styleFunc(react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(_this), event) : null;

        if (statusStyle === false || _this._destroyed) return;

        var nextStep = void 0;
        if (callback) {
          nextStep = function nextStep() {
            _this.nextFrame(callback);
          };
        }

        _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
          newStatus: false
        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`
      };

      _this.updateActiveStatus = function (styleFunc, currentStatus) {
        // `setState` use `postMessage` to trigger at the end of frame.
        // Let's use requestAnimationFrame to update new state in next frame.
        _this.nextFrame(function () {
          var status = _this.state.status;

          if (status !== currentStatus) return;

          _this.updateStatus(styleFunc, { statusActive: true });
        });
      };

      _this.nextFrame = function (func) {
        _this.cancelNextFrame();
        _this.raf = raf__WEBPACK_IMPORTED_MODULE_11___default()(func);
      };

      _this.cancelNextFrame = function () {
        if (_this.raf) {
          raf__WEBPACK_IMPORTED_MODULE_11___default.a.cancel(_this.raf);
          _this.raf = null;
        }
      };

      _this.state = {
        status: STATUS_NONE,
        statusActive: false,
        newStatus: false,
        statusStyle: null
      };
      _this.$ele = null;
      _this.raf = null;
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CSSMotion, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyed = true;
        this.removeEventListener(this.$ele);
        this.cancelNextFrame();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _state = this.state,
            status = _state.status,
            statusActive = _state.statusActive,
            statusStyle = _state.statusStyle;
        var _props = this.props,
            children = _props.children,
            motionName = _props.motionName,
            visible = _props.visible,
            removeOnLeave = _props.removeOnLeave;


        if (!children) return null;

        if (status === STATUS_NONE || !isSupportTransition(this.props)) {
          return visible || !removeOnLeave ? children({}) : null;
        }

        return children({
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(motionName, status), status !== STATUS_NONE), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, Object(_util_motion__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(motionName, status + '-active'), status !== STATUS_NONE && statusActive), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, motionName, typeof motionName === 'string'), _classNames)),
          style: statusStyle
        });
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, _ref) {
        var prevProps = _ref.prevProps;

        if (!isSupportTransition(props)) return {};

        var visible = props.visible,
            motionAppear = props.motionAppear,
            motionEnter = props.motionEnter,
            motionLeave = props.motionLeave,
            motionLeaveImmediately = props.motionLeaveImmediately;

        var newState = {
          prevProps: props
        };

        // Appear
        if (!prevProps && visible && motionAppear) {
          newState.status = STATUS_APPEAR;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Enter
        if (prevProps && !prevProps.visible && visible && motionEnter) {
          newState.status = STATUS_ENTER;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Leave
        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
          newState.status = STATUS_LEAVE;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        return newState;
      }
    }]);

    return CSSMotion;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

  CSSMotion.propTypes = {
    visible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    motionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
    motionAppear: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionEnter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionLeaveImmediately: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, // Trigger leave motion immediately
    removeOnLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    onAppearStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onAppearActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onAppearEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
  };
  CSSMotion.defaultProps = {
    visible: true,
    motionEnter: true,
    motionAppear: true,
    motionLeave: true,
    removeOnLeave: true
  };


  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(CSSMotion);

  return CSSMotion;
}

/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_12__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-slider/lib/Handle.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-slider/lib/Handle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Handle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Handle.__proto__ || Object.getPrototypeOf(Handle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clickFocused: false
    }, _this.setHandleRef = function (node) {
      _this.handle = node;
    }, _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    }, _this.handleBlur = function () {
      _this.setClickFocus(false);
    }, _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(Handle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0, _addEventListener2['default'])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: 'setClickFocus',
    value: function setClickFocus(focused) {
      this.setState({ clickFocused: focused });
    }
  }, {
    key: 'clickFocus',
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          tabIndex = _props.tabIndex,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


      var className = (0, _classnames2['default'])(this.props.className, (0, _defineProperty3['default'])({}, prefixCls + '-handle-click-focused', this.state.clickFocused));

      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = (0, _extends3['default'])({}, style, postionStyle);

      return _react2['default'].createElement('div', (0, _extends3['default'])({
        ref: this.setHandleRef,
        tabIndex: disabled ? null : tabIndex || 0
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown

        // aria attribute
        , role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      }));
    }
  }]);
  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/Range.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/lib/Range.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _Track = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/lib/common/Track.js");

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/lib/common/createSlider.js");

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/lib/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Range = function (_React$Component) {
  (0, _inherits3['default'])(Range, _React$Component);

  function Range(props) {
    (0, _classCallCheck3['default'])(this, Range);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function () {
      _this.setState({
        handle: null
      }, _this.blur);
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(undefined, (0, _toConsumableArray3['default'])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _this.trimAlignValue(v, i);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  (0, _createClass3['default'])(Range, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
      if (this.props.min === nextProps.min && this.props.max === nextProps.max && (0, _shallowequal2['default'])(this.props.value, nextProps.value)) {
        return;
      }

      var bounds = this.state.bounds;

      var value = nextProps.value || bounds;
      var nextBounds = value.map(function (v, i) {
        return _this2.trimAlignValue(v, i, nextProps);
      });
      if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
        return v === bounds[i];
      })) return;

      this.setState({ bounds: nextBounds });

      if (bounds.some(function (v) {
        return utils.isValueOutOfRange(v, nextProps);
      })) {
        var newValues = value.map(function (v) {
          return utils.ensureValueInRange(v, nextProps);
        });
        this.props.onChange(newValues);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else if (state.handle !== undefined) {
        this.setState({ handle: state.handle });
      }

      var data = (0, _extends3['default'])({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });

      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = [].concat((0, _toConsumableArray3['default'])(state.bounds));
      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      utils.pauseEvent(e);
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      this.moveTo(value);
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var valueMutator = utils.getKeyboardValueMutator(e);

      if (valueMutator) {
        utils.pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;

        var oldValue = bounds[handle];
        var mutatedValue = valueMutator(oldValue, props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value > bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props = this.props,
          marks = _props.marks,
          step = _props.step,
          min = _props.min,
          max = _props.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = (0, _extends3['default'])({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'moveTo',
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = [].concat((0, _toConsumableArray3['default'])(state.bounds));
      nextBounds[state.handle] = value;
      var nextHandle = state.handle;
      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        handle: nextHandle,
        bounds: nextBounds
      });
      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
      }
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var threshold = this.props.pushable;

      threshold = Number(threshold);

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v, handle) {
      var nextProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
      var valInRange = utils.ensureValueInRange(v, mergedProps);
      var valNotConflict = this.ensureValueNotConflict(handle, valInRange, mergedProps);
      return utils.ensureValuePrecision(valNotConflict, mergedProps);
    }
  }, {
    key: 'ensureValueNotConflict',
    value: function ensureValueNotConflict(handle, val, _ref) {
      var allowCross = _ref.allowCross,
          thershold = _ref.pushable;

      var state = this.state || {};
      var bounds = state.bounds;

      handle = handle === undefined ? state.handle : handle;
      thershold = Number(thershold);
      /* eslint-disable eqeqeq */
      if (!allowCross && handle != null && bounds !== undefined) {
        if (handle > 0 && val <= bounds[handle - 1] + thershold) {
          return bounds[handle - 1] + thershold;
        }
        if (handle < bounds.length - 1 && val >= bounds[handle + 1] - thershold) {
          return bounds[handle + 1] - thershold;
        }
      }
      /* eslint-enable eqeqeq */
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          vertical = _props2.vertical,
          included = _props2.included,
          disabled = _props2.disabled,
          min = _props2.min,
          max = _props2.max,
          handleGenerator = _props2.handle,
          trackStyle = _props2.trackStyle,
          handleStyle = _props2.handleStyle,
          tabIndex = _props2.tabIndex;


      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        return handleGenerator({
          className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, handleClassName, true), (0, _defineProperty3['default'])(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          tabIndex: tabIndex[i] || 0,
          min: min,
          max: max,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-track', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return _react2['default'].createElement(_Track2['default'], {
          className: trackClassName,
          vertical: vertical,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }]);
  return Range;
}(_react2['default'].Component); /* eslint-disable react/prop-types */


Range.displayName = 'Range';
Range.propTypes = {
  defaultValue: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  value: _propTypes2['default'].arrayOf(_propTypes2['default'].number),
  count: _propTypes2['default'].number,
  pushable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].number]),
  allowCross: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].arrayOf(_propTypes2['default'].number)
};
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: []
};
exports['default'] = (0, _createSlider2['default'])(Range);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/Slider.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-slider/lib/Slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(/*! warning */ "./node_modules/rc-slider/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/lib/common/Track.js");

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/lib/common/createSlider.js");

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/lib/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (true) {
      (0, _warning2['default'])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2['default'])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  (0, _createClass3['default'])(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

      var prevValue = this.state.value;
      var value = nextProps.value !== undefined ? nextProps.value : prevValue;
      var nextValue = this.trimAlignValue(value, nextProps);
      if (nextValue === prevValue) return;

      this.setState({ value: nextValue });
      if (utils.isValueOutOfRange(value, nextProps)) {
        this.props.onChange(nextValue);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      }

      var changedValue = state.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.prevMovedHandleIndex = 0;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      utils.pauseEvent(e);
      var oldValue = this.state.value;

      var value = this.calcValueByPos(position);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onKeyboard',
    value: function onKeyboard(e) {
      var valueMutator = utils.getKeyboardValueMutator(e);

      if (valueMutator) {
        utils.pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;

        this.onChange({ value: value });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
      var val = utils.ensureValueInRange(v, mergedProps);
      return utils.ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          vertical = _props2.vertical,
          included = _props2.included,
          disabled = _props2.disabled,
          minimumTrackStyle = _props2.minimumTrackStyle,
          trackStyle = _props2.trackStyle,
          handleStyle = _props2.handleStyle,
          tabIndex = _props2.tabIndex,
          min = _props2.min,
          max = _props2.max,
          handleGenerator = _props2.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        index: 0,
        tabIndex: tabIndex,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = _react2['default'].createElement(_Track2['default'], {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        length: offset,
        style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);
  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-slider/lib/common/createSlider.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/lib/common/createSlider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(/*! babel-runtime/helpers/get */ "./node_modules/babel-runtime/helpers/get.js");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(/*! warning */ "./node_modules/rc-slider/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/lib/common/Steps.js");

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/lib/common/Marks.js");

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/lib/Handle.js");

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/lib/utils.js");

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();
        _this.onChange({ value: value });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (true) {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2['default'])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    (0, _createClass3['default'])(ComponentEnhancer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var rect = slider.getBoundingClientRect();

        return this.props.vertical ? rect.top : rect.left;
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (!this.props.disabled) {
          this.handlesRefs[0].focus();
        }
      }
    }, {
      key: 'blur',
      value: function blur() {
        var _this2 = this;

        if (!this.props.disabled) {
          Object.keys(this.handlesRefs).forEach(function (key) {
            if (_this2.handlesRefs[key] && _this2.handlesRefs[key].blur) {
              _this2.handlesRefs[key].blur();
            }
          });
        }
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props = this.props,
            vertical = _props.vertical,
            min = _props.min,
            max = _props.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            marks = _props3.marks,
            dots = _props3.dots,
            step = _props3.step,
            included = _props3.included,
            disabled = _props3.disabled,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max,
            children = _props3.children,
            maximumTrackStyle = _props3.maximumTrackStyle,
            style = _props3.style,
            railStyle = _props3.railStyle,
            dotStyle = _props3.dotStyle,
            activeDotStyle = _props3.activeDotStyle;

        var _get$call = (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', vertical), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
        return _react2['default'].createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            onMouseUp: disabled ? noop : this.onMouseUp,
            onKeyDown: disabled ? noop : this.onKeyDown,
            onFocus: disabled ? noop : this.onFocus,
            onBlur: disabled ? noop : this.onBlur,
            style: style
          },
          _react2['default'].createElement('div', {
            className: prefixCls + '-rail',
            style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          _react2['default'].createElement(_Steps2['default'], {
            prefixCls: prefixCls,
            vertical: vertical,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          _react2['default'].createElement(_Marks2['default'], {
            className: prefixCls + '-mark',
            onClickLabel: disabled ? noop : this.onClickMarkLabel,
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min
          }),
          children
        );
      }
    }]);
    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var Content = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Content, _React$Component);

  function Content() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Content);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Content.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]).isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");











var Tooltip = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      rc_trigger__WEBPACK_IMPORTED_MODULE_7__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_8__["placements"],
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Tooltip.propTypes = {
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  defaultVisible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  animation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  onVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  afterVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]).isRequired,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  getTooltipContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  destroyTooltipOnHide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  arrowContent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-trigger/es/LazyRenderBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var LazyRenderBox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', props);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

LazyRenderBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");













var Popup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(Popup, _Component);

  function Popup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Popup.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  getClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  point: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/PopupInner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");







var PopupInner = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PopupInner, _Component);

  function PopupInner() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PopupInner);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup.js");
















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"];

var contextTypes = {
  rcTrigger: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    onPopupMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
  })
};

var Trigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_14___default()(Trigger, _React$Component);

  function Trigger(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Trigger);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__["default"],
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__["default"],
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Trigger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string)]),
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  getPopupClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  onPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  afterPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]).isRequired,
  popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupPlacement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  builtinPlacements: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getDocument: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultPopupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool // Maybe we can support user pass position in the future
};
Trigger.contextTypes = contextTypes;
Trigger.childContextTypes = contextTypes;
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this5.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

    _this5.hasPopupMouseDown = true;

    clearTimeout(_this5.mouseDownTimeout);
    _this5.mouseDownTimeout = setTimeout(function () {
      _this5.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(root, target) && !_this5.hasPopupMouseDown) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this5.onPopupMouseDown;
    mouseProps.onTouchStart = _this5.onPopupMouseDown;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      _Popup__WEBPACK_IMPORTED_MODULE_13__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Trigger);

/***/ }),

/***/ "./node_modules/rc-util/es/ContainerRender.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/ContainerRender.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var ContainerRender = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (ContainerRender);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var Portal = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Portal, _React$Component);

  function Portal() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Portal);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Portal.propTypes = {
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHJhY2tlci9UcmFja2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL0FsaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvQW5pbWF0ZUNoaWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0NTU01vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc2xpZGVyL2xpYi9IYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9saWIvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXNsaWRlci9saWIvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1zbGlkZXIvbGliL2NvbW1vbi9jcmVhdGVTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9Ub29sdGlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL0xhenlSZW5kZXJCb3guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXBJbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvUG9ydGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1QkFBdUIsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRXJFOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLHNGQUErQjs7QUFFdkQ7O0FBRUEsdUJBQXVCLG1CQUFPLENBQUMsb0dBQXNDOztBQUVyRTs7QUFFQSxvQkFBb0Is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RUE7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxX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REFBUztBQUN6QixnQkFBZ0IsaURBQVM7QUFDekIsWUFBWSxpREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw4RUFBZSxFOzs7Ozs7Ozs7Ozs7QUNsRzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRTtBQUNOO0FBQzRCO0FBQ2xDO0FBQzdCO0FBQ087QUFDRTs7QUFFbkM7QUFDQSxFQUFFLHFFQUFTOztBQUVYO0FBQ0EsSUFBSSwyRUFBZTs7QUFFbkIsV0FBVyxzRkFBMEI7QUFDckM7O0FBRUEsRUFBRSx3RUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsNENBQUs7O0FBRVA7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekIsWUFBWSxpREFBUztBQUNyQixhQUFhLGlEQUFTO0FBQ3RCO0FBQ2UscUVBQU0sRSIsImZpbGUiOiJtYWluLjlkNzY3NmQ2ODgzYWVlM2M3NmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2V4dGVuZHMzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMzKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcmVhY3QpO1xuXG52YXIgX1NsaWRlciA9IHJlcXVpcmUoJ3JjLXNsaWRlci9saWIvU2xpZGVyJyk7XG5cbnZhciBfU2xpZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NsaWRlcik7XG5cbnZhciBfUmFuZ2UgPSByZXF1aXJlKCdyYy1zbGlkZXIvbGliL1JhbmdlJyk7XG5cbnZhciBfUmFuZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFuZ2UpO1xuXG52YXIgX0hhbmRsZSA9IHJlcXVpcmUoJ3JjLXNsaWRlci9saWIvSGFuZGxlJyk7XG5cbnZhciBfSGFuZGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZSk7XG5cbnZhciBfdG9vbHRpcCA9IHJlcXVpcmUoJy4uL3Rvb2x0aXAnKTtcblxudmFyIF90b29sdGlwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rvb2x0aXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfX3Jlc3QgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcblxudmFyIFNsaWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoU2xpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBTbGlkZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKFNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNsaWRlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy50b2dnbGVUb29sdGlwVmlzaWJsZSA9IGZ1bmN0aW9uIChpbmRleCwgdmlzaWJsZSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBfcmVmLnZpc2libGVzO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVzOiAoMCwgX2V4dGVuZHM0WydkZWZhdWx0J10pKHt9LCB2aXNpYmxlcywgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIGluZGV4LCB2aXNpYmxlKSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVdpdGhUb29sdGlwID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBfYS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZyA9IF9hLmRyYWdnaW5nLFxuICAgICAgICAgICAgICAgIGluZGV4ID0gX2EuaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJ2YWx1ZVwiLCBcImRyYWdnaW5nXCIsIFwiaW5kZXhcIl0pO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB0b29sdGlwUHJlZml4Q2xzID0gX3RoaXMkcHJvcHMudG9vbHRpcFByZWZpeENscyxcbiAgICAgICAgICAgICAgICB0aXBGb3JtYXR0ZXIgPSBfdGhpcyRwcm9wcy50aXBGb3JtYXR0ZXI7XG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBfdGhpcy5zdGF0ZS52aXNpYmxlcztcblxuICAgICAgICAgICAgdmFyIHZpc2libGUgPSB0aXBGb3JtYXR0ZXIgPyB2aXNpYmxlc1tpbmRleF0gfHwgZHJhZ2dpbmcgOiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF90b29sdGlwMlsnZGVmYXVsdCddLFxuICAgICAgICAgICAgICAgIHsgcHJlZml4Q2xzOiB0b29sdGlwUHJlZml4Q2xzLCB0aXRsZTogdGlwRm9ybWF0dGVyID8gdGlwRm9ybWF0dGVyKHZhbHVlKSA6ICcnLCB2aXNpYmxlOiB2aXNpYmxlLCBwbGFjZW1lbnQ6ICd0b3AnLCB0cmFuc2l0aW9uTmFtZTogJ3pvb20tZG93bicsIGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KF9IYW5kbGUyWydkZWZhdWx0J10sICgwLCBfZXh0ZW5kczRbJ2RlZmF1bHQnXSkoe30sIHJlc3RQcm9wcywgeyB2YWx1ZTogdmFsdWUsIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRvZ2dsZVRvb2x0aXBWaXNpYmxlKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudG9nZ2xlVG9vbHRpcFZpc2libGUoaW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVTbGlkZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMucmNTbGlkZXIgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGVzOiB7fVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoU2xpZGVyLCBbe1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMucmNTbGlkZXIuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy5yY1NsaWRlci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICByYW5nZSA9IF9hLnJhbmdlLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicmFuZ2VcIl0pO1xuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX1JhbmdlMlsnZGVmYXVsdCddLCAoMCwgX2V4dGVuZHM0WydkZWZhdWx0J10pKHt9LCByZXN0UHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVTbGlkZXIsIGhhbmRsZTogdGhpcy5oYW5kbGVXaXRoVG9vbHRpcCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfU2xpZGVyMlsnZGVmYXVsdCddLCAoMCwgX2V4dGVuZHM0WydkZWZhdWx0J10pKHt9LCByZXN0UHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVTbGlkZXIsIGhhbmRsZTogdGhpcy5oYW5kbGVXaXRoVG9vbHRpcCB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNsaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU2xpZGVyO1xuXG5TbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1zbGlkZXInLFxuICAgIHRvb2x0aXBQcmVmaXhDbHM6ICdhbnQtdG9vbHRpcCcsXG4gICAgdGlwRm9ybWF0dGVyOiBmdW5jdGlvbiB0aXBGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9yZWFjdCk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZSgncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnKTtcblxudmFyIF9yY1Rvb2x0aXAgPSByZXF1aXJlKCdyYy10b29sdGlwJyk7XG5cbnZhciBfcmNUb29sdGlwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JjVG9vbHRpcCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3BsYWNlbWVudHMgPSByZXF1aXJlKCcuL3BsYWNlbWVudHMnKTtcblxudmFyIF9wbGFjZW1lbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsYWNlbWVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBzcGxpdE9iamVjdCA9IGZ1bmN0aW9uIHNwbGl0T2JqZWN0KG9iaiwga2V5cykge1xuICAgIHZhciBwaWNrZWQgPSB7fTtcbiAgICB2YXIgb21pdHRlZCA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG9iaik7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKG9iaiAmJiBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBwaWNrZWRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgZGVsZXRlIG9taXR0ZWRba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBpY2tlZDogcGlja2VkLCBvbWl0dGVkOiBvbWl0dGVkIH07XG59O1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoVG9vbHRpcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUb29sdGlwKHByb3BzKSB7XG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIFRvb2x0aXApO1xuXG4gICAgICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKFRvb2x0aXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb29sdGlwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLm9uVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgICAgICAgICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gX3RoaXMucHJvcHMub25WaXNpYmxlQ2hhbmdlO1xuXG4gICAgICAgICAgICBpZiAoISgndmlzaWJsZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBfdGhpcy5pc05vVGl0bGUoKSA/IGZhbHNlIDogdmlzaWJsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvblZpc2libGVDaGFuZ2UgJiYgIV90aGlzLmlzTm9UaXRsZSgpKSB7XG4gICAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHZpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyDliqjmgIHorr7nva7liqjnlLvngrlcbiAgICAgICAgX3RoaXMub25Qb3B1cEFsaWduID0gZnVuY3Rpb24gKGRvbU5vZGUsIGFsaWduKSB7XG4gICAgICAgICAgICB2YXIgcGxhY2VtZW50cyA9IF90aGlzLmdldFBsYWNlbWVudHMoKTtcbiAgICAgICAgICAgIC8vIOW9k+WJjei/lOWbnueahOS9jee9rlxuICAgICAgICAgICAgdmFyIHBsYWNlbWVudCA9IE9iamVjdC5rZXlzKHBsYWNlbWVudHMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMF0gPT09IGFsaWduLnBvaW50c1swXSAmJiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzFdID09PSBhbGlnbi5wb2ludHNbMV07XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGlmICghcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN5Z2Q5qCH6K6+572u5Yqo55S754K5XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzUwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0JvdHRvbScpID49IDApIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gcmVjdC5oZWlnaHQgLSBhbGlnbi5vZmZzZXRbMV0gKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZignVG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSAtYWxpZ24ub2Zmc2V0WzFdICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ1JpZ2h0JykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gcmVjdC53aWR0aCAtIGFsaWduLm9mZnNldFswXSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdyaWdodCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0xlZnQnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSAtYWxpZ24ub2Zmc2V0WzBdICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbU5vZGUuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gdHJhbnNmb3JtT3JpZ2luLmxlZnQgKyAnICcgKyB0cmFuc2Zvcm1PcmlnaW4udG9wO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlVG9vbHRpcCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy50b29sdGlwID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiAhIXByb3BzLnZpc2libGUgfHwgISFwcm9wcy5kZWZhdWx0VmlzaWJsZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoVG9vbHRpcCwgW3tcbiAgICAgICAga2V5OiAnZ2V0UG9wdXBEb21Ob2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvb2x0aXAuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFBsYWNlbWVudHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGxhY2VtZW50cygpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gX3Byb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgICAgICAgIGFycm93UG9pbnRBdENlbnRlciA9IF9wcm9wcy5hcnJvd1BvaW50QXRDZW50ZXIsXG4gICAgICAgICAgICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gX3Byb3BzLmF1dG9BZGp1c3RPdmVyZmxvdztcblxuICAgICAgICAgICAgcmV0dXJuIGJ1aWx0aW5QbGFjZW1lbnRzIHx8ICgwLCBfcGxhY2VtZW50czJbJ2RlZmF1bHQnXSkoe1xuICAgICAgICAgICAgICAgIGFycm93UG9pbnRBdENlbnRlcjogYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdDogOCxcbiAgICAgICAgICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvd1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzSG92ZXJUcmlnZ2VyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSG92ZXJUcmlnZ2VyKCkge1xuICAgICAgICAgICAgdmFyIHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG5cbiAgICAgICAgICAgIGlmICghdHJpZ2dlciB8fCB0cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0cmlnZ2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyLmluZGV4T2YoJ2hvdmVyJykgPj0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXggVG9vbHRpcCB3b24ndCBoaWRlIGF0IGRpc2FibGVkIGJ1dHRvblxuICAgICAgICAvLyBtb3VzZSBldmVudHMgZG9uJ3QgdHJpZ2dlciBhdCBkaXNhYmxlZCBidXR0b24gaW4gQ2hyb21lXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdG9vbHRpcC9pc3N1ZXMvMThcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUuX19BTlRfQlVUVE9OIHx8IGVsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicpICYmIGVsZW1lbnQucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5pc0hvdmVyVHJpZ2dlcigpKSB7XG4gICAgICAgICAgICAgICAgLy8gUGljayBzb21lIGxheW91dCByZWxhdGVkIHN0eWxlIHByb3BlcnRpZXMgdXAgdG8gc3BhblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgICAgICAgICAgICAgdmFyIF9zcGxpdE9iamVjdCA9IHNwbGl0T2JqZWN0KGVsZW1lbnQucHJvcHMuc3R5bGUsIFsncG9zaXRpb24nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJywgJ2Zsb2F0JywgJ2Rpc3BsYXknLCAnekluZGV4J10pLFxuICAgICAgICAgICAgICAgICAgICBwaWNrZWQgPSBfc3BsaXRPYmplY3QucGlja2VkLFxuICAgICAgICAgICAgICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3BhblN0eWxlID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0sIHBpY2tlZCwgeyBjdXJzb3I6ICdub3QtYWxsb3dlZCcgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvblN0eWxlID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgb21pdHRlZCwgeyBwb2ludGVyRXZlbnRzOiAnbm9uZScgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGJ1dHRvblN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzcGFuU3R5bGUsIGNsYXNzTmFtZTogZWxlbWVudC5wcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzTm9UaXRsZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc05vVGl0bGUoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBfcHJvcHMyLnRpdGxlLFxuICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBfcHJvcHMyLm92ZXJsYXk7XG5cbiAgICAgICAgICAgIHJldHVybiAhdGl0bGUgJiYgIW92ZXJsYXk7IC8vIG92ZXJsYXkgZm9yIG9sZCB2ZXJzaW9uIGNvbXBhdGliaWxpdHlcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgICAgICAgICAgIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXI7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIHZpc2libGUgPSBzdGF0ZS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gSGlkZSB0b29sdGlwIHdoZW4gdGhlcmUgaXMgbm8gdGl0bGVcbiAgICAgICAgICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykgJiYgdGhpcy5pc05vVGl0bGUoKSkge1xuICAgICAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7XG4gICAgICAgICAgICB2YXIgY2hpbGRDbHMgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKGNoaWxkUHJvcHMuY2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgb3BlbkNsYXNzTmFtZSB8fCBwcmVmaXhDbHMgKyAnLW9wZW4nLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBfcmNUb29sdGlwMlsnZGVmYXVsdCddLFxuICAgICAgICAgICAgICAgICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMucHJvcHMsIHsgZ2V0VG9vbHRpcENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0VG9vbHRpcENvbnRhaW5lciwgcmVmOiB0aGlzLnNhdmVUb29sdGlwLCBidWlsdGluUGxhY2VtZW50czogdGhpcy5nZXRQbGFjZW1lbnRzKCksIG92ZXJsYXk6IG92ZXJsYXkgfHwgdGl0bGUgfHwgJycsIHZpc2libGU6IHZpc2libGUsIG9uVmlzaWJsZUNoYW5nZTogdGhpcy5vblZpc2libGVDaGFuZ2UsIG9uUG9wdXBBbGlnbjogdGhpcy5vblBvcHVwQWxpZ24gfSksXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA/ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgeyBjbGFzc05hbWU6IGNoaWxkQ2xzIH0pIDogY2hpbGRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtdG9vbHRpcCcsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICB0cmFuc2l0aW9uTmFtZTogJ3pvb20tYmlnLWZhc3QnLFxuICAgIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgIGFycm93UG9pbnRBdENlbnRlcjogZmFsc2UsXG4gICAgYXV0b0FkanVzdE92ZXJmbG93OiB0cnVlXG59O1xuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRvb2x0aXApO1xuZXhwb3J0c1snZGVmYXVsdCddID0gVG9vbHRpcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiN0cmFja2VyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTBweCA0MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxMHB4IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gICN0cmFja2VyIGFzaWRlLCAjdHJhY2tlciBzZWN0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgI3RyYWNrZXIgc2VjdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7IH1cXG4gICN0cmFja2VyIGFzaWRlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMzsgfVxcbiAgI3RyYWNrZXIgW3Jvdz1cXFwiMVxcXCJdIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMTsgfVxcbiAgI3RyYWNrZXIgW3Jvdz1cXFwiMlxcXCJdIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtcm93LWVuZDogMzsgfVxcbiAgI3RyYWNrZXIgI2NoYXJ0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDEwcHggYXV0byAxMHB4IGF1dG87IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDEpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgICBncmlkLXJvdy1lbmQ6IDE7IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDIpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgICBncmlkLXJvdy1lbmQ6IDM7IH1cXG4gICAgI3RyYWNrZXIgI2NoYXJ0cyBzZWN0aW9uOm50aC1vZi10eXBlKDMpIHtcXG4gICAgICBncmlkLXJvdy1zdGFydDogNTtcXG4gICAgICBncmlkLXJvdy1lbmQ6IDU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9IGZyb20gJ2RvbS1hbGlnbic7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcblxuaW1wb3J0IHsgaXNXaW5kb3csIGJ1ZmZlciwgaXNTYW1lUG9pbnQgfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGZ1bmMpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nIHx8ICFmdW5jKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZ1bmMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnQocG9pbnQpIHtcbiAgaWYgKHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcgfHwgIXBvaW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBvaW50O1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWxpZ24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFsaWduKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxpZ24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmZvcmNlQWxpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIHRhcmdldCA9IF90aGlzJHByb3BzLnRhcmdldCxcbiAgICAgICAgICBhbGlnbiA9IF90aGlzJHByb3BzLmFsaWduLFxuICAgICAgICAgIG9uQWxpZ24gPSBfdGhpcyRwcm9wcy5vbkFsaWduO1xuXG4gICAgICBpZiAoIWRpc2FibGVkICYmIHRhcmdldCkge1xuICAgICAgICB2YXIgc291cmNlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgICAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCh0YXJnZXQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25FbGVtZW50KHNvdXJjZSwgZWxlbWVudCwgYWxpZ24pO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25BbGlnbikge1xuICAgICAgICAgIG9uQWxpZ24oc291cmNlLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIC8vIGlmIHBhcmVudCByZWYgbm90IGF0dGFjaGVkIC4uLi4gdXNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXG4gICAgdGhpcy5mb3JjZUFsaWduKCk7XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5tb25pdG9yV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciByZUFsaWduID0gZmFsc2U7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciBzb3VyY2VSZWN0ID0gc291cmNlID8gc291cmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcblxuICAgICAgaWYgKHByZXZQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsYXN0RWxlbWVudCA9IGdldEVsZW1lbnQocHJldlByb3BzLnRhcmdldCk7XG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGdldEVsZW1lbnQocHJvcHMudGFyZ2V0KTtcbiAgICAgICAgdmFyIGxhc3RQb2ludCA9IGdldFBvaW50KHByZXZQcm9wcy50YXJnZXQpO1xuICAgICAgICB2YXIgY3VycmVudFBvaW50ID0gZ2V0UG9pbnQocHJvcHMudGFyZ2V0KTtcblxuICAgICAgICBpZiAoaXNXaW5kb3cobGFzdEVsZW1lbnQpICYmIGlzV2luZG93KGN1cnJlbnRFbGVtZW50KSkge1xuICAgICAgICAgIC8vIFNraXAgaWYgaXMgd2luZG93XG4gICAgICAgICAgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RFbGVtZW50ICE9PSBjdXJyZW50RWxlbWVudCB8fCAvLyBFbGVtZW50IGNoYW5nZVxuICAgICAgICBsYXN0RWxlbWVudCAmJiAhY3VycmVudEVsZW1lbnQgJiYgY3VycmVudFBvaW50IHx8IC8vIENoYW5nZSBmcm9tIGVsZW1lbnQgdG8gcG9pbnRcbiAgICAgICAgbGFzdFBvaW50ICYmIGN1cnJlbnRQb2ludCAmJiBjdXJyZW50RWxlbWVudCB8fCAvLyBDaGFuZ2UgZnJvbSBwb2ludCB0byBlbGVtZW50XG4gICAgICAgIGN1cnJlbnRQb2ludCAmJiAhaXNTYW1lUG9pbnQobGFzdFBvaW50LCBjdXJyZW50UG9pbnQpKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBzb3VyY2UgZWxlbWVudCBzaXplIGNoYW5nZWRcbiAgICAgICAgdmFyIHByZVJlY3QgPSB0aGlzLnNvdXJjZVJlY3QgfHwge307XG4gICAgICAgIGlmICghcmVBbGlnbiAmJiBzb3VyY2UgJiYgKHByZVJlY3Qud2lkdGggIT09IHNvdXJjZVJlY3Qud2lkdGggfHwgcHJlUmVjdC5oZWlnaHQgIT09IHNvdXJjZVJlY3QuaGVpZ2h0KSkge1xuICAgICAgICAgIHJlQWxpZ24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc291cmNlUmVjdCA9IHNvdXJjZVJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKHJlQWxpZ24pIHtcbiAgICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5tb25pdG9yV2luZG93UmVzaXplICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIHN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVzaXplSGFuZGxlcikge1xuICAgICAgdGhpcy5idWZmZXJNb25pdG9yID0gYnVmZmVyKHRoaXMuZm9yY2VBbGlnbiwgdGhpcy5wcm9wcy5tb25pdG9yQnVmZmVyVGltZSk7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuYnVmZmVyTW9uaXRvcik7XG4gICAgfVxuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIHN0b3BNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyTW9uaXRvci5jbGVhcigpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlblByb3BzID0gX3Byb3BzLmNoaWxkcmVuUHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgdmFyIHByb3BMaXN0ID0gT2JqZWN0LmtleXMoY2hpbGRyZW5Qcm9wcyk7XG4gICAgICBwcm9wTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIG5ld1Byb3BzW3Byb3BdID0gX3RoaXMyLnByb3BzW2NoaWxkcmVuUHJvcHNbcHJvcF1dO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld1Byb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9O1xuXG4gIHJldHVybiBBbGlnbjtcbn0oQ29tcG9uZW50KTtcblxuQWxpZ24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0YXJnZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNsaWVudFg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xpZW50WTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlWDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlWTogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuICBvbkFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW9uaXRvckJ1ZmZlclRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuQWxpZ24uZGVmYXVsdFByb3BzID0ge1xuICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9LFxuICBtb25pdG9yQnVmZmVyVGltZTogNTAsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRvQXJyYXlDaGlsZHJlbiwgbWVyZ2VDaGlsZHJlbiwgZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXksIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSwgaXNTYW1lQ2hpbGRyZW4gfSBmcm9tICcuL0NoaWxkcmVuVXRpbHMnO1xuaW1wb3J0IEFuaW1hdGVDaGlsZCBmcm9tICcuL0FuaW1hdGVDaGlsZCc7XG5pbXBvcnQgQ1NTTW90aW9uIGZyb20gJy4vQ1NTTW90aW9uJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciBkZWZhdWx0S2V5ID0gJ3JjX2FuaW1hdGVfJyArIERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgaWYgKCFjaGlsZHJlbi5rZXkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAga2V5OiBkZWZhdWx0S2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEFuaW1hdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQW5pbWF0ZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbmltYXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzID0ge307XG4gICAgX3RoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBfdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSlcbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRyZW5SZWZzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiAhIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBfdGhpczIucGVyZm9ybUFwcGVhcihjaGlsZC5rZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLm5leHRQcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMobmV4dFByb3BzKSk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgLy8gZXhjbHVzaXZlIG5lZWRzIGltbWVkaWF0ZSByZXNwb25zZVxuICAgICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzMy5zdG9wKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIHNob3dQcm9wID0gcHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cztcbiAgICAgIC8vIGxhc3QgcHJvcHMgY2hpbGRyZW4gaWYgZXhjbHVzaXZlXG4gICAgICB2YXIgY3VycmVudENoaWxkcmVuID0gcHJvcHMuZXhjbHVzaXZlID8gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSkgOiB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgLy8gaW4gY2FzZSBkZXN0cm95IGluIHNob3dQcm9wIG1vZGVcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VycmVudENoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZC5rZXkpO1xuICAgICAgICAgIHZhciBuZXdDaGlsZCA9IHZvaWQgMDtcbiAgICAgICAgICBpZiAoKCFuZXh0Q2hpbGQgfHwgIW5leHRDaGlsZC5wcm9wc1tzaG93UHJvcF0pICYmIGN1cnJlbnRDaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KG5leHRDaGlsZCB8fCBjdXJyZW50Q2hpbGQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2hvd1Byb3AsIHRydWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5leHRDaGlsZCkge1xuICAgICAgICAgIGlmICghbmV4dENoaWxkIHx8ICFmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGQua2V5KSkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDaGlsZHJlbiA9IG1lcmdlQ2hpbGRyZW4oY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHJlbmRlciB0byBhdm9pZCB1cGRhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW5cbiAgICAgIH0pO1xuXG4gICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzUHJldiA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICAgIGlmIChoYXNQcmV2KSB7XG4gICAgICAgICAgICB2YXIgc2hvd0luTm93ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTm93ICYmIHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNQcmV2KSB7XG4gICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5O1xuICAgICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNOZXh0ID0gY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwga2V5KTtcbiAgICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzTmV4dCkge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5leHQgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgICAgICAgaWYgKCFzaG93SW5OZXh0ICYmIHNob3dJbk5vdykge1xuICAgICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTm93KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzTmV4dCkge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICBrZXlzVG9FbnRlci5mb3JFYWNoKHRoaXMucGVyZm9ybUVudGVyKTtcbiAgICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKHRoaXMucGVyZm9ybUxlYXZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbGlkQ2hpbGRCeUtleScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSB7XG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIHJldHVybiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aoa2V5KSB7XG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5jaGlsZHJlblJlZnNba2V5XTtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMubmV4dFByb3BzID0gcHJvcHM7XG4gICAgICB2YXIgc3RhdGVDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgaWYgKHN0YXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4gPSBzdGF0ZUNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNoaWxkLmtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNldCBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEFuaW1hdGVDaGlsZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY2hpbGRyZW5SZWZzW2NoaWxkLmtleV0gPSBub2RlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhbmltYXRpb246IHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogcHJvcHMudHJhbnNpdGlvbkFwcGVhcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBwcm9wcy50cmFuc2l0aW9uTGVhdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIENvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gcHJvcHM7XG4gICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHBhc3NlZFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGVcbiAgICAgICAgICB9LCBwcm9wcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgIHBhc3NlZFByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW5bMF0gfHwgbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQW5pbWF0ZS5pc0FuaW1hdGUgPSB0cnVlO1xuQW5pbWF0ZS5DU1NNb3Rpb24gPSBDU1NNb3Rpb247XG5BbmltYXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb21wb25lbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICB0cmFuc2l0aW9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQXBwZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1Byb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbkFuaW1hdGUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRpb246IHt9LFxuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY29tcG9uZW50UHJvcHM6IHt9LFxuICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIG9uRW5kOiBub29wLFxuICBvbkVudGVyOiBub29wLFxuICBvbkxlYXZlOiBub29wLFxuICBvbkFwcGVhcjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKF90aGlzNS5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM1LCBrZXksICdlbnRlcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2FwcGVhcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lQWRkaW5nID0gZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICBpZiAoIV90aGlzNS5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIC8vIGV4Y2x1c2l2ZSB3aWxsIG5vdCBuZWVkIHRoaXNcbiAgICAgIF90aGlzNS5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcHBlYXInKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgcHJvcHMub25BcHBlYXIoa2V5KTtcbiAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFuaW1VdGlsLmFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgIHByb3BzLm9uRW50ZXIoa2V5KTtcbiAgICAgIHByb3BzLm9uRW5kKGtleSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXM1LmhhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXM1LCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG4gICAgZGVsZXRlIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gX3RoaXM1Lm5leHRQcm9wcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgLy8gaW4gY2FzZSBzdGF0ZSBjaGFuZ2UgaXMgdG9vIGZhc3RcbiAgICBpZiAoX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgX3RoaXM1LnBlcmZvcm1FbnRlcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBpZiAoYW5pbVV0aWwuYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uTGVhdmUoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghaXNTYW1lQ2hpbGRyZW4oX3RoaXM1LnN0YXRlLmNoaWxkcmVuLCBjdXJyZW50Q2hpbGRyZW4sIHByb3BzLnNob3dQcm9wKSkge1xuICAgICAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRyZW5cbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3NzQW5pbWF0ZSwgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9IGZyb20gJ2Nzcy1hbmltYXRpb24nO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIHRyYW5zaXRpb25NYXAgPSB7XG4gIGVudGVyOiAndHJhbnNpdGlvbkVudGVyJyxcbiAgYXBwZWFyOiAndHJhbnNpdGlvbkFwcGVhcicsXG4gIGxlYXZlOiAndHJhbnNpdGlvbkxlYXZlJ1xufTtcblxudmFyIEFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGVDaGlsZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZUNoaWxkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZUNoaWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZUNoaWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZUNoaWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzRW50ZXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNMZWF2ZVN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHdheXMgc3luYywgZG8gbm90IGludGVydXB0IHdpdGggcmVhY3QgY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiAtPiBhbmltYXRlIGhpZGRlbiAtPlxuICAgICAgICAvLyBkaWRVcGRhdGUgLT4gYW5pbWF0ZSBsZWF2ZSAtPiB1bm1vdW50IChpZiBhbmltYXRlIGlzIG5vbmUpXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmFuc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgbmFtZUlzT2JqID0gdHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAnb2JqZWN0JztcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgX3RoaXMyLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfTtcbiAgICAgIGlmICgoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfHwgIXByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXSkgJiYgdHJhbnNpdGlvbk5hbWUgJiYgcHJvcHNbdHJhbnNpdGlvbk1hcFthbmltYXRpb25UeXBlXV0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlXSA6IHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICAgICAgdmFyIGFjdGl2ZU5hbWUgPSBuYW1lICsgJy1hY3RpdmUnO1xuICAgICAgICBpZiAobmFtZUlzT2JqICYmIHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ10pIHtcbiAgICAgICAgICBhY3RpdmVOYW1lID0gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BwZXIgPSBjc3NBbmltYXRlKG5vZGUsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTmFtZVxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wcGVyID0gcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKG5vZGUsIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB2YXIgc3RvcHBlciA9IHRoaXMuc3RvcHBlcjtcbiAgICAgIGlmIChzdG9wcGVyKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IG51bGw7XG4gICAgICAgIHN0b3BwZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGVDaGlsZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZUNoaWxkOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgeyBnZXRUcmFuc2l0aW9uTmFtZSwgYW5pbWF0aW9uRW5kTmFtZSwgdHJhbnNpdGlvbkVuZE5hbWUsIHN1cHBvcnRUcmFuc2l0aW9uIH0gZnJvbSAnLi91dGlsL21vdGlvbic7XG5cbnZhciBTVEFUVVNfTk9ORSA9ICdub25lJztcbnZhciBTVEFUVVNfQVBQRUFSID0gJ2FwcGVhcic7XG52YXIgU1RBVFVTX0VOVEVSID0gJ2VudGVyJztcbnZhciBTVEFUVVNfTEVBVkUgPSAnbGVhdmUnO1xuXG4vKipcbiAqIGB0cmFuc2l0aW9uU3VwcG9ydGAgaXMgdXNlZCBmb3Igbm9uZSB0cmFuc2l0aW9uIHRlc3QgY2FzZS5cbiAqIERlZmF1bHQgd2UgdXNlIGJyb3dzZXIgdHJhbnNpdGlvbiBldmVudCBzdXBwb3J0IGNoZWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuQ1NTTW90aW9uKHRyYW5zaXRpb25TdXBwb3J0KSB7XG4gIGZ1bmN0aW9uIGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gISEocHJvcHMubW90aW9uTmFtZSAmJiB0cmFuc2l0aW9uU3VwcG9ydCk7XG4gIH1cblxuICB2YXIgQ1NTTW90aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ1NTTW90aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENTU01vdGlvbigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NNb3Rpb24pO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ1NTTW90aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ1NTTW90aW9uKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgIF90aGlzLm9uRG9tVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgIG5ld1N0YXR1cyA9IF90aGlzJHN0YXRlLm5ld1N0YXR1cztcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkFwcGVhclN0YXJ0ID0gX3RoaXMkcHJvcHMub25BcHBlYXJTdGFydCxcbiAgICAgICAgICAgIG9uRW50ZXJTdGFydCA9IF90aGlzJHByb3BzLm9uRW50ZXJTdGFydCxcbiAgICAgICAgICAgIG9uTGVhdmVTdGFydCA9IF90aGlzJHByb3BzLm9uTGVhdmVTdGFydCxcbiAgICAgICAgICAgIG9uQXBwZWFyQWN0aXZlID0gX3RoaXMkcHJvcHMub25BcHBlYXJBY3RpdmUsXG4gICAgICAgICAgICBvbkVudGVyQWN0aXZlID0gX3RoaXMkcHJvcHMub25FbnRlckFjdGl2ZSxcbiAgICAgICAgICAgIG9uTGVhdmVBY3RpdmUgPSBfdGhpcyRwcm9wcy5vbkxlYXZlQWN0aXZlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gX3RoaXMkcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBfdGhpcyRwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gX3RoaXMkcHJvcHMubW90aW9uTGVhdmU7XG5cblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24oX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXZlbnQgaW5qZWN0aW9uXG4gICAgICAgIHZhciAkZWxlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgICBpZiAoX3RoaXMuJGVsZSAhPT0gJGVsZSkge1xuICAgICAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoX3RoaXMuJGVsZSk7XG4gICAgICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcigkZWxlKTtcbiAgICAgICAgICBfdGhpcy4kZWxlID0gJGVsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgc3RhdHVzXG4gICAgICAgIGlmIChuZXdTdGF0dXMgJiYgc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkFwcGVhclN0YXJ0LCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMob25BcHBlYXJBY3RpdmUsIFNUQVRVU19BUFBFQVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiBtb3Rpb25FbnRlcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkVudGVyU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkVudGVyQWN0aXZlLCBTVEFUVVNfRU5URVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkxlYXZlU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkxlYXZlQWN0aXZlLCBTVEFUVVNfTEVBVkUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdGlvbkVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZTIuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzQWN0aXZlID0gX3RoaXMkc3RhdGUyLnN0YXR1c0FjdGl2ZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25BcHBlYXJFbmQgPSBfdGhpcyRwcm9wczIub25BcHBlYXJFbmQsXG4gICAgICAgICAgICBvbkVudGVyRW5kID0gX3RoaXMkcHJvcHMyLm9uRW50ZXJFbmQsXG4gICAgICAgICAgICBvbkxlYXZlRW5kID0gX3RoaXMkcHJvcHMyLm9uTGVhdmVFbmQ7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiBzdGF0dXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25BcHBlYXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uRW50ZXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uTGVhdmVFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoJGVsZSkge1xuICAgICAgICBpZiAoISRlbGUpIHJldHVybjtcblxuICAgICAgICAkZWxlLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgICAgJGVsZS5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoJGVsZSkge1xuICAgICAgICBpZiAoISRlbGUpIHJldHVybjtcblxuICAgICAgICAkZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgICAgJGVsZS5yZW1vdmVFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdHlsZUZ1bmMsIGFkZGl0aW9uYWxTdGF0ZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGF0dXNTdHlsZSA9IHN0eWxlRnVuYyA/IHN0eWxlRnVuYyhSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyksIGV2ZW50KSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHN0YXR1c1N0eWxlID09PSBmYWxzZSB8fCBfdGhpcy5fZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG5leHRTdGVwID0gdm9pZCAwO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBuZXh0U3RlcCA9IGZ1bmN0aW9uIG5leHRTdGVwKCkge1xuICAgICAgICAgICAgX3RoaXMubmV4dEZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICAgIHN0YXR1c1N0eWxlOiB0eXBlb2Ygc3RhdHVzU3R5bGUgPT09ICdvYmplY3QnID8gc3RhdHVzU3R5bGUgOiBudWxsLFxuICAgICAgICAgIG5ld1N0YXR1czogZmFsc2VcbiAgICAgICAgfSwgYWRkaXRpb25hbFN0YXRlKSwgbmV4dFN0ZXApOyAvLyBUcmlnZ2VyIGJlZm9yZSBuZXh0IGZyYW1lICYgYWZ0ZXIgYGNvbXBvbmVudERpZE1vdW50YFxuICAgICAgfTtcblxuICAgICAgX3RoaXMudXBkYXRlQWN0aXZlU3RhdHVzID0gZnVuY3Rpb24gKHN0eWxlRnVuYywgY3VycmVudFN0YXR1cykge1xuICAgICAgICAvLyBgc2V0U3RhdGVgIHVzZSBgcG9zdE1lc3NhZ2VgIHRvIHRyaWdnZXIgYXQgdGhlIGVuZCBvZiBmcmFtZS5cbiAgICAgICAgLy8gTGV0J3MgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB1cGRhdGUgbmV3IHN0YXRlIGluIG5leHQgZnJhbWUuXG4gICAgICAgIF90aGlzLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IF90aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgICAgIGlmIChzdGF0dXMgIT09IGN1cnJlbnRTdGF0dXMpIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhzdHlsZUZ1bmMsIHsgc3RhdHVzQWN0aXZlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm5leHRGcmFtZSA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIF90aGlzLmNhbmNlbE5leHRGcmFtZSgpO1xuICAgICAgICBfdGhpcy5yYWYgPSByYWYoZnVuYyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jYW5jZWxOZXh0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5yYWYpIHtcbiAgICAgICAgICByYWYuY2FuY2VsKF90aGlzLnJhZik7XG4gICAgICAgICAgX3RoaXMucmFmID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHN0YXR1czogU1RBVFVTX05PTkUsXG4gICAgICAgIHN0YXR1c0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIG5ld1N0YXR1czogZmFsc2UsXG4gICAgICAgIHN0YXR1c1N0eWxlOiBudWxsXG4gICAgICB9O1xuICAgICAgX3RoaXMuJGVsZSA9IG51bGw7XG4gICAgICBfdGhpcy5yYWYgPSBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDU1NNb3Rpb24sIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Eb21VcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vbkRvbVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuJGVsZSk7XG4gICAgICAgIHRoaXMuY2FuY2VsTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF9zdGF0ZS5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNBY3RpdmUgPSBfc3RhdGUuc3RhdHVzQWN0aXZlLFxuICAgICAgICAgICAgc3RhdHVzU3R5bGUgPSBfc3RhdGUuc3RhdHVzU3R5bGU7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBtb3Rpb25OYW1lID0gX3Byb3BzLm1vdGlvbk5hbWUsXG4gICAgICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgICAgICByZW1vdmVPbkxlYXZlID0gX3Byb3BzLnJlbW92ZU9uTGVhdmU7XG5cblxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfTk9ORSB8fCAhaXNTdXBwb3J0VHJhbnNpdGlvbih0aGlzLnByb3BzKSkge1xuICAgICAgICAgIHJldHVybiB2aXNpYmxlIHx8ICFyZW1vdmVPbkxlYXZlID8gY2hpbGRyZW4oe30pIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyksIHN0YXR1cyAhPT0gU1RBVFVTX05PTkUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGdldFRyYW5zaXRpb25OYW1lKG1vdGlvbk5hbWUsIHN0YXR1cyArICctYWN0aXZlJyksIHN0YXR1cyAhPT0gU1RBVFVTX05PTkUgJiYgc3RhdHVzQWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBtb3Rpb25OYW1lLCB0eXBlb2YgbW90aW9uTmFtZSA9PT0gJ3N0cmluZycpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHN0eWxlOiBzdGF0dXNTdHlsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgICAgIHZhciBwcmV2UHJvcHMgPSBfcmVmLnByZXZQcm9wcztcblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gcHJvcHMubW90aW9uTGVhdmUsXG4gICAgICAgICAgICBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ID0gcHJvcHMubW90aW9uTGVhdmVJbW1lZGlhdGVseTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFwcGVhclxuICAgICAgICBpZiAoIXByZXZQcm9wcyAmJiB2aXNpYmxlICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19BUFBFQVI7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVudGVyXG4gICAgICAgIGlmIChwcmV2UHJvcHMgJiYgIXByZXZQcm9wcy52aXNpYmxlICYmIHZpc2libGUgJiYgbW90aW9uRW50ZXIpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfRU5URVI7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExlYXZlXG4gICAgICAgIGlmIChwcmV2UHJvcHMgJiYgcHJldlByb3BzLnZpc2libGUgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUgfHwgIXByZXZQcm9wcyAmJiBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ICYmICF2aXNpYmxlICYmIG1vdGlvbkxlYXZlKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX0xFQVZFO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENTU01vdGlvbjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIENTU01vdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG1vdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBtb3Rpb25BcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG1vdGlvbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb3Rpb25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbW90aW9uTGVhdmVJbW1lZGlhdGVseTogUHJvcFR5cGVzLmJvb2wsIC8vIFRyaWdnZXIgbGVhdmUgbW90aW9uIGltbWVkaWF0ZWx5XG4gICAgcmVtb3ZlT25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25BcHBlYXJTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25BcHBlYXJBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQXBwZWFyRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVudGVyU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRW50ZXJBY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRW50ZXJFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTGVhdmVTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25MZWF2ZUFjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25MZWF2ZUVuZDogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcbiAgQ1NTTW90aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIG1vdGlvbkVudGVyOiB0cnVlLFxuICAgIG1vdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICBtb3Rpb25MZWF2ZTogdHJ1ZSxcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlXG4gIH07XG5cblxuICBwb2x5ZmlsbChDU1NNb3Rpb24pO1xuXG4gIHJldHVybiBDU1NNb3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbkNTU01vdGlvbihzdXBwb3J0VHJhbnNpdGlvbik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBIYW5kbGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShIYW5kbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhbmRsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrM1snZGVmYXVsdCddKSh0aGlzLCBIYW5kbGUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zWydkZWZhdWx0J10pKHRoaXMsIChfcmVmID0gSGFuZGxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSGFuZGxlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjbGlja0ZvY3VzZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuc2V0SGFuZGxlUmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmhhbmRsZSA9IG5vZGU7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5oYW5kbGUpIHtcbiAgICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyh0cnVlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0Q2xpY2tGb2N1cyhmYWxzZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldENsaWNrRm9jdXMoZmFsc2UpO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShIYW5kbGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIG1vdXNldXAgd29uJ3QgdHJpZ2dlciBpZiBtb3VzZSBtb3ZlZCBvdXQgb2YgaGFuZGxlLFxuICAgICAgLy8gc28gd2UgbGlzdGVuIG9uIGRvY3VtZW50IGhlcmUuXG4gICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKShkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5vbk1vdXNlVXBMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldENsaWNrRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbGlja0ZvY3VzKGZvY3VzZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbGlja0ZvY3VzZWQ6IGZvY3VzZWQgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xpY2tGb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaWNrRm9jdXMoKSB7XG4gICAgICB0aGlzLnNldENsaWNrRm9jdXModHJ1ZSk7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuaGFuZGxlLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLmhhbmRsZS5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgICBvZmZzZXQgPSBfcHJvcHMub2Zmc2V0LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG1pbiA9IF9wcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzLm1heCxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF9wcm9wcy50YWJJbmRleCxcbiAgICAgICAgICByZXN0UHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzM1snZGVmYXVsdCddKShfcHJvcHMsIFsncHJlZml4Q2xzJywgJ3ZlcnRpY2FsJywgJ29mZnNldCcsICdzdHlsZScsICdkaXNhYmxlZCcsICdtaW4nLCAnbWF4JywgJ3ZhbHVlJywgJ3RhYkluZGV4J10pO1xuXG5cbiAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgcHJlZml4Q2xzICsgJy1oYW5kbGUtY2xpY2stZm9jdXNlZCcsIHRoaXMuc3RhdGUuY2xpY2tGb2N1c2VkKSk7XG5cbiAgICAgIHZhciBwb3N0aW9uU3R5bGUgPSB2ZXJ0aWNhbCA/IHsgYm90dG9tOiBvZmZzZXQgKyAnJScgfSA6IHsgbGVmdDogb2Zmc2V0ICsgJyUnIH07XG4gICAgICB2YXIgZWxTdHlsZSA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHN0eWxlLCBwb3N0aW9uU3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe1xuICAgICAgICByZWY6IHRoaXMuc2V0SGFuZGxlUmVmLFxuICAgICAgICB0YWJJbmRleDogZGlzYWJsZWQgPyBudWxsIDogdGFiSW5kZXggfHwgMFxuICAgICAgfSwgcmVzdFByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogZWxTdHlsZSxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duXG5cbiAgICAgICAgLy8gYXJpYSBhdHRyaWJ1dGVcbiAgICAgICAgLCByb2xlOiAnc2xpZGVyJyxcbiAgICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogbWF4LFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHZhbHVlLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICEhZGlzYWJsZWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEhhbmRsZTtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhhbmRsZTtcblxuXG5IYW5kbGUucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLFxuICB2ZXJ0aWNhbDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICBvZmZzZXQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBzdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIG1pbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIG1heDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgdGFiSW5kZXg6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ29uc3VtYWJsZUFycmF5Mik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9zaGFsbG93ZXF1YWwgPSByZXF1aXJlKCdzaGFsbG93ZXF1YWwnKTtcblxudmFyIF9zaGFsbG93ZXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd2VxdWFsKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vY29tbW9uL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX2NyZWF0ZVNsaWRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NyZWF0ZVNsaWRlcicpO1xuXG52YXIgX2NyZWF0ZVNsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTbGlkZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBSYW5nZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzWydkZWZhdWx0J10pKFJhbmdlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYW5nZShwcm9wcykge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIFJhbmdlKTtcblxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjNbJ2RlZmF1bHQnXSkodGhpcywgKFJhbmdlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFuZ2UpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFuZGxlOiBudWxsXG4gICAgICB9LCBfdGhpcy5ibHVyKTtcbiAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICBfdGhpcy5wcm9wcy5vbkFmdGVyQ2hhbmdlKF90aGlzLmdldFZhbHVlKCkpO1xuICAgIH07XG5cbiAgICB2YXIgY291bnQgPSBwcm9wcy5jb3VudCxcbiAgICAgICAgbWluID0gcHJvcHMubWluLFxuICAgICAgICBtYXggPSBwcm9wcy5tYXg7XG5cbiAgICB2YXIgaW5pdGlhbFZhbHVlID0gQXJyYXkuYXBwbHkodW5kZWZpbmVkLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShBcnJheShjb3VudCArIDEpKSkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtaW47XG4gICAgfSk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9ICdkZWZhdWx0VmFsdWUnIGluIHByb3BzID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogaW5pdGlhbFZhbHVlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgPyBwcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYm91bmRzID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gX3RoaXMudHJpbUFsaWduVmFsdWUodiwgaSk7XG4gICAgfSk7XG4gICAgdmFyIHJlY2VudCA9IGJvdW5kc1swXSA9PT0gbWF4ID8gMCA6IGJvdW5kcy5sZW5ndGggLSAxO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYW5kbGU6IG51bGwsXG4gICAgICByZWNlbnQ6IHJlY2VudCxcbiAgICAgIGJvdW5kczogYm91bmRzXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShSYW5nZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoISgndmFsdWUnIGluIG5leHRQcm9wcyB8fCAnbWluJyBpbiBuZXh0UHJvcHMgfHwgJ21heCcgaW4gbmV4dFByb3BzKSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMucHJvcHMubWluID09PSBuZXh0UHJvcHMubWluICYmIHRoaXMucHJvcHMubWF4ID09PSBuZXh0UHJvcHMubWF4ICYmICgwLCBfc2hhbGxvd2VxdWFsMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLnZhbHVlLCBuZXh0UHJvcHMudmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuc3RhdGUuYm91bmRzO1xuXG4gICAgICB2YXIgdmFsdWUgPSBuZXh0UHJvcHMudmFsdWUgfHwgYm91bmRzO1xuICAgICAgdmFyIG5leHRCb3VuZHMgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi50cmltQWxpZ25WYWx1ZSh2LCBpLCBuZXh0UHJvcHMpO1xuICAgICAgfSk7XG4gICAgICBpZiAobmV4dEJvdW5kcy5sZW5ndGggPT09IGJvdW5kcy5sZW5ndGggJiYgbmV4dEJvdW5kcy5ldmVyeShmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICByZXR1cm4gdiA9PT0gYm91bmRzW2ldO1xuICAgICAgfSkpIHJldHVybjtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJvdW5kczogbmV4dEJvdW5kcyB9KTtcblxuICAgICAgaWYgKGJvdW5kcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5pc1ZhbHVlT3V0T2ZSYW5nZSh2LCBuZXh0UHJvcHMpO1xuICAgICAgfSkpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHZhbHVlLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZUluUmFuZ2UodiwgbmV4dFByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGlzTm90Q29udHJvbGxlZCA9ICEoJ3ZhbHVlJyBpbiBwcm9wcyk7XG4gICAgICBpZiAoaXNOb3RDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5oYW5kbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFuZGxlOiBzdGF0ZS5oYW5kbGUgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgdGhpcy5zdGF0ZSwgc3RhdGUpO1xuICAgICAgdmFyIGNoYW5nZWRWYWx1ZSA9IGRhdGEuYm91bmRzO1xuICAgICAgcHJvcHMub25DaGFuZ2UoY2hhbmdlZFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvblN0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25TdGFydChwb3NpdGlvbikge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcHJvcHMub25CZWZvcmVDaGFuZ2UoYm91bmRzKTtcblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgICB2YXIgY2xvc2VzdEJvdW5kID0gdGhpcy5nZXRDbG9zZXN0Qm91bmQodmFsdWUpO1xuICAgICAgdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleCA9IHRoaXMuZ2V0Qm91bmROZWVkTW92aW5nKHZhbHVlLCBjbG9zZXN0Qm91bmQpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGFuZGxlOiB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4LFxuICAgICAgICByZWNlbnQ6IHRoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gYm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdO1xuICAgICAgaWYgKHZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcblxuICAgICAgdmFyIG5leHRCb3VuZHMgPSBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTNbJ2RlZmF1bHQnXSkoc3RhdGUuYm91bmRzKSk7XG4gICAgICBuZXh0Qm91bmRzW3RoaXMucHJldk1vdmVkSGFuZGxlSW5kZXhdID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHsgYm91bmRzOiBuZXh0Qm91bmRzIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTW92ZShlLCBwb3NpdGlvbikge1xuICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY2FsY1ZhbHVlQnlQb3MocG9zaXRpb24pO1xuICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUuYm91bmRzW3N0YXRlLmhhbmRsZV07XG4gICAgICBpZiAodmFsdWUgPT09IG9sZFZhbHVlKSByZXR1cm47XG5cbiAgICAgIHRoaXMubW92ZVRvKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbktleWJvYXJkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlib2FyZChlKSB7XG4gICAgICB2YXIgdmFsdWVNdXRhdG9yID0gdXRpbHMuZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSk7XG5cbiAgICAgIGlmICh2YWx1ZU11dGF0b3IpIHtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIGJvdW5kcyA9IHN0YXRlLmJvdW5kcyxcbiAgICAgICAgICAgIGhhbmRsZSA9IHN0YXRlLmhhbmRsZTtcblxuICAgICAgICB2YXIgb2xkVmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgICAgdmFyIG11dGF0ZWRWYWx1ZSA9IHZhbHVlTXV0YXRvcihvbGRWYWx1ZSwgcHJvcHMpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKG11dGF0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcbiAgICAgICAgdmFyIGlzRnJvbUtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vdmVUbyh2YWx1ZSwgaXNGcm9tS2V5Ym9hcmRFdmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmJvdW5kcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbG9zZXN0Qm91bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbG9zZXN0Qm91bmQodmFsdWUpIHtcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLnN0YXRlLmJvdW5kcztcblxuICAgICAgdmFyIGNsb3Nlc3RCb3VuZCA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGJvdW5kcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgaWYgKHZhbHVlID4gYm91bmRzW2ldKSB7XG4gICAgICAgICAgY2xvc2VzdEJvdW5kID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE1hdGguYWJzKGJvdW5kc1tjbG9zZXN0Qm91bmQgKyAxXSAtIHZhbHVlKSA8IE1hdGguYWJzKGJvdW5kc1tjbG9zZXN0Qm91bmRdIC0gdmFsdWUpKSB7XG4gICAgICAgIGNsb3Nlc3RCb3VuZCArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3Nlc3RCb3VuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCb3VuZE5lZWRNb3ZpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZE5lZWRNb3ZpbmcodmFsdWUsIGNsb3Nlc3RCb3VuZCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYm91bmRzID0gX3N0YXRlLmJvdW5kcyxcbiAgICAgICAgICByZWNlbnQgPSBfc3RhdGUucmVjZW50O1xuXG4gICAgICB2YXIgYm91bmROZWVkTW92aW5nID0gY2xvc2VzdEJvdW5kO1xuICAgICAgdmFyIGlzQXRUaGVTYW1lUG9pbnQgPSBib3VuZHNbY2xvc2VzdEJvdW5kICsgMV0gPT09IGJvdW5kc1tjbG9zZXN0Qm91bmRdO1xuXG4gICAgICBpZiAoaXNBdFRoZVNhbWVQb2ludCAmJiBib3VuZHNbcmVjZW50XSA9PT0gYm91bmRzW2Nsb3Nlc3RCb3VuZF0pIHtcbiAgICAgICAgYm91bmROZWVkTW92aW5nID0gcmVjZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNBdFRoZVNhbWVQb2ludCAmJiB2YWx1ZSAhPT0gYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdKSB7XG4gICAgICAgIGJvdW5kTmVlZE1vdmluZyA9IHZhbHVlIDwgYm91bmRzW2Nsb3Nlc3RCb3VuZCArIDFdID8gY2xvc2VzdEJvdW5kIDogY2xvc2VzdEJvdW5kICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib3VuZE5lZWRNb3Zpbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TG93ZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvd2VyQm91bmQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5ib3VuZHNbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXBwZXJCb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVwcGVyQm91bmQoKSB7XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5zdGF0ZS5ib3VuZHM7XG5cbiAgICAgIHJldHVybiBib3VuZHNbYm91bmRzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcG9zc2libGUgc2xpZGVyIHBvaW50cywgdGFraW5nIGludG8gYWNjb3VudCBib3RoXG4gICAgICogYG1hcmtzYCBhbmQgYHN0ZXBgLiBUaGUgcmVzdWx0IGlzIGNhY2hlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0UG9pbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9pbnRzKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWFya3MgPSBfcHJvcHMubWFya3MsXG4gICAgICAgICAgc3RlcCA9IF9wcm9wcy5zdGVwLFxuICAgICAgICAgIG1pbiA9IF9wcm9wcy5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzLm1heDtcblxuICAgICAgdmFyIGNhY2hlID0gdGhpcy5fZ2V0UG9pbnRzQ2FjaGU7XG4gICAgICBpZiAoIWNhY2hlIHx8IGNhY2hlLm1hcmtzICE9PSBtYXJrcyB8fCBjYWNoZS5zdGVwICE9PSBzdGVwKSB7XG4gICAgICAgIHZhciBwb2ludHNPYmplY3QgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBtYXJrcyk7XG4gICAgICAgIGlmIChzdGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIgcG9pbnQgPSBtaW47IHBvaW50IDw9IG1heDsgcG9pbnQgKz0gc3RlcCkge1xuICAgICAgICAgICAgcG9pbnRzT2JqZWN0W3BvaW50XSA9IHBvaW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMocG9pbnRzT2JqZWN0KS5tYXAocGFyc2VGbG9hdCk7XG4gICAgICAgIHBvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fZ2V0UG9pbnRzQ2FjaGUgPSB7IG1hcmtzOiBtYXJrcywgc3RlcDogc3RlcCwgcG9pbnRzOiBwb2ludHMgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9nZXRQb2ludHNDYWNoZS5wb2ludHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW92ZVRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZVRvKHZhbHVlLCBpc0Zyb21LZXlib2FyZEV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHZhciBuZXh0Qm91bmRzID0gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkzWydkZWZhdWx0J10pKHN0YXRlLmJvdW5kcykpO1xuICAgICAgbmV4dEJvdW5kc1tzdGF0ZS5oYW5kbGVdID0gdmFsdWU7XG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IHN0YXRlLmhhbmRsZTtcbiAgICAgIGlmIChwcm9wcy5wdXNoYWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5wdXNoU3Vycm91bmRpbmdIYW5kbGVzKG5leHRCb3VuZHMsIG5leHRIYW5kbGUpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wcy5hbGxvd0Nyb3NzKSB7XG4gICAgICAgIG5leHRCb3VuZHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRIYW5kbGUgPSBuZXh0Qm91bmRzLmluZGV4T2YodmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgIGhhbmRsZTogbmV4dEhhbmRsZSxcbiAgICAgICAgYm91bmRzOiBuZXh0Qm91bmRzXG4gICAgICB9KTtcbiAgICAgIGlmIChpc0Zyb21LZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIGtub3duIHByb2JsZW06IGJlY2F1c2Ugc2V0U3RhdGUgaXMgYXN5bmMsXG4gICAgICAgIC8vIHNvIHRyaWdnZXIgZm9jdXMgd2lsbCBpbnZva2UgaGFuZGxlcidzIG9uRW5kIGFuZCBhbm90aGVyIGhhbmRsZXIncyBvblN0YXJ0IHRvbyBlYXJseSxcbiAgICAgICAgLy8gY2F1c2Ugb25CZWZvcmVDaGFuZ2UgYW5kIG9uQWZ0ZXJDaGFuZ2UgcmVjZWl2ZSB3cm9uZyB2YWx1ZS5cbiAgICAgICAgLy8gaGVyZSB1c2Ugc2V0U3RhdGUgY2FsbGJhY2sgdG8gaGFja++8jGJ1dCBub3QgZWxlZ2FudFxuICAgICAgICB0aGlzLnNldFN0YXRlKHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLmhhbmRsZXNSZWZzW25leHRIYW5kbGVdLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hTdXJyb3VuZGluZ0hhbmRsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoU3Vycm91bmRpbmdIYW5kbGVzKGJvdW5kcywgaGFuZGxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLnB1c2hhYmxlO1xuXG4gICAgICB0aHJlc2hvbGQgPSBOdW1iZXIodGhyZXNob2xkKTtcblxuICAgICAgdmFyIGRpcmVjdGlvbiA9IDA7XG4gICAgICBpZiAoYm91bmRzW2hhbmRsZSArIDFdIC0gdmFsdWUgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gKzE7IC8vIHB1c2ggdG8gcmlnaHRcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAtIGJvdW5kc1toYW5kbGUgLSAxXSA8IHRocmVzaG9sZCkge1xuICAgICAgICBkaXJlY3Rpb24gPSAtMTsgLy8gcHVzaCB0byBsZWZ0XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEhhbmRsZSA9IGhhbmRsZSArIGRpcmVjdGlvbjtcbiAgICAgIHZhciBkaWZmVG9OZXh0ID0gZGlyZWN0aW9uICogKGJvdW5kc1tuZXh0SGFuZGxlXSAtIHZhbHVlKTtcbiAgICAgIGlmICghdGhpcy5wdXNoSGFuZGxlKGJvdW5kcywgbmV4dEhhbmRsZSwgZGlyZWN0aW9uLCB0aHJlc2hvbGQgLSBkaWZmVG9OZXh0KSkge1xuICAgICAgICAvLyByZXZlcnQgdG8gb3JpZ2luYWwgdmFsdWUgaWYgcHVzaGluZyBpcyBpbXBvc3NpYmxlXG4gICAgICAgIGJvdW5kc1toYW5kbGVdID0gYm91bmRzW25leHRIYW5kbGVdIC0gZGlyZWN0aW9uICogdGhyZXNob2xkO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hIYW5kbGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoSGFuZGxlKGJvdW5kcywgaGFuZGxlLCBkaXJlY3Rpb24sIGFtb3VudCkge1xuICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBib3VuZHNbaGFuZGxlXTtcbiAgICAgIHdoaWxlIChkaXJlY3Rpb24gKiAoY3VycmVudFZhbHVlIC0gb3JpZ2luYWxWYWx1ZSkgPCBhbW91bnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGVPbmVQb2ludChib3VuZHMsIGhhbmRsZSwgZGlyZWN0aW9uKSkge1xuICAgICAgICAgIC8vIGNhbid0IHB1c2ggaGFuZGxlIGVub3VnaCB0byBjcmVhdGUgdGhlIG5lZWRlZCBgYW1vdW50YCBnYXAsIHNvIHdlXG4gICAgICAgICAgLy8gcmV2ZXJ0IGl0cyBwb3NpdGlvbiB0byB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgICAgICAgICBib3VuZHNbaGFuZGxlXSA9IG9yaWdpbmFsVmFsdWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9IGJvdW5kc1toYW5kbGVdO1xuICAgICAgfVxuICAgICAgLy8gdGhlIGhhbmRsZSB3YXMgcHVzaGVkIGVub3VnaCB0byBjcmVhdGUgdGhlIG5lZWRlZCBgYW1vdW50YCBnYXBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hIYW5kbGVPbmVQb2ludCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hIYW5kbGVPbmVQb2ludChib3VuZHMsIGhhbmRsZSwgZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcbiAgICAgIHZhciBwb2ludEluZGV4ID0gcG9pbnRzLmluZGV4T2YoYm91bmRzW2hhbmRsZV0pO1xuICAgICAgdmFyIG5leHRQb2ludEluZGV4ID0gcG9pbnRJbmRleCArIGRpcmVjdGlvbjtcbiAgICAgIGlmIChuZXh0UG9pbnRJbmRleCA+PSBwb2ludHMubGVuZ3RoIHx8IG5leHRQb2ludEluZGV4IDwgMCkge1xuICAgICAgICAvLyByZWFjaGVkIHRoZSBtaW5pbXVtIG9yIG1heGltdW0gYXZhaWxhYmxlIHBvaW50LCBjYW4ndCBwdXNoIGFueW1vcmVcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG5leHRIYW5kbGUgPSBoYW5kbGUgKyBkaXJlY3Rpb247XG4gICAgICB2YXIgbmV4dFZhbHVlID0gcG9pbnRzW25leHRQb2ludEluZGV4XTtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLnB1c2hhYmxlO1xuXG4gICAgICB2YXIgZGlmZlRvTmV4dCA9IGRpcmVjdGlvbiAqIChib3VuZHNbbmV4dEhhbmRsZV0gLSBuZXh0VmFsdWUpO1xuICAgICAgaWYgKCF0aGlzLnB1c2hIYW5kbGUoYm91bmRzLCBuZXh0SGFuZGxlLCBkaXJlY3Rpb24sIHRocmVzaG9sZCAtIGRpZmZUb05leHQpKSB7XG4gICAgICAgIC8vIGNvdWxkbid0IHB1c2ggbmV4dCBoYW5kbGUsIHNvIHdlIHdvbid0IHB1c2ggdGhpcyBvbmUgZWl0aGVyXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIHB1c2ggdGhlIGhhbmRsZVxuICAgICAgYm91bmRzW2hhbmRsZV0gPSBuZXh0VmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmltQWxpZ25WYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaW1BbGlnblZhbHVlKHYsIGhhbmRsZSkge1xuICAgICAgdmFyIG5leHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICAgIHZhciBtZXJnZWRQcm9wcyA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICB2YXIgdmFsSW5SYW5nZSA9IHV0aWxzLmVuc3VyZVZhbHVlSW5SYW5nZSh2LCBtZXJnZWRQcm9wcyk7XG4gICAgICB2YXIgdmFsTm90Q29uZmxpY3QgPSB0aGlzLmVuc3VyZVZhbHVlTm90Q29uZmxpY3QoaGFuZGxlLCB2YWxJblJhbmdlLCBtZXJnZWRQcm9wcyk7XG4gICAgICByZXR1cm4gdXRpbHMuZW5zdXJlVmFsdWVQcmVjaXNpb24odmFsTm90Q29uZmxpY3QsIG1lcmdlZFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbnN1cmVWYWx1ZU5vdENvbmZsaWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVmFsdWVOb3RDb25mbGljdChoYW5kbGUsIHZhbCwgX3JlZikge1xuICAgICAgdmFyIGFsbG93Q3Jvc3MgPSBfcmVmLmFsbG93Q3Jvc3MsXG4gICAgICAgICAgdGhlcnNob2xkID0gX3JlZi5wdXNoYWJsZTtcblxuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgICAgIHZhciBib3VuZHMgPSBzdGF0ZS5ib3VuZHM7XG5cbiAgICAgIGhhbmRsZSA9IGhhbmRsZSA9PT0gdW5kZWZpbmVkID8gc3RhdGUuaGFuZGxlIDogaGFuZGxlO1xuICAgICAgdGhlcnNob2xkID0gTnVtYmVyKHRoZXJzaG9sZCk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgIGlmICghYWxsb3dDcm9zcyAmJiBoYW5kbGUgIT0gbnVsbCAmJiBib3VuZHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaGFuZGxlID4gMCAmJiB2YWwgPD0gYm91bmRzW2hhbmRsZSAtIDFdICsgdGhlcnNob2xkKSB7XG4gICAgICAgICAgcmV0dXJuIGJvdW5kc1toYW5kbGUgLSAxXSArIHRoZXJzaG9sZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFuZGxlIDwgYm91bmRzLmxlbmd0aCAtIDEgJiYgdmFsID49IGJvdW5kc1toYW5kbGUgKyAxXSAtIHRoZXJzaG9sZCkge1xuICAgICAgICAgIHJldHVybiBib3VuZHNbaGFuZGxlICsgMV0gLSB0aGVyc2hvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaGFuZGxlID0gX3N0YXRlMi5oYW5kbGUsXG4gICAgICAgICAgYm91bmRzID0gX3N0YXRlMi5ib3VuZHM7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgdmVydGljYWwgPSBfcHJvcHMyLnZlcnRpY2FsLFxuICAgICAgICAgIGluY2x1ZGVkID0gX3Byb3BzMi5pbmNsdWRlZCxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgbWluID0gX3Byb3BzMi5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzMi5tYXgsXG4gICAgICAgICAgaGFuZGxlR2VuZXJhdG9yID0gX3Byb3BzMi5oYW5kbGUsXG4gICAgICAgICAgdHJhY2tTdHlsZSA9IF9wcm9wczIudHJhY2tTdHlsZSxcbiAgICAgICAgICBoYW5kbGVTdHlsZSA9IF9wcm9wczIuaGFuZGxlU3R5bGUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfcHJvcHMyLnRhYkluZGV4O1xuXG5cbiAgICAgIHZhciBvZmZzZXRzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXM0LmNhbGNPZmZzZXQodik7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGhhbmRsZUNsYXNzTmFtZSA9IHByZWZpeENscyArICctaGFuZGxlJztcbiAgICAgIHZhciBoYW5kbGVzID0gYm91bmRzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgcmV0dXJuIGhhbmRsZUdlbmVyYXRvcih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyWydkZWZhdWx0J10pKChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgaGFuZGxlQ2xhc3NOYW1lLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIGhhbmRsZUNsYXNzTmFtZSArICctJyArIChpICsgMSksIHRydWUpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldHNbaV0sXG4gICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgZHJhZ2dpbmc6IGhhbmRsZSA9PT0gaSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICB0YWJJbmRleDogdGFiSW5kZXhbaV0gfHwgMCxcbiAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgc3R5bGU6IGhhbmRsZVN0eWxlW2ldLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuc2F2ZUhhbmRsZShpLCBoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciB0cmFja3MgPSBib3VuZHMuc2xpY2UoMCwgLTEpLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICB2YXIgaSA9IGluZGV4ICsgMTtcbiAgICAgICAgdmFyIHRyYWNrQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy10cmFjaycsIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctdHJhY2stJyArIGksIHRydWUpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9UcmFjazJbJ2RlZmF1bHQnXSwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdHJhY2tDbGFzc05hbWUsXG4gICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldHNbaSAtIDFdLFxuICAgICAgICAgIGxlbmd0aDogb2Zmc2V0c1tpXSAtIG9mZnNldHNbaSAtIDFdLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlW2luZGV4XSxcbiAgICAgICAgICBrZXk6IGlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHsgdHJhY2tzOiB0cmFja3MsIGhhbmRsZXM6IGhhbmRsZXMgfTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJhbmdlO1xufShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTsgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG5cblJhbmdlLmRpc3BsYXlOYW1lID0gJ1JhbmdlJztcblJhbmdlLnByb3BUeXBlcyA9IHtcbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIpLFxuICB2YWx1ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKSxcbiAgY291bnQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICBwdXNoYWJsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCwgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXJdKSxcbiAgYWxsb3dDcm9zczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICB0YWJJbmRleDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyKVxufTtcblJhbmdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY291bnQ6IDEsXG4gIGFsbG93Q3Jvc3M6IHRydWUsXG4gIHB1c2hhYmxlOiBmYWxzZSxcbiAgdGFiSW5kZXg6IFtdXG59O1xuZXhwb3J0c1snZGVmYXVsdCddID0gKDAsIF9jcmVhdGVTbGlkZXIyWydkZWZhdWx0J10pKFJhbmdlKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vY29tbW9uL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX2NyZWF0ZVNsaWRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NyZWF0ZVNsaWRlcicpO1xuXG52YXIgX2NyZWF0ZVNsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTbGlkZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbnZhciBTbGlkZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzM1snZGVmYXVsdCddKShTbGlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIFNsaWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zWydkZWZhdWx0J10pKHRoaXMsIChTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTbGlkZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgZHJhZ2dpbmc6IGZhbHNlIH0pO1xuICAgICAgX3RoaXMucmVtb3ZlRG9jdW1lbnRFdmVudHMoKTtcbiAgICAgIF90aGlzLnByb3BzLm9uQWZ0ZXJDaGFuZ2UoX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfTtcblxuICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IHByb3BzLm1pbjtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWU7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBfdGhpcy50cmltQWxpZ25WYWx1ZSh2YWx1ZSksXG4gICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICB9O1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCEoJ21pbmltdW1UcmFja1N0eWxlJyBpbiBwcm9wcyksICdtaW5pbXVtVHJhY2tTdHlsZSB3aWxsIGJlIGRlcHJlY2F0ZSwgcGxlYXNlIHVzZSB0cmFja1N0eWxlIGluc3RlYWQuJyk7XG4gICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCEoJ21heGltdW1UcmFja1N0eWxlJyBpbiBwcm9wcyksICdtYXhpbXVtVHJhY2tTdHlsZSB3aWxsIGJlIGRlcHJlY2F0ZSwgcGxlYXNlIHVzZSByYWlsU3R5bGUgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczNbJ2RlZmF1bHQnXSkoU2xpZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkO1xuXG4gICAgICBpZiAoYXV0b0ZvY3VzICYmICFkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIG5leHRQcm9wcyB8fCAnbWluJyBpbiBuZXh0UHJvcHMgfHwgJ21heCcgaW4gbmV4dFByb3BzKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgcHJldlZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IG5leHRQcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gbmV4dFByb3BzLnZhbHVlIDogcHJldlZhbHVlO1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMudHJpbUFsaWduVmFsdWUodmFsdWUsIG5leHRQcm9wcyk7XG4gICAgICBpZiAobmV4dFZhbHVlID09PSBwcmV2VmFsdWUpIHJldHVybjtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0VmFsdWUgfSk7XG4gICAgICBpZiAodXRpbHMuaXNWYWx1ZU91dE9mUmFuZ2UodmFsdWUsIG5leHRQcm9wcykpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXh0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNOb3RDb250cm9sbGVkID0gISgndmFsdWUnIGluIHByb3BzKTtcbiAgICAgIGlmIChpc05vdENvbnRyb2xsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGFuZ2VkVmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGNoYW5nZWRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25TdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uU3RhcnQocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcmFnZ2luZzogdHJ1ZSB9KTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgcHJldlZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcHJvcHMub25CZWZvcmVDaGFuZ2UocHJldlZhbHVlKTtcblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5jYWxjVmFsdWVCeVBvcyhwb3NpdGlvbik7XG4gICAgICB0aGlzLnN0YXJ0VmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHByZXZWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLnByZXZNb3ZlZEhhbmRsZUluZGV4ID0gMDtcblxuICAgICAgdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbk1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1vdmUoZSwgcG9zaXRpb24pIHtcbiAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblxuICAgICAgdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbktleWJvYXJkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25LZXlib2FyZChlKSB7XG4gICAgICB2YXIgdmFsdWVNdXRhdG9yID0gdXRpbHMuZ2V0S2V5Ym9hcmRWYWx1ZU11dGF0b3IoZSk7XG5cbiAgICAgIGlmICh2YWx1ZU11dGF0b3IpIHtcbiAgICAgICAgdXRpbHMucGF1c2VFdmVudChlKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgICAgIHZhciBtdXRhdGVkVmFsdWUgPSB2YWx1ZU11dGF0b3Iob2xkVmFsdWUsIHRoaXMucHJvcHMpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnRyaW1BbGlnblZhbHVlKG11dGF0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMb3dlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG93ZXJCb3VuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm1pbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVcHBlckJvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXBwZXJCb3VuZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyaW1BbGlnblZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJpbUFsaWduVmFsdWUodikge1xuICAgICAgdmFyIG5leHRQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIHZhciBtZXJnZWRQcm9wcyA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICB2YXIgdmFsID0gdXRpbHMuZW5zdXJlVmFsdWVJblJhbmdlKHYsIG1lcmdlZFByb3BzKTtcbiAgICAgIHJldHVybiB1dGlscy5lbnN1cmVWYWx1ZVByZWNpc2lvbih2YWwsIG1lcmdlZFByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIHZlcnRpY2FsID0gX3Byb3BzMi52ZXJ0aWNhbCxcbiAgICAgICAgICBpbmNsdWRlZCA9IF9wcm9wczIuaW5jbHVkZWQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIG1pbmltdW1UcmFja1N0eWxlID0gX3Byb3BzMi5taW5pbXVtVHJhY2tTdHlsZSxcbiAgICAgICAgICB0cmFja1N0eWxlID0gX3Byb3BzMi50cmFja1N0eWxlLFxuICAgICAgICAgIGhhbmRsZVN0eWxlID0gX3Byb3BzMi5oYW5kbGVTdHlsZSxcbiAgICAgICAgICB0YWJJbmRleCA9IF9wcm9wczIudGFiSW5kZXgsXG4gICAgICAgICAgbWluID0gX3Byb3BzMi5taW4sXG4gICAgICAgICAgbWF4ID0gX3Byb3BzMi5tYXgsXG4gICAgICAgICAgaGFuZGxlR2VuZXJhdG9yID0gX3Byb3BzMi5oYW5kbGU7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZSxcbiAgICAgICAgICBkcmFnZ2luZyA9IF9zdGF0ZS5kcmFnZ2luZztcblxuICAgICAgdmFyIG9mZnNldCA9IHRoaXMuY2FsY09mZnNldCh2YWx1ZSk7XG4gICAgICB2YXIgaGFuZGxlID0gaGFuZGxlR2VuZXJhdG9yKHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhhbmRsZScsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGRyYWdnaW5nOiBkcmFnZ2luZyxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgICAgIHN0eWxlOiBoYW5kbGVTdHlsZVswXSB8fCBoYW5kbGVTdHlsZSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuc2F2ZUhhbmRsZSgwLCBoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBfdHJhY2tTdHlsZSA9IHRyYWNrU3R5bGVbMF0gfHwgdHJhY2tTdHlsZTtcbiAgICAgIHZhciB0cmFjayA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9UcmFjazJbJ2RlZmF1bHQnXSwge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctdHJhY2snLFxuICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBsZW5ndGg6IG9mZnNldCxcbiAgICAgICAgc3R5bGU6ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1pbmltdW1UcmFja1N0eWxlLCBfdHJhY2tTdHlsZSlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyB0cmFja3M6IHRyYWNrLCBoYW5kbGVzOiBoYW5kbGUgfTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNsaWRlcjtcbn0oX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblNsaWRlci5wcm9wVHlwZXMgPSB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgYXV0b0ZvY3VzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmJvb2wsXG4gIHRhYkluZGV4OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlclxufTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfY3JlYXRlU2xpZGVyMlsnZGVmYXVsdCddKShTbGlkZXIpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9nZXQyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldCcpO1xuXG52YXIgX2dldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXQyKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTbGlkZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyJyk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRFdmVudExpc3RlbmVyKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX1N0ZXBzID0gcmVxdWlyZSgnLi9TdGVwcycpO1xuXG52YXIgX1N0ZXBzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0ZXBzKTtcblxudmFyIF9NYXJrcyA9IHJlcXVpcmUoJy4vTWFya3MnKTtcblxudmFyIF9NYXJrczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYXJrcyk7XG5cbnZhciBfSGFuZGxlID0gcmVxdWlyZSgnLi4vSGFuZGxlJyk7XG5cbnZhciBfSGFuZGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhbmRsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXIoQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoQ29tcG9uZW50RW5oYW5jZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29tcG9uZW50RW5oYW5jZXIocHJvcHMpIHtcbiAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIENvbXBvbmVudEVuaGFuY2VyKTtcblxuICAgICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCAoQ29tcG9uZW50RW5oYW5jZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNWZXJ0aWNhbCA9IF90aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5nZXRNb3VzZVBvc2l0aW9uKGlzVmVydGljYWwsIGUpO1xuICAgICAgICBpZiAoIXV0aWxzLmlzRXZlbnRGcm9tSGFuZGxlKGUsIF90aGlzLmhhbmRsZXNSZWZzKSkge1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBoYW5kbGVQb3NpdGlvbiA9IHV0aWxzLmdldEhhbmRsZUNlbnRlclBvc2l0aW9uKGlzVmVydGljYWwsIGUudGFyZ2V0KTtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gcG9zaXRpb24gLSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgICBwb3NpdGlvbiA9IGhhbmRsZVBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICAgIF90aGlzLm9uU3RhcnQocG9zaXRpb24pO1xuICAgICAgICBfdGhpcy5hZGREb2N1bWVudE1vdXNlRXZlbnRzKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGlzVmVydGljYWwgPSBfdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0VG91Y2hQb3NpdGlvbihpc1ZlcnRpY2FsLCBlKTtcbiAgICAgICAgaWYgKCF1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcykpIHtcbiAgICAgICAgICBfdGhpcy5kcmFnT2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSB1dGlscy5nZXRIYW5kbGVDZW50ZXJQb3NpdGlvbihpc1ZlcnRpY2FsLCBlLnRhcmdldCk7XG4gICAgICAgICAgX3RoaXMuZHJhZ09mZnNldCA9IHBvc2l0aW9uIC0gaGFuZGxlUG9zaXRpb247XG4gICAgICAgICAgcG9zaXRpb24gPSBoYW5kbGVQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5vblN0YXJ0KHBvc2l0aW9uKTtcbiAgICAgICAgX3RoaXMuYWRkRG9jdW1lbnRUb3VjaEV2ZW50cygpO1xuICAgICAgICB1dGlscy5wYXVzZUV2ZW50KGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25Gb2N1cyA9IF90aGlzJHByb3BzLm9uRm9jdXMsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF90aGlzJHByb3BzLnZlcnRpY2FsO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0V2ZW50RnJvbUhhbmRsZShlLCBfdGhpcy5oYW5kbGVzUmVmcykpIHtcbiAgICAgICAgICB2YXIgaGFuZGxlUG9zaXRpb24gPSB1dGlscy5nZXRIYW5kbGVDZW50ZXJQb3NpdGlvbih2ZXJ0aWNhbCwgZS50YXJnZXQpO1xuICAgICAgICAgIF90aGlzLmRyYWdPZmZzZXQgPSAwO1xuICAgICAgICAgIF90aGlzLm9uU3RhcnQoaGFuZGxlUG9zaXRpb24pO1xuICAgICAgICAgIHV0aWxzLnBhdXNlRXZlbnQoZSk7XG4gICAgICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgICAgIG9uRm9jdXMoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgb25CbHVyID0gX3RoaXMucHJvcHMub25CbHVyO1xuXG4gICAgICAgIF90aGlzLm9uRW5kKGUpO1xuICAgICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0pIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVzUmVmc1tfdGhpcy5wcmV2TW92ZWRIYW5kbGVJbmRleF0uY2xpY2tGb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc2xpZGVyUmVmKSB7XG4gICAgICAgICAgX3RoaXMub25FbmQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdXRpbHMuZ2V0TW91c2VQb3NpdGlvbihfdGhpcy5wcm9wcy52ZXJ0aWNhbCwgZSk7XG4gICAgICAgIF90aGlzLm9uTW92ZShlLCBwb3NpdGlvbiAtIF90aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUpIHx8ICFfdGhpcy5zbGlkZXJSZWYpIHtcbiAgICAgICAgICBfdGhpcy5vbkVuZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmdldFRvdWNoUG9zaXRpb24oX3RoaXMucHJvcHMudmVydGljYWwsIGUpO1xuICAgICAgICBfdGhpcy5vbk1vdmUoZSwgcG9zaXRpb24gLSBfdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpcy5zbGlkZXJSZWYgJiYgdXRpbHMuaXNFdmVudEZyb21IYW5kbGUoZSwgX3RoaXMuaGFuZGxlc1JlZnMpKSB7XG4gICAgICAgICAgX3RoaXMub25LZXlib2FyZChlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25DbGlja01hcmtMYWJlbCA9IGZ1bmN0aW9uIChlLCB2YWx1ZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBfdGhpcy5vbkNoYW5nZSh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNhdmVTbGlkZXIgPSBmdW5jdGlvbiAoc2xpZGVyKSB7XG4gICAgICAgIF90aGlzLnNsaWRlclJlZiA9IHNsaWRlcjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvcHMuc3RlcCxcbiAgICAgICAgICAgIG1heCA9IHByb3BzLm1heCxcbiAgICAgICAgICAgIG1pbiA9IHByb3BzLm1pbjtcblxuICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKHN0ZXAgJiYgTWF0aC5mbG9vcihzdGVwKSA9PT0gc3RlcCA/IChtYXggLSBtaW4pICUgc3RlcCA9PT0gMCA6IHRydWUsICdTbGlkZXJbbWF4XSAtIFNsaWRlclttaW5dICglcykgc2hvdWxkIGJlIGEgbXVsdGlwbGUgb2YgU2xpZGVyW3N0ZXBdICglcyknLCBtYXggLSBtaW4sIHN0ZXApO1xuICAgICAgfVxuICAgICAgX3RoaXMuaGFuZGxlc1JlZnMgPSB7fTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShDb21wb25lbnRFbmhhbmNlciwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gU25hcHNob3QgdGVzdGluZyBjYW5ub3QgaGFuZGxlIHJlZnMsIHNvIGJlIHN1cmUgdG8gbnVsbC1jaGVjayB0aGlzLlxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gdGhpcy5zbGlkZXJSZWYgJiYgdGhpcy5zbGlkZXJSZWYub3duZXJEb2N1bWVudDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICgoMCwgX2dldDNbJ2RlZmF1bHQnXSkoQ29tcG9uZW50RW5oYW5jZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29tcG9uZW50RW5oYW5jZXIucHJvdG90eXBlKSwgJ2NvbXBvbmVudFdpbGxVbm1vdW50JywgdGhpcykpICgwLCBfZ2V0M1snZGVmYXVsdCddKShDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFVubW91bnQnLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50RXZlbnRzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2xpZGVyU3RhcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNsaWRlclN0YXJ0KCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gdGhpcy5zbGlkZXJSZWY7XG4gICAgICAgIHZhciByZWN0ID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gcmVjdC50b3AgOiByZWN0LmxlZnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2xpZGVyTGVuZ3RoJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTbGlkZXJMZW5ndGgoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSB0aGlzLnNsaWRlclJlZjtcbiAgICAgICAgaWYgKCFzbGlkZXIpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb29yZHMgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gY29vcmRzLmhlaWdodCA6IGNvb3Jkcy53aWR0aDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhZGREb2N1bWVudFRvdWNoRXZlbnRzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoRXZlbnRzKCkge1xuICAgICAgICAvLyBqdXN0IHdvcmsgZm9yIENocm9tZSBpT1MgU2FmYXJpIGFuZCBBbmRyb2lkIEJyb3dzZXJcbiAgICAgICAgdGhpcy5vblRvdWNoTW92ZUxpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKSh0aGlzLmRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XG4gICAgICAgIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIgPSAoMCwgX2FkZEV2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10pKHRoaXMuZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMub25FbmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZERvY3VtZW50TW91c2VFdmVudHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VFdmVudHMoKSB7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmVMaXN0ZW5lciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGhpcy5kb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyID0gKDAsIF9hZGRFdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKSh0aGlzLmRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMub25FbmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZURvY3VtZW50RXZlbnRzJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudEV2ZW50cygpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICAgIHRoaXMub25Ub3VjaE1vdmVMaXN0ZW5lciAmJiB0aGlzLm9uVG91Y2hNb3ZlTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMub25Ub3VjaFVwTGlzdGVuZXIgJiYgdGhpcy5vblRvdWNoVXBMaXN0ZW5lci5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlTGlzdGVuZXIgJiYgdGhpcy5vbk1vdXNlTW92ZUxpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm9uTW91c2VVcExpc3RlbmVyICYmIHRoaXMub25Nb3VzZVVwTGlzdGVuZXIucmVtb3ZlKCk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZm9jdXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZXNSZWZzWzBdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdibHVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXNSZWZzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczIuaGFuZGxlc1JlZnNba2V5XSAmJiBfdGhpczIuaGFuZGxlc1JlZnNba2V5XS5ibHVyKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5oYW5kbGVzUmVmc1trZXldLmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhbGNWYWx1ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY1ZhbHVlKG9mZnNldCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3Byb3BzLnZlcnRpY2FsLFxuICAgICAgICAgICAgbWluID0gX3Byb3BzLm1pbixcbiAgICAgICAgICAgIG1heCA9IF9wcm9wcy5tYXg7XG5cbiAgICAgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMoTWF0aC5tYXgob2Zmc2V0LCAwKSAvIHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCkpO1xuICAgICAgICB2YXIgdmFsdWUgPSB2ZXJ0aWNhbCA/ICgxIC0gcmF0aW8pICogKG1heCAtIG1pbikgKyBtaW4gOiByYXRpbyAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY2FsY1ZhbHVlQnlQb3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNWYWx1ZUJ5UG9zKHBvc2l0aW9uKSB7XG4gICAgICAgIHZhciBwaXhlbE9mZnNldCA9IHBvc2l0aW9uIC0gdGhpcy5nZXRTbGlkZXJTdGFydCgpO1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gdGhpcy50cmltQWxpZ25WYWx1ZSh0aGlzLmNhbGNWYWx1ZShwaXhlbE9mZnNldCkpO1xuICAgICAgICByZXR1cm4gbmV4dFZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhbGNPZmZzZXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNPZmZzZXQodmFsdWUpIHtcbiAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgbWluID0gX3Byb3BzMi5taW4sXG4gICAgICAgICAgICBtYXggPSBfcHJvcHMyLm1heDtcblxuICAgICAgICB2YXIgcmF0aW8gPSAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICAgIHJldHVybiByYXRpbyAqIDEwMDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzYXZlSGFuZGxlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzYXZlSGFuZGxlKGluZGV4LCBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVzUmVmc1tpbmRleF0gPSBoYW5kbGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgbWFya3MgPSBfcHJvcHMzLm1hcmtzLFxuICAgICAgICAgICAgZG90cyA9IF9wcm9wczMuZG90cyxcbiAgICAgICAgICAgIHN0ZXAgPSBfcHJvcHMzLnN0ZXAsXG4gICAgICAgICAgICBpbmNsdWRlZCA9IF9wcm9wczMuaW5jbHVkZWQsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgICB2ZXJ0aWNhbCA9IF9wcm9wczMudmVydGljYWwsXG4gICAgICAgICAgICBtaW4gPSBfcHJvcHMzLm1pbixcbiAgICAgICAgICAgIG1heCA9IF9wcm9wczMubWF4LFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgICAgbWF4aW11bVRyYWNrU3R5bGUgPSBfcHJvcHMzLm1heGltdW1UcmFja1N0eWxlLFxuICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMzLnN0eWxlLFxuICAgICAgICAgICAgcmFpbFN0eWxlID0gX3Byb3BzMy5yYWlsU3R5bGUsXG4gICAgICAgICAgICBkb3RTdHlsZSA9IF9wcm9wczMuZG90U3R5bGUsXG4gICAgICAgICAgICBhY3RpdmVEb3RTdHlsZSA9IF9wcm9wczMuYWN0aXZlRG90U3R5bGU7XG5cbiAgICAgICAgdmFyIF9nZXQkY2FsbCA9ICgwLCBfZ2V0M1snZGVmYXVsdCddKShDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb21wb25lbnRFbmhhbmNlci5wcm90b3R5cGUpLCAncmVuZGVyJywgdGhpcykuY2FsbCh0aGlzKSxcbiAgICAgICAgICAgIHRyYWNrcyA9IF9nZXQkY2FsbC50cmFja3MsXG4gICAgICAgICAgICBoYW5kbGVzID0gX2dldCRjYWxsLmhhbmRsZXM7XG5cbiAgICAgICAgdmFyIHNsaWRlckNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctd2l0aC1tYXJrcycsIE9iamVjdC5rZXlzKG1hcmtzKS5sZW5ndGgpLCAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctdmVydGljYWwnLCB2ZXJ0aWNhbCksICgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKF9jbGFzc05hbWVzLCBjbGFzc05hbWUsIGNsYXNzTmFtZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IHRoaXMuc2F2ZVNsaWRlcixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc2xpZGVyQ2xhc3NOYW1lLFxuICAgICAgICAgICAgb25Ub3VjaFN0YXJ0OiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgICAgICAgb25Nb3VzZVVwOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uTW91c2VVcCxcbiAgICAgICAgICAgIG9uS2V5RG93bjogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbktleURvd24sXG4gICAgICAgICAgICBvbkZvY3VzOiBkaXNhYmxlZCA/IG5vb3AgOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgICAgICBvbkJsdXI6IGRpc2FibGVkID8gbm9vcCA6IHRoaXMub25CbHVyLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXJhaWwnLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG1heGltdW1UcmFja1N0eWxlLCByYWlsU3R5bGUpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdHJhY2tzLFxuICAgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9TdGVwczJbJ2RlZmF1bHQnXSwge1xuICAgICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdmVydGljYWwsXG4gICAgICAgICAgICBtYXJrczogbWFya3MsXG4gICAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgICAgIGluY2x1ZGVkOiBpbmNsdWRlZCxcbiAgICAgICAgICAgIGxvd2VyQm91bmQ6IHRoaXMuZ2V0TG93ZXJCb3VuZCgpLFxuICAgICAgICAgICAgdXBwZXJCb3VuZDogdGhpcy5nZXRVcHBlckJvdW5kKCksXG4gICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgZG90U3R5bGU6IGRvdFN0eWxlLFxuICAgICAgICAgICAgYWN0aXZlRG90U3R5bGU6IGFjdGl2ZURvdFN0eWxlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGFuZGxlcyxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfTWFya3MyWydkZWZhdWx0J10sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tYXJrJyxcbiAgICAgICAgICAgIG9uQ2xpY2tMYWJlbDogZGlzYWJsZWQgPyBub29wIDogdGhpcy5vbkNsaWNrTWFya0xhYmVsLFxuICAgICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsLFxuICAgICAgICAgICAgbWFya3M6IG1hcmtzLFxuICAgICAgICAgICAgaW5jbHVkZWQ6IGluY2x1ZGVkLFxuICAgICAgICAgICAgbG93ZXJCb3VuZDogdGhpcy5nZXRMb3dlckJvdW5kKCksXG4gICAgICAgICAgICB1cHBlckJvdW5kOiB0aGlzLmdldFVwcGVyQm91bmQoKSxcbiAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgbWluOiBtaW5cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29tcG9uZW50RW5oYW5jZXI7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRpc3BsYXlOYW1lID0gJ0NvbXBvbmVudEVuaGFuY2VyKCcgKyBDb21wb25lbnQuZGlzcGxheU5hbWUgKyAnKScsIF9jbGFzcy5wcm9wVHlwZXMgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBDb21wb25lbnQucHJvcFR5cGVzLCB7XG4gICAgbWluOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgICBtYXg6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICAgIHN0ZXA6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLFxuICAgIG1hcmtzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgICBpbmNsdWRlZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgIGNsYXNzTmFtZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG4gICAgcHJlZml4Q2xzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZyxcbiAgICBkaXNhYmxlZDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFueSxcbiAgICBvbkJlZm9yZUNoYW5nZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgb25BZnRlckNoYW5nZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgIGhhbmRsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgIGRvdHM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICB2ZXJ0aWNhbDogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5ib29sLFxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgICBtaW5pbXVtVHJhY2tTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsIC8vIGp1c3QgZm9yIGNvbXBhdGliaWxpdHksIHdpbGwgYmUgZGVwZXJlY2F0ZVxuICAgIG1heGltdW1UcmFja1N0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCwgLy8ganVzdCBmb3IgY29tcGF0aWJpbGl0eSwgd2lsbCBiZSBkZXBlcmVjYXRlXG4gICAgaGFuZGxlU3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCwgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0KV0pLFxuICAgIHRyYWNrU3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCwgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0KV0pLFxuICAgIHJhaWxTdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3QsXG4gICAgZG90U3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LFxuICAgIGFjdGl2ZURvdFN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdCxcbiAgICBhdXRvRm9jdXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICBvbkZvY3VzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgb25CbHVyOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNcbiAgfSksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBDb21wb25lbnQuZGVmYXVsdFByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiAncmMtc2xpZGVyJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICBzdGVwOiAxLFxuICAgIG1hcmtzOiB7fSxcbiAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShfcmVmKSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmLmluZGV4LFxuICAgICAgICAgIHJlc3RQcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzWydkZWZhdWx0J10pKF9yZWYsIFsnaW5kZXgnXSk7XG5cbiAgICAgIGRlbGV0ZSByZXN0UHJvcHMuZHJhZ2dpbmc7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX0hhbmRsZTJbJ2RlZmF1bHQnXSwgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgcmVzdFByb3BzLCB7IGtleTogaW5kZXggfSkpO1xuICAgIH0sXG5cbiAgICBvbkJlZm9yZUNoYW5nZTogbm9vcCxcbiAgICBvbkNoYW5nZTogbm9vcCxcbiAgICBvbkFmdGVyQ2hhbmdlOiBub29wLFxuICAgIGluY2x1ZGVkOiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgdHJhY2tTdHlsZTogW3t9XSxcbiAgICBoYW5kbGVTdHlsZTogW3t9XSxcbiAgICByYWlsU3R5bGU6IHt9LFxuICAgIGRvdFN0eWxlOiB7fSxcbiAgICBhY3RpdmVEb3RTdHlsZToge31cbiAgfSksIF90ZW1wO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgQ29udGVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250ZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250ZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29udGVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuZm9yY2VQb3B1cEFsaWduKCk7XG4gICAgfVxuICB9O1xuXG4gIENvbnRlbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb3ZlcmxheSA9IF9wcm9wcy5vdmVybGF5LFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pbm5lcicsIGlkOiBpZCwgcm9sZTogJ3Rvb2x0aXAnIH0sXG4gICAgICB0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJyA/IG92ZXJsYXkoKSA6IG92ZXJsYXlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb250ZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdmVybGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUb29sdGlwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXJyb3dDb250ZW50ID0gX3RoaXMkcHJvcHMuYXJyb3dDb250ZW50LFxuICAgICAgICAgIG92ZXJsYXkgPSBfdGhpcyRwcm9wcy5vdmVybGF5LFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzLmlkO1xuXG4gICAgICByZXR1cm4gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1hcnJvdycsIGtleTogJ2Fycm93JyB9LFxuICAgICAgICBhcnJvd0NvbnRlbnRcbiAgICAgICksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge1xuICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgdHJpZ2dlcjogX3RoaXMudHJpZ2dlcixcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgb3ZlcmxheTogb3ZlcmxheVxuICAgICAgfSldO1xuICAgIH0sIF90aGlzLnNhdmVUcmlnZ2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnRyaWdnZXIgPSBub2RlO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gIH07XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgIHRyaWdnZXIgPSBfcHJvcHMudHJpZ2dlcixcbiAgICAgICAgbW91c2VFbnRlckRlbGF5ID0gX3Byb3BzLm1vdXNlRW50ZXJEZWxheSxcbiAgICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3Byb3BzLm1vdXNlTGVhdmVEZWxheSxcbiAgICAgICAgb3ZlcmxheVN0eWxlID0gX3Byb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IF9wcm9wcy5vblZpc2libGVDaGFuZ2UsXG4gICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IF9wcm9wcy5hZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lID0gX3Byb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICBwbGFjZW1lbnQgPSBfcHJvcHMucGxhY2VtZW50LFxuICAgICAgICBhbGlnbiA9IF9wcm9wcy5hbGlnbixcbiAgICAgICAgZGVzdHJveVRvb2x0aXBPbkhpZGUgPSBfcHJvcHMuZGVzdHJveVRvb2x0aXBPbkhpZGUsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlID0gX3Byb3BzLmRlZmF1bHRWaXNpYmxlLFxuICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gX3Byb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb3ZlcmxheUNsYXNzTmFtZScsICd0cmlnZ2VyJywgJ21vdXNlRW50ZXJEZWxheScsICdtb3VzZUxlYXZlRGVsYXknLCAnb3ZlcmxheVN0eWxlJywgJ3ByZWZpeENscycsICdjaGlsZHJlbicsICdvblZpc2libGVDaGFuZ2UnLCAnYWZ0ZXJWaXNpYmxlQ2hhbmdlJywgJ3RyYW5zaXRpb25OYW1lJywgJ2FuaW1hdGlvbicsICdwbGFjZW1lbnQnLCAnYWxpZ24nLCAnZGVzdHJveVRvb2x0aXBPbkhpZGUnLCAnZGVmYXVsdFZpc2libGUnLCAnZ2V0VG9vbHRpcENvbnRhaW5lciddKTtcblxuICAgIHZhciBleHRyYVByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcyk7XG4gICAgaWYgKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBleHRyYVByb3BzLnBvcHVwVmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUcmlnZ2VyLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBwb3B1cENsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVUcmlnZ2VyLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcG9wdXA6IHRoaXMuZ2V0UG9wdXBFbGVtZW50LFxuICAgICAgICBhY3Rpb246IHRyaWdnZXIsXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgICAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduOiBhbGlnbixcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBhZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgICAgICBwb3B1cEFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgICAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBkZWZhdWx0VmlzaWJsZSxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgICAgbW91c2VMZWF2ZURlbGF5OiBtb3VzZUxlYXZlRGVsYXksXG4gICAgICAgIHBvcHVwU3R5bGU6IG92ZXJsYXlTdHlsZSxcbiAgICAgICAgbW91c2VFbnRlckRlbGF5OiBtb3VzZUVudGVyRGVsYXlcbiAgICAgIH0sIGV4dHJhUHJvcHMpLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xufShDb21wb25lbnQpO1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZnRlclZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvdmVybGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBvdmVybGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdldFRvb2x0aXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBkZXN0cm95VG9vbHRpcE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhcnJvd0NvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLXRvb2x0aXAnLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIGRlc3Ryb3lUb29sdGlwT25IaWRlOiBmYWxzZSxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGFsaWduOiB7fSxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0cmlnZ2VyOiBbJ2hvdmVyJ10sXG4gIGFycm93Q29udGVudDogbnVsbFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eVJlbmRlckJveCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLmhpZGRlbkNsYXNzTmFtZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgfTtcblxuICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJ10pO1xuXG4gICAgaWYgKGhpZGRlbkNsYXNzTmFtZSB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICBpZiAoIXZpc2libGUgJiYgaGlkZGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oQ29tcG9uZW50KTtcblxuTGF6eVJlbmRlckJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCB7IHNhdmVSZWYgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFBvcHVwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3B1cChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFVzZWQgZm9yIHN0cmV0Y2hcbiAgICAgIHN0cmV0Y2hDaGVja2VkOiBmYWxzZSxcbiAgICAgIHRhcmdldFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICB0YXJnZXRIZWlnaHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlUG9wdXBSZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdwb3B1cEluc3RhbmNlJyk7XG4gICAgX3RoaXMuc2F2ZUFsaWduUmVmID0gc2F2ZVJlZi5iaW5kKF90aGlzLCAnYWxpZ25JbnN0YW5jZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBvcHVwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICAvLyBSZWNvcmQgc2l6ZSBpZiBzdHJldGNoIG5lZWRlZFxuXG5cbiAgUG9wdXAucHJvdG90eXBlLmdldFBvcHVwRG9tTm9kZSA9IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5wb3B1cEluc3RhbmNlKTtcbiAgfTtcblxuICAvLyBgdGFyZ2V0YCBvbiBgcmMtYWxpZ25gIGNhbiBhY2NlcHQgYXMgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGJpbmQgZWxlbWVudCBvciBhIHBvaW50LlxuICAvLyByZWY6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLWFsaWduXG5cblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza1RyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gZ2V0TWFza1RyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgcHJvcHMuYW5pbWF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLmdldENsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArICcgJyArIGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHNhdmVQb3B1cFJlZiA9IHRoaXMuc2F2ZVBvcHVwUmVmO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzdHJldGNoQ2hlY2tlZCA9IF9zdGF0ZS5zdHJldGNoQ2hlY2tlZCxcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gX3N0YXRlLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUudGFyZ2V0V2lkdGg7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFsaWduID0gX3Byb3BzLmFsaWduLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ24gPSBfcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzLnN0cmV0Y2gsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRG93biA9IF9wcm9wcy5vbk1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaFN0YXJ0ID0gX3Byb3BzLm9uVG91Y2hTdGFydDtcblxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSh0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSB8fCBnZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICB2YXIgaGlkZGVuQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1oaWRkZW4nO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNpemVTdHlsZSA9IHt9O1xuICAgIGlmIChzdHJldGNoKSB7XG4gICAgICAvLyBTdHJldGNoIHdpdGggdGFyZ2V0XG4gICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCdoZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5IZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbkhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ3dpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS53aWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbldpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS5taW5XaWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxheSBmb3JjZSBhbGlnbiB0byBtYWtlcyB1aSBzbW9vdGhcbiAgICAgIGlmICghc3RyZXRjaENoZWNrZWQpIHtcbiAgICAgICAgc2l6ZVN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5hbGlnbkluc3RhbmNlKSB7XG4gICAgICAgICAgICBfdGhpczIuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3U3R5bGUgPSBfZXh0ZW5kcyh7fSwgc2l6ZVN0eWxlLCBzdHlsZSwgdGhpcy5nZXRaSW5kZXhTdHlsZSgpKTtcblxuICAgIHZhciBwb3B1cElubmVyUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgcmVmOiBzYXZlUG9wdXBSZWYsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICB9O1xuICAgIGlmIChkZXN0cm95UG9wdXBPbkhpZGUpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBbmltYXRlLFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFsaWduLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRBbGlnblRhcmdldCgpLFxuICAgICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgICBvbkFsaWduOiB0aGlzLm9uQWxpZ25cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQb3B1cElubmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICkgOiBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQW5pbWF0ZSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgICBzaG93UHJvcDogJ3hWaXNpYmxlJ1xuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFsaWduLFxuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldEFsaWduVGFyZ2V0KCksXG4gICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlQWxpZ25SZWYsXG4gICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICB4VmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICBjaGlsZHJlblByb3BzOiB7IHZpc2libGU6ICd4VmlzaWJsZScgfSxcbiAgICAgICAgICBkaXNhYmxlZDogIXZpc2libGUsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBoaWRkZW5DbGFzc05hbWVcbiAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRaSW5kZXhTdHlsZSA9IGZ1bmN0aW9uIGdldFpJbmRleFN0eWxlKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza0VsZW1lbnQgPSBmdW5jdGlvbiBnZXRNYXNrRWxlbWVudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrRWxlbWVudCA9IHZvaWQgMDtcbiAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgdmFyIG1hc2tUcmFuc2l0aW9uID0gdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7XG4gICAgICAgIHN0eWxlOiB0aGlzLmdldFpJbmRleFN0eWxlKCksXG4gICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzaycsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrLWhpZGRlbicsXG4gICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGVcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hc2tUcmFuc2l0aW9uKSB7XG4gICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXNrRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuZ2V0TWFza0VsZW1lbnQoKSxcbiAgICAgIHRoaXMuZ2V0UG9wdXBFbGVtZW50KClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cDtcbn0oQ29tcG9uZW50KTtcblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBnZXRSb290RG9tTm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsaWduOiBQcm9wVHlwZXMuYW55LFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHBvaW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2VYOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VZOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIHRoaXMub25BbGlnbiA9IGZ1bmN0aW9uIChwb3B1cERvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBjdXJyZW50QWxpZ25DbGFzc05hbWUgPSBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pO1xuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81NlxuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy83OVxuICAgIGlmIChfdGhpczMuY3VycmVudEFsaWduQ2xhc3NOYW1lICE9PSBjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICAgIF90aGlzMy5jdXJyZW50QWxpZ25DbGFzc05hbWUgPSBjdXJyZW50QWxpZ25DbGFzc05hbWU7XG4gICAgICBwb3B1cERvbU5vZGUuY2xhc3NOYW1lID0gX3RoaXMzLmdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpO1xuICAgIH1cbiAgICBwcm9wcy5vbkFsaWduKHBvcHVwRG9tTm9kZSwgYWxpZ24pO1xuICB9O1xuXG4gIHRoaXMuc2V0U3RyZXRjaFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9wcm9wczIgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIHN0cmV0Y2ggPSBfcHJvcHMyLnN0cmV0Y2gsXG4gICAgICAgIGdldFJvb3REb21Ob2RlID0gX3Byb3BzMi5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgdmlzaWJsZSA9IF9wcm9wczIudmlzaWJsZTtcbiAgICB2YXIgX3N0YXRlMiA9IF90aGlzMy5zdGF0ZSxcbiAgICAgICAgc3RyZXRjaENoZWNrZWQgPSBfc3RhdGUyLnN0cmV0Y2hDaGVja2VkLFxuICAgICAgICB0YXJnZXRIZWlnaHQgPSBfc3RhdGUyLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUyLnRhcmdldFdpZHRoO1xuXG5cbiAgICBpZiAoIXN0cmV0Y2ggfHwgIXZpc2libGUpIHtcbiAgICAgIGlmIChzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBzdHJldGNoQ2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRlbGUgPSBnZXRSb290RG9tTm9kZSgpO1xuICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgdmFyIGhlaWdodCA9ICRlbGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9ICRlbGUub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAodGFyZ2V0SGVpZ2h0ICE9PSBoZWlnaHQgfHwgdGFyZ2V0V2lkdGggIT09IHdpZHRoIHx8ICFzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgc3RyZXRjaENoZWNrZWQ6IHRydWUsXG4gICAgICAgIHRhcmdldEhlaWdodDogaGVpZ2h0LFxuICAgICAgICB0YXJnZXRXaWR0aDogd2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldFRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMy5wcm9wcy5nZXRSb290RG9tTm9kZSgpO1xuICB9O1xuXG4gIHRoaXMuZ2V0QWxpZ25UYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvaW50ID0gX3RoaXMzLnByb3BzLnBvaW50O1xuXG4gICAgaWYgKHBvaW50KSB7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczMuZ2V0VGFyZ2V0RWxlbWVudDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwSW5uZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwSW5uZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwSW5uZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQb3B1cElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIGlmICghcHJvcHMudmlzaWJsZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZURvd246IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF6eVJlbmRlckJveCxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctY29udGVudCcsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cElubmVyO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cElubmVyLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb250YWlucyBmcm9tICdyYy11dGlsL2VzL0RvbS9jb250YWlucyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCBDb250YWluZXJSZW5kZXIgZnJvbSAncmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXInO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyYy11dGlsL2VzL1BvcnRhbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNvbnRleHRNZW51J107XG5cbnZhciBJU19SRUFDVF8xNiA9ICEhY3JlYXRlUG9ydGFsO1xuXG52YXIgY29udGV4dFR5cGVzID0ge1xuICByY1RyaWdnZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb25Qb3B1cE1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgfSlcbn07XG5cbnZhciBUcmlnZ2VyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyaWdnZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gdm9pZCAwO1xuICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICB9XG5cbiAgICBfdGhpcy5wcmV2UG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByY1RyaWdnZXI6IHtcbiAgICAgICAgb25Qb3B1cE1vdXNlRG93bjogdGhpcy5vblBvcHVwTW91c2VEb3duXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgX3RoaXMyWydmaXJlJyArIGhdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30sIHtcbiAgICAgIHBvcHVwVmlzaWJsZTogdGhpcy5zdGF0ZS5wb3B1cFZpc2libGVcbiAgICB9KTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfcmVmKSB7XG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuXG4gICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoXywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UoKSB7XG4gICAgICBpZiAocHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgIHByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKHN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChudWxsLCB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHRoaXMucHJldlBvcHVwVmlzaWJsZSA9IHByZXZTdGF0ZS5wb3B1cFZpc2libGU7XG5cbiAgICAvLyBXZSBtdXN0IGxpc3RlbiB0byBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAsIGVkZ2UgY2FzZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81ODA0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9jYWxlbmRhci9pc3N1ZXMvMjUwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81MFxuICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gYWx3YXlzIGhpZGUgb24gbW9iaWxlXG4gICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCBkb2N1bWVudCBpcyBzY3JvbGxpbmcuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgd2luZG93IGlzIGJsdXIuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnYmx1cicsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIC8vIGZvciB0ZXN0XG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5nZXRQb3B1cEFsaWduID0gZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgIH1cbiAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHBvcHVwVmlzaWJsZSAgICBTaG93IG9yIG5vdCB0aGUgcG9wdXAgZWxlbWVudFxuICAgKiBAcGFyYW0gZXZlbnQgICAgICAgICAgIFN5bnRoZXRpY0V2ZW50LCB1c2VkIGZvciBgcG9pbnRBbGlnbmBcbiAgICovXG4gIFRyaWdnZXIucHJvdG90eXBlLnNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUsIGV2ZW50KSB7XG4gICAgdmFyIGFsaWduUG9pbnQgPSB0aGlzLnByb3BzLmFsaWduUG9pbnQ7XG5cblxuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyByZWNvcmQgdGhlIHBvaW50IHBvc2l0aW9uIHNpbmNlIG1vdXNlRW50ZXJEZWxheSB3aWxsIGRlbGF5IHRoZSBzaG93XG4gICAgaWYgKGFsaWduUG9pbnQgJiYgZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0UG9pbnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5kZWxheVNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5UywgZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHZhciBwb2ludCA9IGV2ZW50ID8geyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9IDogbnVsbDtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIHBvaW50KTtcbiAgICAgICAgX3RoaXMzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyRGVsYXlUaW1lciA9IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyT3V0c2lkZUhhbmRsZXIgPSBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMikge1xuICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNyZWF0ZVR3b0NoYWlucyA9IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICByZXR1cm4gdGhpc1snZmlyZScgKyBldmVudF07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0NsaWNrVG9TaG93ID0gZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wcy5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzQ29udGV4dE1lbnVUb1Nob3cgPSBmdW5jdGlvbiBpc0NvbnRleHRNZW51VG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzMi5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMyLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNDbGlja1RvSGlkZSA9IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMzLmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczMuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc01vdXNlRW50ZXJUb1Nob3cgPSBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM0LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczQuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzTW91c2VMZWF2ZVRvSGlkZSA9IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczUuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNS5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNGb2N1c1RvU2hvdyA9IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM2LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczYuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0JsdXJUb0hpZGUgPSBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM3LmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczcuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZvcmNlUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgdGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZpcmVFdmVudHMgPSBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG4gICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHM4LmNoaWxkcmVuLFxuICAgICAgICBmb3JjZVJlbmRlciA9IF9wcm9wczguZm9yY2VSZW5kZXIsXG4gICAgICAgIGFsaWduUG9pbnQgPSBfcHJvcHM4LmFsaWduUG9pbnQsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczguY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7IGtleTogJ3RyaWdnZXInIH07XG5cbiAgICBpZiAodGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMub25Db250ZXh0TWVudTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ29udGV4dE1lbnUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjtcbiAgICAgIGlmIChhbGlnblBvaW50KSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGQgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICAgIGlmIChjaGlsZHJlbkNsYXNzTmFtZSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5jbGFzc05hbWUgPSBjaGlsZHJlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgdmFyIHRyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuXG4gICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRhaW5lclJlbmRlcixcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgYXV0b01vdW50OiBmYWxzZSxcbiAgICAgICAgICBmb3JjZVJlbmRlcjogZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQ7XG5cbiAgICAgICAgICBfdGhpczQucmVuZGVyQ29tcG9uZW50ID0gcmVuZGVyQ29tcG9uZW50O1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBwb3J0YWwgPSB2b2lkIDA7XG4gICAgLy8gcHJldmVudCB1bm1vdW50aW5nIGFmdGVyIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAocG9wdXBWaXNpYmxlIHx8IHRoaXMuX2NvbXBvbmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUG9ydGFsLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAncG9ydGFsJyxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIGRpZFVwZGF0ZTogdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RyaWdnZXIsIHBvcnRhbF07XG4gIH07XG5cbiAgcmV0dXJuIFRyaWdnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBoaWRlQWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmFueSxcbiAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvcHVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwUGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidWlsdGluUGxhY2VtZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBwb3B1cEFuaW1hdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9jdXNEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgYmx1ckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldERvY3VtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9yY2VSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Qb3B1cEFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9wdXBBbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBtYXNrQW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnblBvaW50OiBQcm9wVHlwZXMuYm9vbCAvLyBNYXliZSB3ZSBjYW4gc3VwcG9ydCB1c2VyIHBhc3MgcG9zaXRpb24gaW4gdGhlIGZ1dHVyZVxufTtcblRyaWdnZXIuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuVHJpZ2dlci5jaGlsZENvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgb25Qb3B1cEFsaWduOiBub29wLFxuICBwb3B1cENsYXNzTmFtZTogJycsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGZvY3VzRGVsYXk6IDAsXG4gIGJsdXJEZWxheTogMC4xNSxcbiAgcG9wdXBTdHlsZToge30sXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gIHBvcHVwQWxpZ246IHt9LFxuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgbWFzazogZmFsc2UsXG4gIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgYWN0aW9uOiBbXSxcbiAgc2hvd0FjdGlvbjogW10sXG4gIGhpZGVBY3Rpb246IFtdXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbW91c2VFbnRlckRlbGF5ID0gX3RoaXM1LnByb3BzLm1vdXNlRW50ZXJEZWxheTtcblxuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcbiAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgbW91c2VFbnRlckRlbGF5LCBtb3VzZUVudGVyRGVsYXkgPyBudWxsIDogZSk7XG4gIH07XG5cbiAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uTW91c2VNb3ZlJywgZSk7XG4gICAgX3RoaXM1LnNldFBvaW50KGUpO1xuICB9O1xuXG4gIHRoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzNS5jbGVhckRlbGF5VGltZXIoKTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvcHVsbC8xM1xuICAgIC8vIHJlYWN0IGJ1Zz9cbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiBfdGhpczUuX2NvbXBvbmVudCAmJiBfdGhpczUuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUgJiYgY29udGFpbnMoX3RoaXM1Ll9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCksIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7XG4gICAgLy8gaW5jYXNlIGZvY3VzaW4gYW5kIGZvY3Vzb3V0XG4gICAgX3RoaXM1LmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmIChfdGhpczUuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICBfdGhpczUuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIF90aGlzNS5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBfdGhpczUucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG4gICAgX3RoaXM1LnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcbiAgICBfdGhpczUuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKF90aGlzNS5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMuYmx1ckRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ29udGV4dE1lbnUnLCBlKTtcbiAgICBfdGhpczUuc2V0UG9wdXBWaXNpYmxlKHRydWUsIGUpO1xuICB9O1xuXG4gIHRoaXMub25Db250ZXh0TWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczUuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICBfdGhpczUuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7XG4gICAgLy8gZm9jdXMgd2lsbCB0cmlnZ2VyIGNsaWNrXG4gICAgaWYgKF90aGlzNS5mb2N1c1RpbWUpIHtcbiAgICAgIHZhciBwcmVUaW1lID0gdm9pZCAwO1xuICAgICAgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUgJiYgX3RoaXM1LnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4oX3RoaXM1LnByZUNsaWNrVGltZSwgX3RoaXM1LnByZVRvdWNoVGltZSk7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVDbGlja1RpbWU7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVUb3VjaFRpbWU7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIF90aGlzNS5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXM1LmZvY3VzVGltZSA9IDA7XG4gICAgfVxuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSAwO1xuICAgIF90aGlzNS5wcmVUb3VjaFRpbWUgPSAwO1xuICAgIGlmIChldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdmFyIG5leHRWaXNpYmxlID0gIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgaWYgKF90aGlzNS5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIF90aGlzNS5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIF90aGlzNS5zZXRQb3B1cFZpc2libGUoIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29udGV4dCRyY1RyaWdnZXIgPSBfdGhpczUuY29udGV4dC5yY1RyaWdnZXIsXG4gICAgICAgIHJjVHJpZ2dlciA9IF9jb250ZXh0JHJjVHJpZ2dlciA9PT0gdW5kZWZpbmVkID8ge30gOiBfY29udGV4dCRyY1RyaWdnZXI7XG5cbiAgICBfdGhpczUuaGFzUG9wdXBNb3VzZURvd24gPSB0cnVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KF90aGlzNS5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBfdGhpczUubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmhhc1BvcHVwTW91c2VEb3duID0gZmFsc2U7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAocmNUcmlnZ2VyLm9uUG9wdXBNb3VzZURvd24pIHtcbiAgICAgIHJjVHJpZ2dlci5vblBvcHVwTW91c2VEb3duLmFwcGx5KHJjVHJpZ2dlciwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM1LnByb3BzLm1hc2sgJiYgIV90aGlzNS5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciByb290ID0gZmluZERPTU5vZGUoX3RoaXM1KTtcbiAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIV90aGlzNS5oYXNQb3B1cE1vdXNlRG93bikge1xuICAgICAgX3RoaXM1LmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0Um9vdERvbU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZpbmRET01Ob2RlKF90aGlzNSk7XG4gIH07XG5cbiAgdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IGZ1bmN0aW9uIChhbGlnbikge1xuICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICB2YXIgX3Byb3BzOSA9IF90aGlzNS5wcm9wcyxcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfcHJvcHM5LnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF9wcm9wczkuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczkucHJlZml4Q2xzLFxuICAgICAgICBhbGlnblBvaW50ID0gX3Byb3BzOS5hbGlnblBvaW50LFxuICAgICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IF9wcm9wczkuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ247XG5cbiAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGFsaWduUG9pbnQpKTtcbiAgICB9XG4gICAgaWYgKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICBjbGFzc05hbWUucHVzaChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgfTtcblxuICB0aGlzLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzMTAgPSBfdGhpczUucHJvcHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczEwLnByZWZpeENscyxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3Byb3BzMTAuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF9wcm9wczEwLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMxMC5hY3Rpb24sXG4gICAgICAgIG9uUG9wdXBBbGlnbiA9IF9wcm9wczEwLm9uUG9wdXBBbGlnbixcbiAgICAgICAgcG9wdXBBbmltYXRpb24gPSBfcHJvcHMxMC5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwU3R5bGUgPSBfcHJvcHMxMC5wb3B1cFN0eWxlLFxuICAgICAgICBtYXNrID0gX3Byb3BzMTAubWFzayxcbiAgICAgICAgbWFza0FuaW1hdGlvbiA9IF9wcm9wczEwLm1hc2tBbmltYXRpb24sXG4gICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgekluZGV4ID0gX3Byb3BzMTAuekluZGV4LFxuICAgICAgICBwb3B1cCA9IF9wcm9wczEwLnBvcHVwLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzMTAuc3RyZXRjaCxcbiAgICAgICAgYWxpZ25Qb2ludCA9IF9wcm9wczEwLmFsaWduUG9pbnQ7XG4gICAgdmFyIF9zdGF0ZSA9IF90aGlzNS5zdGF0ZSxcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gX3N0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgcG9pbnQgPSBfc3RhdGUucG9pbnQ7XG5cblxuICAgIHZhciBhbGlnbiA9IF90aGlzNS5nZXRQb3B1cEFsaWduKCk7XG5cbiAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuICAgIGlmIChfdGhpczUuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gX3RoaXM1Lm9uUG9wdXBNb3VzZUVudGVyO1xuICAgIH1cbiAgICBpZiAoX3RoaXM1LmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IF90aGlzNS5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICB9XG5cbiAgICBtb3VzZVByb3BzLm9uTW91c2VEb3duID0gX3RoaXM1Lm9uUG9wdXBNb3VzZURvd247XG4gICAgbW91c2VQcm9wcy5vblRvdWNoU3RhcnQgPSBfdGhpczUub25Qb3B1cE1vdXNlRG93bjtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUG9wdXAsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgdmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICBwb2ludDogYWxpZ25Qb2ludCAmJiBwb2ludCxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgb25BbGlnbjogb25Qb3B1cEFsaWduLFxuICAgICAgICBhbmltYXRpb246IHBvcHVwQW5pbWF0aW9uLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IF90aGlzNS5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICBzdHJldGNoOiBzdHJldGNoLFxuICAgICAgICBnZXRSb290RG9tTm9kZTogX3RoaXM1LmdldFJvb3REb21Ob2RlLFxuICAgICAgICBzdHlsZTogcG9wdXBTdHlsZSxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICBtYXNrQW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uLFxuICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgcmVmOiBfdGhpczUuc2F2ZVBvcHVwXG4gICAgICB9KSxcbiAgICAgIHR5cGVvZiBwb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHBvcHVwKCkgOiBwb3B1cFxuICAgICk7XG4gIH07XG5cbiAgdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuXG4gICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gTWFrZSBzdXJlIGRlZmF1bHQgcG9wdXAgY29udGFpbmVyIHdpbGwgbmV2ZXIgY2F1c2Ugc2Nyb2xsYmFyIGFwcGVhcmluZ1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNDFcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIG1vdW50Tm9kZSA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyID8gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIoZmluZERPTU5vZGUoX3RoaXM1KSkgOiBwcm9wcy5nZXREb2N1bWVudCgpLmJvZHk7XG4gICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gIH07XG5cbiAgdGhpcy5zZXRQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBhbGlnblBvaW50ID0gX3RoaXM1LnByb3BzLmFsaWduUG9pbnQ7XG5cbiAgICBpZiAoIWFsaWduUG9pbnQgfHwgIXBvaW50KSByZXR1cm47XG5cbiAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgcG9pbnQ6IHtcbiAgICAgICAgcGFnZVg6IHBvaW50LnBhZ2VYLFxuICAgICAgICBwYWdlWTogcG9pbnQucGFnZVlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXM1LnByZXZQb3B1cFZpc2libGUgIT09IF90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIF90aGlzNS5wcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShfdGhpczUuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zYXZlUG9wdXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIF90aGlzNS5fY29tcG9uZW50ID0gbm9kZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBDb250YWluZXJSZW5kZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyUmVuZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXJSZW5kZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lclJlbmRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gQ29udGFpbmVyUmVuZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udGFpbmVyUmVuZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWFkeSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzLnZpc2libGUsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50ID0gX3RoaXMkcHJvcHMuZ2V0Q29tcG9uZW50LFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzJHByb3BzLnBhcmVudDtcblxuICAgICAgaWYgKHZpc2libGUgfHwgcGFyZW50Ll9jb21wb25lbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihwYXJlbnQsIGdldENvbXBvbmVudChwcm9wcyksIF90aGlzLmNvbnRhaW5lciwgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICByZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGFpbmVyUmVuZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudDogdGhpcy5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdGhpcy5yZW1vdmVDb250YWluZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXJSZW5kZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRhaW5lclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGF1dG9Nb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9EZXN0cm95OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvcmNlUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBQcm9wVHlwZXMuYW55LFxuICBnZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Db250YWluZXJSZW5kZXIuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvTW91bnQ6IHRydWUsXG4gIGF1dG9EZXN0cm95OiB0cnVlLFxuICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJSZW5kZXI7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBQb3J0YWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jcmVhdGVDb250YWluZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgZGlkVXBkYXRlID0gdGhpcy5wcm9wcy5kaWRVcGRhdGU7XG5cbiAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgZGlkVXBkYXRlKHByZXZQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ29udGFpbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVDb250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaWRVcGRhdGU6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyJdLCJzb3VyY2VSb290IjoiIn0=