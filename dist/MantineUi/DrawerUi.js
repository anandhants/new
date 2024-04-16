"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerUi = void 0;
var _core = require("@mantine/core");
var _IconText = require("./IconText");
var _Icons = require("./Icons");
// import { useState } from "react";

const DrawerUi = props => {
  const {
    drawerOpened,
    CustomDrawerTitle,
    closeDrawer,
    HeadData,
    HeadTitle,
    customTitle,
    SubHeadData,
    openedLink,
    handleToggleLinksDrawer,
    secondDataUicollpse,
    setSecondCollapseOpened,
    secondCollapseOpened
  } = props;
  const IcontextClick = index => {
    const updatedCollapseState = [...secondCollapseOpened];
    updatedCollapseState[index] = !updatedCollapseState[index];
    setSecondCollapseOpened(updatedCollapseState);
  };
  return /*#__PURE__*/React.createElement(_core.Drawer, {
    opened: drawerOpened,
    onClose: closeDrawer,
    size: "100%",
    padding: "md",
    title: customTitle ? CustomDrawerTitle() : HeadTitle,
    hiddenFrom: "md",
    zIndex: 1
  }, /*#__PURE__*/React.createElement(_core.ScrollArea, {
    h: "calc(100vh - ".concat((0, _core.rem)(80), ")"),
    mx: "-md",
    className: "relative"
  }, /*#__PURE__*/React.createElement(_core.Divider, {
    my: "sm"
  }), HeadData === null || HeadData === void 0 ? void 0 : HeadData.map((el, index) => {
    var _SubHeadData$index, _SubHeadData$index3;
    return /*#__PURE__*/React.createElement(_core.Box, {
      key: index,
      className: "w-full"
    }, /*#__PURE__*/React.createElement(_core.UnstyledButton, {
      onClick: () => handleToggleLinksDrawer(index),
      className: "w-full"
    }, /*#__PURE__*/React.createElement(_core.Flex, {
      justify: "space-between",
      className: "hover:bg-[#F1F3F5]"
    }, /*#__PURE__*/React.createElement(_core.Box, {
      component: "span",
      mx: "lg",
      my: 5
    }, /*#__PURE__*/React.createElement(_core.Text, {
      fw: 500,
      className: "!text-secondary-text ",
      size: "md"
    }, el.name)), /*#__PURE__*/React.createElement(_Icons.Icons, {
      IconName: openedLink === index ? "uparrow" : "downarrow",
      variant: "transparent",
      size: "20",
      classNames: "mr-4"
    }))), /*#__PURE__*/React.createElement(_core.Collapse, {
      in: openedLink === index
    }, /*#__PURE__*/React.createElement(_core.Box, {
      ml: 5,
      mx: "xl"
    }, secondDataUicollpse && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Flex, {
      justify: "space-between",
      onClick: () => SubHeadData[index].options == true && IcontextClick(index)
    }, /*#__PURE__*/React.createElement(_IconText.IconText, {
      dropdownTitle: SubHeadData[index].name,
      subIcon: SubHeadData[index].icons,
      justify: "start",
      flexClass: "!pl-5"
    }), SubHeadData[index].options == true && /*#__PURE__*/React.createElement(_Icons.Icons, {
      IconName: secondCollapseOpened[0] == true ? "uparrow" : "downarrow",
      variant: "transparent",
      size: "20",
      avtharClassName: "mr-[-23px]"
    })), /*#__PURE__*/React.createElement(_core.Collapse, {
      in: secondCollapseOpened[index]
    }, /*#__PURE__*/React.createElement(_core.Box, {
      ml: 10,
      mx: "xl"
    }, (((_SubHeadData$index = SubHeadData[index]) === null || _SubHeadData$index === void 0 || (_SubHeadData$index = _SubHeadData$index.selectData[0]) === null || _SubHeadData$index === void 0 ? void 0 : _SubHeadData$index.items) || []).map(el => {
      var _SubHeadData$index2;
      return /*#__PURE__*/React.createElement(_core.Text, {
        className: "!pl-[3rem] cursor-pointer hover:bg-[#F1F3F5]  ".concat(((_SubHeadData$index2 = SubHeadData[index]) === null || _SubHeadData$index2 === void 0 ? void 0 : _SubHeadData$index2.id) == el.id && '!font-bold'),
        key: Math.random(),
        py: "sm",
        size: "md"
      }, el.name);
    })))), (_SubHeadData$index3 = SubHeadData[index]) === null || _SubHeadData$index3 === void 0 || (_SubHeadData$index3 = _SubHeadData$index3.items) === null || _SubHeadData$index3 === void 0 ? void 0 : _SubHeadData$index3.map(el => /*#__PURE__*/React.createElement(_core.Text, {
      px: "xl",
      py: "sm",
      size: "md",
      fw: 500,
      className: "!text-secondary-text  hover:bg-[#F1F3F5] ",
      key: Math.random()
    }, el.name))), /*#__PURE__*/React.createElement(_core.Divider, {
      my: "sm"
    })));
  })));
};
exports.DrawerUi = DrawerUi;