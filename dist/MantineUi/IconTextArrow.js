"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconTextArrow = void 0;
var _core = require("@mantine/core");
var _Icons = require("./Icons");
var _AvatharImage = require("./AvatharImage");
var _HeaderName = require("./HeaderName");
const IconTextArrow = props => {
  const {
    dropdownTitle,
    imageUrl,
    headerSelectData,
    headerClass,
    mobileShow
  } = props;
  return /*#__PURE__*/React.createElement(_core.Group, {
    p: 0,
    className: "sm:!gap-[16px] !gap-2"
  }, /*#__PURE__*/React.createElement(_AvatharImage.AvatharImage, {
    AvathatarimageUrl: imageUrl,
    width: 40,
    height: 40,
    radius: "xl"
  }), /*#__PURE__*/React.createElement(_HeaderName.HeaderName, {
    dropdownTitle: dropdownTitle,
    headerClass: headerClass,
    headerSubMenu: headerSelectData,
    mobileShow: mobileShow
  }), /*#__PURE__*/React.createElement(_core.Flex, {
    direction: "column",
    className: "mr-4 sm:-ml-3",
    visibleFrom: mobileShow && "sm"
  }, /*#__PURE__*/React.createElement(_Icons.Icons, {
    IconName: "selector",
    size: "2rem",
    stroke: "2",
    variant: "transparent",
    classNames: "!text-primary-text sm:!ml-0 !ml-[-25px]"
  })));
};
exports.IconTextArrow = IconTextArrow;