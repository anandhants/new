"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupMenus = void 0;
var _core = require("@mantine/core");
const GroupMenus = props => {
  const {
    headerMenusDatas,
    onClick,
    state,
    groupClassName,
    textClassName
  } = props;
  return /*#__PURE__*/React.createElement(_core.Group, {
    gap: "xs",
    visibleFrom: "md",
    className: groupClassName
  }, headerMenusDatas === null || headerMenusDatas === void 0 ? void 0 : headerMenusDatas.map(el => /*#__PURE__*/React.createElement(_core.Text, {
    size: "md",
    inline: true,
    fw: 500,
    className: "cursor-pointer hover:bg-[#F1F3F5] rounded-md ".concat(state === el.id && "bg-[#F1F3F5]", " ").concat(textClassName),
    p: 12,
    onClick: () => onClick(el.id),
    key: Math.random()
  }, el.name)));
};
exports.GroupMenus = GroupMenus;