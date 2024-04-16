"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleMenus = void 0;
var _core = require("@mantine/core");
var _react = _interopRequireDefault(require("react"));
var _Icons = require("./Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import { AvatharImage } from "./AvatharImage";

const ToggleMenus = props => {
  var _ref;
  const {
    children,
    ToogleMenusItem,
    setOpened,
    opened,
    position,
    menuclassName
  } = props;
  return /*#__PURE__*/_react.default.createElement(_core.Menu, {
    shadow: "md",
    width: 250,
    opened: opened,
    onChange: setOpened,
    position: position,
    transitionProps: {
      transition: 'pop-top-right'
    },
    withinPortal: true
  }, /*#__PURE__*/_react.default.createElement(_core.Menu.Target, null, /*#__PURE__*/_react.default.createElement(_core.Paper, {
    p: 0,
    variant: "transparent",
    className: "!shadow-none sm:!mr-4 !mr-0 "
  }, children)), /*#__PURE__*/_react.default.createElement(_core.Menu.Dropdown, {
    className: "".concat(menuclassName)
  }, (_ref = ToogleMenusItem || []) === null || _ref === void 0 ? void 0 : _ref.map(menu => {
    var _ToogleMenusItem$, _menu$selectData;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: menu.id
    }, menu.id !== 1 && menu.label && /*#__PURE__*/_react.default.createElement(_core.Menu.Divider, null), menu.label && /*#__PURE__*/_react.default.createElement(_core.Menu.Label, {
      className: "!text-base !leading-none"
    }, menu.label), ((((_ToogleMenusItem$ = ToogleMenusItem[0]) === null || _ToogleMenusItem$ === void 0 ? void 0 : _ToogleMenusItem$.options) == true ? menu === null || menu === void 0 || (_menu$selectData = menu.selectData) === null || _menu$selectData === void 0 || (_menu$selectData = _menu$selectData[0]) === null || _menu$selectData === void 0 ? void 0 : _menu$selectData.items : menu.items || []) || []).map(item => /*#__PURE__*/_react.default.createElement(_core.Menu.Item, {
      key: item.name,
      onClick: () => setOpened(false),
      leftSection: item.icon && /*#__PURE__*/_react.default.createElement(_Icons.Icons, {
        IconName: item.icon,
        variant: "transparent",
        color: item.colorShade && 'red',
        classNames: "!text-icon-text"
      })
    }, /*#__PURE__*/_react.default.createElement(_core.Text, {
      className: "cursor-pointer !p-1",
      fw: 500,
      c: item.colorShade ? 'red' : "!text-secondary-text"
    }, item.name))));
  })));
};
exports.ToggleMenus = ToggleMenus;