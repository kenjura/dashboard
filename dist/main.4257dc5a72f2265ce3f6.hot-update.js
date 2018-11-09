webpackHotUpdate("main",{

/***/ "./src/services/GeoData.js":
/*!*********************************!*\
  !*** ./src/services/GeoData.js ***!
  \*********************************/
/*! exports provided: getLatest, parseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatest", function() { return getLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseData", function() { return parseData; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_5__);







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function getLatest() {
  return _getLatest.apply(this, arguments);
}

function _getLatest() {
  _getLatest = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var url, result, data, sorted, enriched, parsed;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/api/geo';
            _context.next = 3;
            return fetch(url);

          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();

          case 6:
            data = _context.sent;
            sorted = data.sort(function (a, b) {
              return a.timestamp - b.timestamp;
            });
            enriched = mapWithPrevious(sorted, function (prev) {
              var cur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                speed: 0,
                timestamp: 0
              };
              return Object.assign(cur, {
                acceleration: (cur.speed - prev.speed) / (cur.timestamp - prev.timestamp)
              });
            });
            parsed = parseData(data);
            return _context.abrupt("return", Object.assign({}, enriched, {
              data: data
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getLatest.apply(this, arguments);
}

function parseData(data) {
  var maxTimestamp = data.map(function (d) {
    return d.timestamp;
  }).reduce(function (p, c) {
    return c > p ? c : p;
  }, -Infinity);
  var minTimestamp = data.map(function (d) {
    return d.timestamp;
  }).reduce(function (p, c) {
    return c < p ? c : p;
  }, Infinity);
  return {
    maxTimestamp: maxTimestamp,
    minTimestamp: minTimestamp
  };
}

function mapWithPrevious(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i > 0 ? arr[i - 1] : null);
  }

  return arr;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvR2VvRGF0YS5qcyJdLCJuYW1lcyI6WyJnZXRMYXRlc3QiLCJ1cmwiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwidGltZXN0YW1wIiwiZW5yaWNoZWQiLCJtYXBXaXRoUHJldmlvdXMiLCJwcmV2IiwiY3VyIiwic3BlZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJhY2NlbGVyYXRpb24iLCJwYXJzZWQiLCJwYXJzZURhdGEiLCJtYXhUaW1lc3RhbXAiLCJtYXAiLCJkIiwicmVkdWNlIiwicCIsImMiLCJJbmZpbml0eSIsIm1pblRpbWVzdGFtcCIsImFyciIsImZuIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBRWVBLFM7Ozs7Ozs7MEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ09DLGVBRFAsR0FDYSxVQURiO0FBQUE7QUFBQSxtQkFFc0JDLEtBQUssQ0FBQ0QsR0FBRCxDQUYzQjs7QUFBQTtBQUVPRSxrQkFGUDtBQUFBO0FBQUEsbUJBR29CQSxNQUFNLENBQUNDLElBQVAsRUFIcEI7O0FBQUE7QUFHT0MsZ0JBSFA7QUFJT0Msa0JBSlAsR0FJZ0JELElBQUksQ0FBQ0UsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLHFCQUFTRCxDQUFDLENBQUNFLFNBQUYsR0FBY0QsQ0FBQyxDQUFDQyxTQUF6QjtBQUFBLGFBQVYsQ0FKaEI7QUFLT0Msb0JBTFAsR0FLa0JDLGVBQWUsQ0FBQ04sTUFBRCxFQUFTLFVBQUNPLElBQUQsRUFBd0M7QUFBQSxrQkFBakNDLEdBQWlDLHVFQUE3QjtBQUFFQyxxQkFBSyxFQUFDLENBQVI7QUFBV0wseUJBQVMsRUFBQztBQUFyQixlQUE2QjtBQUNoRixxQkFBT00sTUFBTSxDQUFDQyxNQUFQLENBQWNILEdBQWQsRUFBbUI7QUFDekJJLDRCQUFZLEVBQUUsQ0FBQ0osR0FBRyxDQUFDQyxLQUFKLEdBQVlGLElBQUksQ0FBQ0UsS0FBbEIsS0FBNEJELEdBQUcsQ0FBQ0osU0FBSixHQUFnQkcsSUFBSSxDQUFDSCxTQUFqRDtBQURXLGVBQW5CLENBQVA7QUFHQSxhQUorQixDQUxqQztBQVdPUyxrQkFYUCxHQVdnQkMsU0FBUyxDQUFDZixJQUFELENBWHpCO0FBQUEsNkNBYVFXLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JOLFFBQWxCLEVBQTRCO0FBQUVOLGtCQUFJLEVBQUpBO0FBQUYsYUFBNUIsQ0FiUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JBLFNBQVNlLFNBQVQsQ0FBbUJmLElBQW5CLEVBQXlCO0FBQ3hCLE1BQU1nQixZQUFZLEdBQUdoQixJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2IsU0FBTjtBQUFBLEdBQVYsRUFBMkJjLE1BQTNCLENBQWtDLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBQU9BLENBQUMsR0FBQ0QsQ0FBRixHQUFJQyxDQUFKLEdBQU1ELENBQWI7QUFBQSxHQUFsQyxFQUFpRCxDQUFDRSxRQUFsRCxDQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBR3ZCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDYixTQUFOO0FBQUEsR0FBVixFQUEyQmMsTUFBM0IsQ0FBa0MsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBT0EsQ0FBQyxHQUFDRCxDQUFGLEdBQUlDLENBQUosR0FBTUQsQ0FBYjtBQUFBLEdBQWxDLEVBQWlERSxRQUFqRCxDQUFyQjtBQUVBLFNBQU87QUFDTk4sZ0JBQVksRUFBWkEsWUFETTtBQUVOTyxnQkFBWSxFQUFaQTtBQUZNLEdBQVA7QUFJQTs7QUFFRCxTQUFTaEIsZUFBVCxDQUF5QmlCLEdBQXpCLEVBQThCQyxFQUE5QixFQUFrQztBQUNqQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDcENGLE9BQUcsQ0FBQ0UsQ0FBRCxDQUFILEdBQVNELEVBQUUsQ0FBQ0QsR0FBRyxDQUFDRSxDQUFELENBQUosRUFBU0EsQ0FBQyxHQUFDLENBQUYsR0FBTUYsR0FBRyxDQUFDRSxDQUFDLEdBQUMsQ0FBSCxDQUFULEdBQWlCLElBQTFCLENBQVg7QUFDQTs7QUFDRCxTQUFPRixHQUFQO0FBQ0EsQyIsImZpbGUiOiJtYWluLjQyNTdkYzVhNzJmMjI2NWNlM2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBnZXRMYXRlc3QsIHBhcnNlRGF0YSB9O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMYXRlc3QoKSB7XG5cdGNvbnN0IHVybCA9ICcvYXBpL2dlbyc7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCk7XG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuXHRjb25zdCBzb3J0ZWQgPSBkYXRhLnNvcnQoKGEsYikgPT4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcCk7XG5cdGNvbnN0IGVucmljaGVkID0gbWFwV2l0aFByZXZpb3VzKHNvcnRlZCwgKHByZXYsIGN1cj17IHNwZWVkOjAsIHRpbWVzdGFtcDowIH0pID0+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihjdXIsIHtcblx0XHRcdGFjY2VsZXJhdGlvbjogKGN1ci5zcGVlZCAtIHByZXYuc3BlZWQpIC8gKGN1ci50aW1lc3RhbXAgLSBwcmV2LnRpbWVzdGFtcClcblx0XHR9KTtcblx0fSk7XG5cblx0Y29uc3QgcGFyc2VkID0gcGFyc2VEYXRhKGRhdGEpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlbnJpY2hlZCwgeyBkYXRhIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGEoZGF0YSkge1xuXHRjb25zdCBtYXhUaW1lc3RhbXAgPSBkYXRhLm1hcChkID0+IGQudGltZXN0YW1wKS5yZWR1Y2UoKHAsYyk9PmM+cD9jOnAsLUluZmluaXR5KTtcblx0Y29uc3QgbWluVGltZXN0YW1wID0gZGF0YS5tYXAoZCA9PiBkLnRpbWVzdGFtcCkucmVkdWNlKChwLGMpPT5jPHA/YzpwLEluZmluaXR5KTtcblxuXHRyZXR1cm4ge1xuXHRcdG1heFRpbWVzdGFtcCxcblx0XHRtaW5UaW1lc3RhbXAsXG5cdH1cbn1cblxuZnVuY3Rpb24gbWFwV2l0aFByZXZpb3VzKGFyciwgZm4pIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRhcnJbaV0gPSBmbihhcnJbaV0sIGk+MCA/IGFycltpLTFdIDogbnVsbCk7XG5cdH1cblx0cmV0dXJuIGFycjtcbn0iXSwic291cmNlUm9vdCI6IiJ9