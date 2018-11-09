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
    arr[i] = fn(i > 0 ? arr[i - 1] : null, arr[i]);
  }

  return arr;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvR2VvRGF0YS5qcyJdLCJuYW1lcyI6WyJnZXRMYXRlc3QiLCJ1cmwiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwidGltZXN0YW1wIiwiZW5yaWNoZWQiLCJtYXBXaXRoUHJldmlvdXMiLCJwcmV2IiwiY3VyIiwic3BlZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJhY2NlbGVyYXRpb24iLCJwYXJzZWQiLCJwYXJzZURhdGEiLCJtYXhUaW1lc3RhbXAiLCJtYXAiLCJkIiwicmVkdWNlIiwicCIsImMiLCJJbmZpbml0eSIsIm1pblRpbWVzdGFtcCIsImFyciIsImZuIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O1NBRWVBLFM7Ozs7Ozs7MEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ09DLGVBRFAsR0FDYSxVQURiO0FBQUE7QUFBQSxtQkFFc0JDLEtBQUssQ0FBQ0QsR0FBRCxDQUYzQjs7QUFBQTtBQUVPRSxrQkFGUDtBQUFBO0FBQUEsbUJBR29CQSxNQUFNLENBQUNDLElBQVAsRUFIcEI7O0FBQUE7QUFHT0MsZ0JBSFA7QUFJT0Msa0JBSlAsR0FJZ0JELElBQUksQ0FBQ0UsSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLHFCQUFTRCxDQUFDLENBQUNFLFNBQUYsR0FBY0QsQ0FBQyxDQUFDQyxTQUF6QjtBQUFBLGFBQVYsQ0FKaEI7QUFLT0Msb0JBTFAsR0FLa0JDLGVBQWUsQ0FBQ04sTUFBRCxFQUFTLFVBQUNPLElBQUQsRUFBd0M7QUFBQSxrQkFBakNDLEdBQWlDLHVFQUE3QjtBQUFFQyxxQkFBSyxFQUFDLENBQVI7QUFBV0wseUJBQVMsRUFBQztBQUFyQixlQUE2QjtBQUNoRixxQkFBT00sTUFBTSxDQUFDQyxNQUFQLENBQWNILEdBQWQsRUFBbUI7QUFDekJJLDRCQUFZLEVBQUUsQ0FBQ0osR0FBRyxDQUFDQyxLQUFKLEdBQVlGLElBQUksQ0FBQ0UsS0FBbEIsS0FBNEJELEdBQUcsQ0FBQ0osU0FBSixHQUFnQkcsSUFBSSxDQUFDSCxTQUFqRDtBQURXLGVBQW5CLENBQVA7QUFHQSxhQUorQixDQUxqQztBQVdPUyxrQkFYUCxHQVdnQkMsU0FBUyxDQUFDZixJQUFELENBWHpCO0FBQUEsNkNBYVFXLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JOLFFBQWxCLEVBQTRCO0FBQUVOLGtCQUFJLEVBQUpBO0FBQUYsYUFBNUIsQ0FiUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBZ0JBLFNBQVNlLFNBQVQsQ0FBbUJmLElBQW5CLEVBQXlCO0FBQ3hCLE1BQU1nQixZQUFZLEdBQUdoQixJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2IsU0FBTjtBQUFBLEdBQVYsRUFBMkJjLE1BQTNCLENBQWtDLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLFdBQU9BLENBQUMsR0FBQ0QsQ0FBRixHQUFJQyxDQUFKLEdBQU1ELENBQWI7QUFBQSxHQUFsQyxFQUFpRCxDQUFDRSxRQUFsRCxDQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBR3ZCLElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDYixTQUFOO0FBQUEsR0FBVixFQUEyQmMsTUFBM0IsQ0FBa0MsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsV0FBT0EsQ0FBQyxHQUFDRCxDQUFGLEdBQUlDLENBQUosR0FBTUQsQ0FBYjtBQUFBLEdBQWxDLEVBQWlERSxRQUFqRCxDQUFyQjtBQUVBLFNBQU87QUFDTk4sZ0JBQVksRUFBWkEsWUFETTtBQUVOTyxnQkFBWSxFQUFaQTtBQUZNLEdBQVA7QUFJQTs7QUFFRCxTQUFTaEIsZUFBVCxDQUF5QmlCLEdBQXpCLEVBQThCQyxFQUE5QixFQUFrQztBQUNqQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDcENGLE9BQUcsQ0FBQ0UsQ0FBRCxDQUFILEdBQVNELEVBQUUsQ0FBQ0MsQ0FBQyxHQUFDLENBQUYsR0FBTUYsR0FBRyxDQUFDRSxDQUFDLEdBQUMsQ0FBSCxDQUFULEdBQWlCLElBQWxCLEVBQXdCRixHQUFHLENBQUNFLENBQUQsQ0FBM0IsQ0FBWDtBQUNBOztBQUNELFNBQU9GLEdBQVA7QUFDQSxDIiwiZmlsZSI6Im1haW4uY2I5NDM2NzZkNjE3MGFiNWNiODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGdldExhdGVzdCwgcGFyc2VEYXRhIH07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhdGVzdCgpIHtcblx0Y29uc3QgdXJsID0gJy9hcGkvZ2VvJztcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG5cdGNvbnN0IHNvcnRlZCA9IGRhdGEuc29ydCgoYSxiKSA9PiBhLnRpbWVzdGFtcCAtIGIudGltZXN0YW1wKTtcblx0Y29uc3QgZW5yaWNoZWQgPSBtYXBXaXRoUHJldmlvdXMoc29ydGVkLCAocHJldiwgY3VyPXsgc3BlZWQ6MCwgdGltZXN0YW1wOjAgfSkgPT4ge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKGN1ciwge1xuXHRcdFx0YWNjZWxlcmF0aW9uOiAoY3VyLnNwZWVkIC0gcHJldi5zcGVlZCkgLyAoY3VyLnRpbWVzdGFtcCAtIHByZXYudGltZXN0YW1wKVxuXHRcdH0pO1xuXHR9KTtcblxuXHRjb25zdCBwYXJzZWQgPSBwYXJzZURhdGEoZGF0YSk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVucmljaGVkLCB7IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG5cdGNvbnN0IG1heFRpbWVzdGFtcCA9IGRhdGEubWFwKGQgPT4gZC50aW1lc3RhbXApLnJlZHVjZSgocCxjKT0+Yz5wP2M6cCwtSW5maW5pdHkpO1xuXHRjb25zdCBtaW5UaW1lc3RhbXAgPSBkYXRhLm1hcChkID0+IGQudGltZXN0YW1wKS5yZWR1Y2UoKHAsYyk9PmM8cD9jOnAsSW5maW5pdHkpO1xuXG5cdHJldHVybiB7XG5cdFx0bWF4VGltZXN0YW1wLFxuXHRcdG1pblRpbWVzdGFtcCxcblx0fVxufVxuXG5mdW5jdGlvbiBtYXBXaXRoUHJldmlvdXMoYXJyLCBmbikge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGFycltpXSA9IGZuKGk+MCA/IGFycltpLTFdIDogbnVsbCwgYXJyW2ldKTtcblx0fVxuXHRyZXR1cm4gYXJyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=