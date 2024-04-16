"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatharImage = void 0;
var _core = require("@mantine/core");
const AvatharImage = props => {
  const {
    AvathatarimageUrl,
    name,
    classNames,
    width,
    height,
    radius
  } = props;
  return /*#__PURE__*/React.createElement(_core.Image, {
    src: AvathatarimageUrl,
    alt: name,
    className: "".concat(classNames),
    w: width,
    h: height,
    radius: radius
  });
};
exports.AvatharImage = AvatharImage;