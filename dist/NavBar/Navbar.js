"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = void 0;
var _react = require("react");
var _core = require("@mantine/core");
var _HeaderMenu = require("../MantineUi/HeaderMenu");
var _DataUtilis = require("../../Components/Settings/DataUtilis");
var _avathar = _interopRequireDefault(require("../../assets/Images/avathar.jpg"));
var _GroupedIcons = require("../MantineUi/GroupedIcons");
var _SubNavBar = require("./SubNavBar");
var _hooks = require("@mantine/hooks");
var _MobileNavBar = _interopRequireDefault(require("./MobileNavBar"));
var _IconTextArrow = require("../MantineUi/IconTextArrow");
var _Logos = _interopRequireDefault(require("../../assets/Images/Logos.svg"));
var _ToggleMenu = require("../MantineUi/ToggleMenu");
var _DataUtilis2 = require("../Settings/DataUtilis");
var _ContainerUi = require("../MantineUi/ContainerUi");
var _GroupMenus = require("../MantineUi/GroupMenus");
var _AvatharImage = require("../MantineUi/AvatharImage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// interface INavBarInterface {
//   headerMenus?: any
//   headerSelectData?: any
//   headerIcons?: any
//   headerSubMenu?: any
//   headerTitles?: any
// }
const NavBar = () => {
  // const { headerMenus,
  //   headerSelectData,
  //   headerIcons,
  //   headerSubMenu,
  //   headerTitles, } = props
  const [openMenuId, setOpenMenuId] = (0, _react.useState)(null);
  const [openedResponsive, {
    toggle: toggleDrawer,
    close: closeDrawer
  }] = (0, _hooks.useDisclosure)(false);
  const [searchValue, setSearchValue] = (0, _react.useState)(null);
  const [openSubMenuId, setSubOpenMenuId] = (0, _react.useState)(null);
  const [openSubTitleMenu, setOpenSubTitleMenu] = (0, _react.useState)(null);
  const isMobile = (0, _hooks.useMediaQuery)('(max-width: 991px)');
  const handleHeaderClick = id => {
    setOpenMenuId(prevId => prevId === id ? id : id);
    setSubOpenMenuId(null);
  };
  const closeMenu = () => {
    setOpenMenuId(null);
    setSubOpenMenuId(null);
  };
  (0, _react.useEffect)(() => {
    if (isMobile) {
      setOpenMenuId(null);
      setSubOpenMenuId(null);
    }
  }, [isMobile]);
  const headerSubMenuFilter = _DataUtilis.headerSubMenu === null || _DataUtilis.headerSubMenu === void 0 ? void 0 : _DataUtilis.headerSubMenu.filter(el => el.id === openMenuId);
  return /*#__PURE__*/React.createElement(_core.Paper, {
    className: "xl:px-24 px-4 py-4",
    shadow: "md",
    variant: "transparent"
  }, /*#__PURE__*/React.createElement(_core.Flex, {
    align: "center",
    justify: "space-between",
    className: "w-full"
  }, /*#__PURE__*/React.createElement(_core.Flex, null, /*#__PURE__*/React.createElement(_core.Menu, {
    shadow: "md",
    width: 200,
    trigger: "click-hover",
    openDelay: 100,
    closeDelay: 200
  }, /*#__PURE__*/React.createElement(_core.Menu.Target, null, /*#__PURE__*/React.createElement(_core.Flex, {
    align: "center"
  }, /*#__PURE__*/React.createElement(_IconTextArrow.IconTextArrow, {
    dropdownTitle: "Daily Tasks",
    headerSelectData: _DataUtilis.headerSelectData,
    imageUrl: _Logos.default
  }))), /*#__PURE__*/React.createElement(_core.Menu.Dropdown, null, /*#__PURE__*/React.createElement(_HeaderMenu.HeaderMenu, {
    headerMenu: _DataUtilis.headerTitles
  })))), /*#__PURE__*/React.createElement(_core.Group, {
    visibleFrom: "md",
    className: "ml-4"
  }, /*#__PURE__*/React.createElement(_GroupedIcons.GroupedIcons, {
    IconName: _DataUtilis.headerIcons,
    variant: "white",
    indicationShow: true
  }), /*#__PURE__*/React.createElement(_ToggleMenu.ToggleMenus, {
    ToogleMenusItem: _DataUtilis2.toggleMenusData,
    position: "bottom-end"
  }, /*#__PURE__*/React.createElement(_AvatharImage.AvatharImage, {
    AvathatarimageUrl: _avathar.default,
    name: "avathar",
    width: 40,
    height: 40,
    radius: "xl",
    classNames: "cursor-pointer "
  }))), /*#__PURE__*/React.createElement(_core.Burger, {
    opened: openedResponsive,
    onClick: toggleDrawer,
    hiddenFrom: "md"
  }), /*#__PURE__*/React.createElement(_MobileNavBar.default, {
    drawerOpened: openedResponsive,
    toggle: toggleDrawer,
    closeDrawer: closeDrawer,
    data: _DataUtilis.headerMenus,
    subData: _DataUtilis.headerSubMenu,
    setSearchValue: setSearchValue,
    searchValue: searchValue,
    isMobile: isMobile
  })), /*#__PURE__*/React.createElement(_core.Box, {
    visibleFrom: "md",
    className: "xl:w-[67%] xl:!ml-[15.5rem] lg:w-[53%] lg:!ml-[15.5rem] md:w-6/12 mx-auto"
  }, /*#__PURE__*/React.createElement(_ContainerUi.Containerui, {
    sizeContainer: "100%",
    containerClass: "mt-[-40px]"
  }, /*#__PURE__*/React.createElement(_GroupMenus.GroupMenus, {
    headerMenusDatas: _DataUtilis.headerMenus,
    onClick: handleHeaderClick,
    state: openMenuId,
    textClassName: "!text-secondary-text !font-medium"
  }))), openMenuId !== null && /*#__PURE__*/React.createElement("div", {
    className: "absolute w-full left-0 top-[4.5rem]"
  }, /*#__PURE__*/React.createElement(_core.Divider, {
    visibleFrom: "md"
  }), " ", /*#__PURE__*/React.createElement(_SubNavBar.SubNavBar, {
    Data: headerSubMenuFilter,
    handleCancel: closeMenu,
    setSubOpenMenuId: setSubOpenMenuId,
    openSubMenuId: openSubMenuId,
    openSubTitleMenu: openSubTitleMenu,
    setOpenSubTitleMenu: setOpenSubTitleMenu
  })));
};
exports.NavBar = NavBar;