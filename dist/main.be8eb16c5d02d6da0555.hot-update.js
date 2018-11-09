webpackHotUpdate("main",{

/***/ "./node_modules/core-js/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/modules/_array-reduce.js":
false,

/***/ "./node_modules/core-js/modules/_classof.js":
false,

/***/ "./node_modules/core-js/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/modules/_perform.js":
false,

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/modules/_task.js":
false,

/***/ "./node_modules/core-js/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
false,

/***/ "./node_modules/core-js/modules/es6.promise.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./src/services/GeoData.js":
/*!*********************************!*\
  !*** ./src/services/GeoData.js ***!
  \*********************************/
/*! exports provided: getLatest, parseData */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/e/Dropbox/Dev/github/skylo/src/services/GeoData.js: Unexpected token (9:37)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\t\u001b[36mconst\u001b[39m parsed \u001b[33m=\u001b[39m parseData(data)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m\t\u001b[36mconst\u001b[39m sorted \u001b[33m=\u001b[39m parsed\u001b[33m.\u001b[39msort((a\u001b[33m,\u001b[39mb) \u001b[33m=>\u001b[39m \u001b[36mreturn\u001b[39m a\u001b[33m.\u001b[39mtimestamp \u001b[33m-\u001b[39m b\u001b[33m.\u001b[39mtimestamp)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m\t\u001b[36mconst\u001b[39m enriched \u001b[33m=\u001b[39m mapWithPrevious(sorted\u001b[33m,\u001b[39m (prev\u001b[33m,\u001b[39m cur\u001b[33m=\u001b[39m{ speed\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m\u001b[33m,\u001b[39m timestamp\u001b[33m:\u001b[39m\u001b[35m0\u001b[39m }) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m \u001b[33mObject\u001b[39m\u001b[33m.\u001b[39massign(cur\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\t\t\tacceleration\u001b[33m:\u001b[39m (cur\u001b[33m.\u001b[39mspeed \u001b[33m-\u001b[39m prev\u001b[33m.\u001b[39mspeed) \u001b[33m/\u001b[39m (cur\u001b[33m.\u001b[39mtimestamp \u001b[33m-\u001b[39m prev\u001b[33m.\u001b[39mtimestamp)\u001b[0m\n    at _class.raise (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3939:15)\n    at _class.unexpected (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5248:16)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6328:20)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3635:52)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5924:21)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseFunctionBody (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6925:24)\n    at _class.parseArrowExpression (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6885:10)\n    at _class.parseParenAndDistinguishExpression (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6501:12)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6284:21)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3635:52)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5924:21)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseExprListItem (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:7003:18)\n    at _class.parseCallExpressionArguments (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6124:22)\n    at _class.parseSubscript (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6029:32)\n    at _class.parseSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5944:19)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5934:17)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseVar (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:7776:26)\n    at _class.parseVarStatement (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:7606:10)");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmJlOGViMTZjNWQwMmQ2ZGEwNTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VSb290IjoiIn0=