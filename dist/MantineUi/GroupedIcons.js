"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupedIcons = void 0;
var _core = require("@mantine/core");
var _Icons = require("./Icons");
const GroupedIcons = props => {
  const {
    IconName,
    variant,
    classNames,
    color,
    onclick,
    indicationShow
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, IconName === null || IconName === void 0 ? void 0 : IconName.map(icon => /*#__PURE__*/React.createElement(_core.Avatar, {
    key: Math.random(),
    className: "cursor-pointer ".concat(classNames),
    c: "text-icon-text "
  }, /*#__PURE__*/React.createElement(_Icons.Icons, {
    IconName: icon.name,
    variant: variant,
    color: color,
    onClick: () => onclick(icon.name),
    indicationShow: indicationShow
  }))));
};
exports.GroupedIcons = GroupedIcons;