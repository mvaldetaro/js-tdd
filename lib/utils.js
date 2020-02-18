"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = exports.toJSON = void 0;

var toJSON = function toJSON(pData) {
  return pData.json();
};

exports.toJSON = toJSON;

var toString = function toString(pData) {
  return JSON.stringify(pData);
};

exports.toString = toString;