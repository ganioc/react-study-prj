"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sum = _interopRequireDefault(require("./sum"));

// ES6 import
const square = n => n * n;

console.log("square: ", square(2));
console.log("add: ", (0, _sum.default)(3, 4));
console.log('end of index.js');