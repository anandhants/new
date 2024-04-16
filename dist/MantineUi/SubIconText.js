"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubIconText = void 0;
var _core = require("@mantine/core");
var _Icons = require("./Icons");
const SubIconText = props => {
  const {
    dropdownTitle,
    classNames,
    subIcon,
    colors,
    fontWeight
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Paper, {
    shadow: "xs",
    radius: "md",
    withBorder: true,
    p: 6,
    variant: "filled"
  }, /*#__PURE__*/React.createElement(_core.Flex, {
    align: "center",
    className: "rounded-md"
  }, /*#__PURE__*/React.createElement(_Icons.Icons, {
    IconName: subIcon,
    variant: "transparent",
    classNames: "!text-secondary-text !w-6 !h-6 !mt-[-4px]"
  }), /*#__PURE__*/React.createElement(_core.Text, {
    className: "".concat(classNames),
    size: "lg",
    c: colors,
    fw: fontWeight
  }, dropdownTitle), /*#__PURE__*/React.createElement(_Icons.Icons, {
    IconName: "selector",
    size: "1.5rem",
    stroke: "2",
    variant: "transparent",
    classNames: "text-[#9aa4b2]"
  }))));
};
exports.SubIconText = SubIconText;