"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInputWithButton = void 0;
var _core = require("@mantine/core");
var _iconsReact = require("@tabler/icons-react");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SearchInputWithButton = props => {
  const {
    placeholder,
    radius,
    size,
    value,
    setValue
  } = props;
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleClear = () => {
    setValue("");
  };
  return /*#__PURE__*/_react.default.createElement(_core.TextInput, _extends({
    radius: radius,
    size: size,
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    className: "z-10",
    rightSection: value ? /*#__PURE__*/_react.default.createElement(_core.ActionIcon, {
      size: 32,
      radius: "xl",
      color: "color-primary",
      variant: "transparent",
      onClick: handleClear
    }, /*#__PURE__*/_react.default.createElement(_iconsReact.IconX, {
      style: {
        width: (0, _core.rem)(18),
        height: (0, _core.rem)(18)
      }
    })) : /*#__PURE__*/_react.default.createElement(_core.ActionIcon, {
      size: 32,
      radius: "xl",
      color: "color-primary",
      variant: "transparent"
    }, /*#__PURE__*/_react.default.createElement(_iconsReact.IconArrowRight, {
      style: {
        width: (0, _core.rem)(19),
        height: (0, _core.rem)(19)
      },
      stroke: 2
    }))
  }, props));
};
exports.SearchInputWithButton = SearchInputWithButton;