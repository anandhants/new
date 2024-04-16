"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuChildren = void 0;
var _core = require("@mantine/core");
const MenuChildren = props => {
  const {
    children,
    childrenDropdown
  } = props;
  return /*#__PURE__*/React.createElement(_core.Menu, {
    shadow: "md",
    width: 200,
    trigger: "click-hover",
    openDelay: 100,
    closeDelay: 200
  }, /*#__PURE__*/React.createElement(_core.Menu.Target, null, children), /*#__PURE__*/React.createElement(_core.Menu.Dropdown, null, childrenDropdown));
};
exports.MenuChildren = MenuChildren;