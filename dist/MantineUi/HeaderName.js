"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderName = void 0;
var _core = require("@mantine/core");
var _HeaderMenu = require("./HeaderMenu");
const HeaderName = props => {
  const {
    dropdownTitle,
    headerClass,
    handleToggle,
    opened,
    headerSubMenu,
    mobileShow
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Text, {
    className: "".concat(headerClass, " !text-primary-text !font-bold"),
    onClick: handleToggle,
    size: "lg",
    visibleFrom: mobileShow && "sm"
  }, dropdownTitle), opened && /*#__PURE__*/React.createElement(_core.Paper, {
    className: "absolute z-10 bg-white-bg w-[200px] shadow-lg rounded-md left-[1rem] top-[3rem]"
  }, /*#__PURE__*/React.createElement(_HeaderMenu.HeaderMenu, {
    headerMenu: headerSubMenu,
    classNames: "py-3"
  })));
};
exports.HeaderName = HeaderName;