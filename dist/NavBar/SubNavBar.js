"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubNavBar = void 0;
var _core = require("@mantine/core");
var _ToggleMenu = require("../MantineUi/ToggleMenu");
var _SubIconText = require("../MantineUi/SubIconText");
var _IconText = require("../MantineUi/IconText");
var _ContainerUi = require("../MantineUi/ContainerUi");
const SubNavBar = props => {
  var _Data$0$items;
  const {
    Data,
    handleCancel,
    setSubOpenMenuId,
    openSubMenuId,
    openSubTitleMenu,
    setOpenSubTitleMenu
  } = props;
  const handleHeaderSubClick = id => {
    setSubOpenMenuId(prevId => prevId === id ? null : id);
  };
  return /*#__PURE__*/React.createElement(_core.Paper, {
    shadow: "md",
    className: "bg-white-bg xl:px-24 px-4 py-4 py-3",
    visibleFrom: "md"
  }, /*#__PURE__*/React.createElement(_ContainerUi.Containerui, {
    sizeContainer: "100%",
    containerClass: "!pl-0"
  }, /*#__PURE__*/React.createElement(_core.Flex, {
    className: "flex items-center ",
    h: 40
  }, /*#__PURE__*/React.createElement(_ToggleMenu.ToggleMenus, {
    ToogleMenusItem: Data,
    opened: openSubTitleMenu,
    setOpened: (Data === null || Data === void 0 ? void 0 : Data[0].options) == true ? setOpenSubTitleMenu : () => {}
  }, Data[0].options == true ? /*#__PURE__*/React.createElement(_SubIconText.SubIconText, {
    dropdownTitle: Data[0].name,
    subIcon: Data[0].icons,
    fontWeight: 500,
    colors: "text-subMenuText"
  }) : /*#__PURE__*/React.createElement(_IconText.IconText, {
    dropdownTitle: Data[0].name,
    subIcon: Data[0].icons
  })), (_Data$0$items = Data[0].items) === null || _Data$0$items === void 0 ? void 0 : _Data$0$items.map(el => /*#__PURE__*/React.createElement(_core.Text, {
    size: "md",
    inline: true,
    key: Math.random(),
    p: 12,
    className: "cursor-pointer text-secondary-text !mx-1 hover:bg-[#F1F3F5] rounded-md ".concat(openSubMenuId == el.id && "bg-[#F1F3F5]"),
    fw: 500,
    onClick: () => handleHeaderSubClick(el.id)
  }, el.name)))), /*#__PURE__*/React.createElement(_core.ActionIcon, {
    variant: "transparent",
    "aria-label": "Settings",
    className: "!absolute xl:!right-[7rem] !right-[2rem] top-[1.50rem]"
  }, /*#__PURE__*/React.createElement(_core.CloseButton, {
    onClick: handleCancel,
    variant: "transparent",
    className: "!w-10 !h-10"
  })));
};
exports.SubNavBar = SubNavBar;