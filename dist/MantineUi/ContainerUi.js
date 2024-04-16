"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Containerui = void 0;
var _core = require("@mantine/core");
const Containerui = props => {
  const {
    children,
    sizeContainer,
    containerClass,
    height
  } = props;
  return /*#__PURE__*/React.createElement(_core.Container, {
    size: sizeContainer,
    className: containerClass,
    p: 0,
    h: height
  }, children);
};
exports.Containerui = Containerui;