"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconText = void 0;
var _core = require("@mantine/core");
var _Icons = require("./Icons");
const IconText = props => {
  const {
    dropdownTitle,
    classNames,
    subIcon,
    justify,
    gap,
    flexClass,
    onClick
  } = props;
  return /*#__PURE__*/React.createElement(_core.Flex, {
    align: "center",
    justify: justify,
    gap: gap,
    className: flexClass,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(_Icons.Icons, {
    IconName: subIcon,
    variant: "transparent",
    classNames: "!text-secondary-text"
  }), /*#__PURE__*/React.createElement(_core.Text, {
    className: "".concat(classNames, " !font-bold !text-secondary-text !mt-[3px]"),
    size: "md"
  }, dropdownTitle));
};
exports.IconText = IconText;