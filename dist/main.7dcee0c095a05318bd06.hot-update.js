webpackHotUpdate("main",{

/***/ "./src/components/Tracker/Tracker.js":
/*!*******************************************!*\
  !*** ./src/components/Tracker/Tracker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/e/Dropbox/Dev/github/skylo/src/components/Tracker/Tracker.js: Unexpected token, expected \",\" (34:75)\n\n\u001b[0m \u001b[90m 32 | \u001b[39m  handleSliderChange(value) {\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m  \t\u001b[36mconst\u001b[39m currentDataPoint \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mdata\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 | \u001b[39m  \t\t\u001b[33m.\u001b[39mmap(d \u001b[33m=>\u001b[39m \u001b[33mObject\u001b[39m\u001b[33m.\u001b[39massign({}\u001b[33m,\u001b[39m d\u001b[33m,\u001b[39m { timeDiff\u001b[33m:\u001b[39m\u001b[33mMath\u001b[39m\u001b[33m.\u001b[39mabs(d\u001b[33m.\u001b[39mtimestamp \u001b[33m-\u001b[39m value)))\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m  \t\t                                                                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 | \u001b[39m  \t\t\u001b[33m.\u001b[39mreduce((p\u001b[33m,\u001b[39mc)\u001b[33m=>\u001b[39mc\u001b[33m.\u001b[39mtimeDiff\u001b[33m<\u001b[39m\u001b[33mp\u001b[39m\u001b[33m.\u001b[39mtimeDiff\u001b[33m?\u001b[39mc\u001b[33m:\u001b[39mp\u001b[33m,\u001b[39m\u001b[33mInfinity\u001b[39m) \u001b[33m||\u001b[39m { speed\u001b[33m:\u001b[39m\u001b[33m-\u001b[39m\u001b[35m1\u001b[39m\u001b[33m,\u001b[39m rssi\u001b[33m:\u001b[39m \u001b[33m-\u001b[39m\u001b[35m1\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState( \u001b[33mObject\u001b[39m\u001b[33m.\u001b[39massign({}\u001b[33m,\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m,\u001b[39m { currentDataPoint\u001b[33m,\u001b[39m currentTimestamp\u001b[33m:\u001b[39mvalue }) )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m  }\u001b[0m\n    at _class.raise (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3939:15)\n    at _class.unexpected (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5248:16)\n    at _class.expect (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5236:28)\n    at _class.parseObj (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6644:14)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6294:21)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3635:52)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5924:21)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseExprListItem (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:7003:18)\n    at _class.parseCallExpressionArguments (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6124:22)\n    at _class.parseSubscript (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6029:32)\n    at _class.parseSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5944:19)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5934:17)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseFunctionBody (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6925:24)\n    at _class.parseArrowExpression (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6885:10)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:6231:18)\n    at _class.parseExprAtom (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:3635:52)\n    at _class.parseExprSubscripts (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5924:21)\n    at _class.parseMaybeUnary (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5903:21)\n    at _class.parseExprOps (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5812:21)\n    at _class.parseMaybeConditional (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5784:21)\n    at _class.parseMaybeAssign (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:5731:21)\n    at _class.parseExprListItem (/mnt/e/Dropbox/Dev/github/skylo/node_modules/@babel/parser/lib/index.js:7003:18)");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLjdkY2VlMGMwOTVhMDUzMThiZDA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VSb290IjoiIn0=