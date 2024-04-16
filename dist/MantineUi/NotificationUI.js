"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationUi = void 0;
var _core = require("@mantine/core");
const NotificationUi = props => {
  const {
    setClose
  } = props;
  return /*#__PURE__*/React.createElement(_core.Paper, {
    shadow: "md",
    className: "absolute z-10 w-full max-w-[350px] right-[1rem] top-[5rem]"
  }, /*#__PURE__*/React.createElement(_core.Flex, {
    p: 10,
    justify: "space-between",
    align: "center"
  }, " ", /*#__PURE__*/React.createElement(_core.Text, {
    fw: 500,
    className: "!text-secondary-text !text-xl\t"
  }, "Notification"), /*#__PURE__*/React.createElement(_core.CloseButton, {
    variant: "transparent",
    className: "w-10 h-10",
    onClick: () => setClose(false)
  })), /*#__PURE__*/React.createElement(_core.Notification, {
    title: "We notify you that",
    withCloseButton: false
  }, "You are now obligated to give a star to aa project on GitHub"));
};
exports.NotificationUi = NotificationUi;