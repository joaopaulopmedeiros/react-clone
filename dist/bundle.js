"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createElement = _interopRequireDefault(require("./dom/createElement"));

var _render = _interopRequireDefault(require("./dom/render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = ReactClone = {
  createElement: _createElement["default"],
  render: _render["default"]
};

exports["default"] = _default;
