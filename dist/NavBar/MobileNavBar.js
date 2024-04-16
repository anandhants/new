"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _core = require("@mantine/core");
var _react = require("react");
var _GroupedIcons = require("../MantineUi/GroupedIcons");
var _DataUtilis = require("../Settings/DataUtilis");
var _DrawerUi = require("../MantineUi/DrawerUi");
var _AvatharImage = require("../MantineUi/AvatharImage");
var _avathar = _interopRequireDefault(require("../../assets/Images/avathar.jpg"));
var _IconTextArrow = require("../MantineUi/IconTextArrow");
var _HeaderMenu = require("../MantineUi/HeaderMenu");
var _Logos = _interopRequireDefault(require("../../assets/Images/Logos.svg"));
var _ToggleMenu = require("../MantineUi/ToggleMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import useState hook

const MobileNavBar = props => {
  const {
    drawerOpened,
    closeDrawer,
    data,
    subData,
    handleSearchIcons,
    isMobile
  } = props;
  const [openedLinks, setOpenedLinks] = (0, _react.useState)(null);
  // Initialize an array to track the open/close state of each collapse section
  const [secondCollapseOpened, setSecondCollapseOpened] = (0, _react.useState)(new Array(data === null || data === void 0 ? void 0 : data.length).fill(false));
  const handleToggleLinksDrawer = index => {
    // If the link is already opened, close it, otherwise open it
    if (openedLinks === index) {
      setOpenedLinks(null); // close the menu
    } else {
      setOpenedLinks(index); // open the menu
      const updatedCollapseState = [...secondCollapseOpened]; // second accordian collpse concept close the menu
      updatedCollapseState[index] = !updatedCollapseState[index];
      setSecondCollapseOpened([false]);
    }
  };
  (0, _react.useEffect)(() => {
    if (isMobile) {
      setOpenedLinks(null);
      setSecondCollapseOpened([false]);
    }
  }, [isMobile]);
  const avatharImages = () => {
    return /*#__PURE__*/React.createElement(_AvatharImage.AvatharImage, {
      AvathatarimageUrl: _avathar.default,
      name: "avathar",
      width: 40,
      height: 40,
      radius: "xl",
      classNames: "cursor-pointer"
    });
  };
  const HeaderTitle = () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_core.Flex, {
      justify: "space-between",
      align: "center"
    }, /*#__PURE__*/React.createElement(_core.Menu, {
      shadow: "md",
      width: 200,
      trigger: "click-hover",
      openDelay: 100,
      closeDelay: 200
    }, /*#__PURE__*/React.createElement(_core.Menu.Target, null, /*#__PURE__*/React.createElement(_core.Flex, {
      align: "center"
    }, /*#__PURE__*/React.createElement(_IconTextArrow.IconTextArrow, {
      dropdownTitle: "Daily Task",
      headerSelectData: _DataUtilis.headerSelectData,
      imageUrl: _Logos.default,
      headerClass: "!text-primary-text !font-bold",
      mobileShow: true
    }))), /*#__PURE__*/React.createElement(_core.Menu.Dropdown, null, /*#__PURE__*/React.createElement(_HeaderMenu.HeaderMenu, {
      headerMenu: _DataUtilis.headerTitles
    }))), /*#__PURE__*/React.createElement(_core.Group, {
      className: "!absolute !right-[3rem]"
    }, /*#__PURE__*/React.createElement(_GroupedIcons.GroupedIcons, {
      IconName: _DataUtilis.headerIcons,
      variant: "white",
      onclick: handleSearchIcons
    }), /*#__PURE__*/React.createElement(_ToggleMenu.ToggleMenus, {
      children: avatharImages(),
      ToogleMenusItem: _DataUtilis.toggleMenusData,
      position: "bottom-end"
    }))));
  };
  return /*#__PURE__*/React.createElement(_DrawerUi.DrawerUi, {
    drawerOpened: drawerOpened,
    closeDrawer: () => {
      setOpenedLinks(null);
      closeDrawer();
    },
    HeadData: data,
    SubHeadData: subData,
    customTitle: true,
    CustomDrawerTitle: HeaderTitle,
    openedLink: openedLinks,
    setOpenedLink: setOpenedLinks,
    handleToggleLinksDrawer: handleToggleLinksDrawer,
    secondDataUicollpse: true,
    setSecondCollapseOpened: setSecondCollapseOpened,
    secondCollapseOpened: secondCollapseOpened
  });
};
var _default = exports.default = MobileNavBar;