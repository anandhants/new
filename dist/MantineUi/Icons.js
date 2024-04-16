"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("@mantine/core");
var _IconsUtility = require("../Settings/IconsUtility");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { Avatar, Indicator } from "@mantine/core";

const Icons = props => {
  var _IconCall$find;
  // const { IconName, onClick, classNames, variant, size, color, stroke, avtharClassName, indicationShow } = props;
  const {
    IconName,
    onClick,
    classNames,
    variant,
    size,
    color,
    stroke,
    avtharClassName
  } = props;
  const IconComponent = (_IconCall$find = _IconsUtility.IconCall.find(el => el.name === IconName)) === null || _IconCall$find === void 0 ? void 0 : _IconCall$find.component;
  // const IndicationIcon = IconCall.find((el) => el.name === IconName)?.indication;
  // If IconComponent is not found, return null or render a fallback icon
  if (!IconComponent) {
    // console.error(`Icon component "${IconName}" not found.`);
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_core.Avatar, {
    variant: variant,
    onClick: onClick,
    className: "".concat(avtharClassName)
  }, /*#__PURE__*/_react.default.createElement(IconComponent, {
    size: size,
    color: color,
    stroke: stroke,
    className: "cursor-pointer ".concat(classNames, " ")
  }));
};
exports.Icons = Icons;