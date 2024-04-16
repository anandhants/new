import { Flex, Group, Menu } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState hook
import { GroupedIcons } from "../MantineUi/GroupedIcons";
import { headerIcons, headerSelectData, headerTitles, toggleMenusData } from "../Settings/DataUtilis";
import { DrawerUi } from "../MantineUi/DrawerUi";
import { AvatharImage } from "../MantineUi/AvatharImage";
import AvatharLogo from "../../assets/Images/avathar.jpg";
import { IconTextArrow } from "../MantineUi/IconTextArrow";
import { HeaderMenu } from "../MantineUi/HeaderMenu";
import Logos from "../../assets/Images/Logos.svg";
import { ToggleMenus } from "../MantineUi/ToggleMenu";

interface IMobileNavBarProps {
  drawerOpened?: any;
  closeDrawer?: any;
  toggle?: any;
  data?: any;
  subData?: any;
  handleSearchIcons?: any;
  openSearchInput?: any;
  setSearchValue?: any;
  searchValue?: any;
  isMobile?: boolean
}

const MobileNavBar = (props: IMobileNavBarProps) => {
  const {
    drawerOpened,
    closeDrawer,
    data,
    subData,
    handleSearchIcons,
    isMobile
  } = props;
  const [openedLinks, setOpenedLinks] = useState<number | null>(null);
  // Initialize an array to track the open/close state of each collapse section
  const [secondCollapseOpened, setSecondCollapseOpened] = useState<boolean[]>(new Array(data?.length).fill(false));

  const handleToggleLinksDrawer = (index: number) => {
    // If the link is already opened, close it, otherwise open it
    if (openedLinks === index) {
      setOpenedLinks(null); // close the menu
    } else {
      setOpenedLinks(index); // open the menu
      const updatedCollapseState = [...secondCollapseOpened];  // second accordian collpse concept close the menu
      updatedCollapseState[index] = !updatedCollapseState[index];
      setSecondCollapseOpened([false]);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setOpenedLinks(null);
      setSecondCollapseOpened([false]);
    }
  }, [isMobile])

  const avatharImages = () => {
    return (
      <AvatharImage
        AvathatarimageUrl={AvatharLogo}
        name="avathar"
        width={40}
        height={40}
        radius={"xl"}
        classNames={"cursor-pointer"}
      />
    );
  };
  const HeaderTitle = () => {
    return (
      <>
        <Flex justify="space-between" align="center">
          <Menu
            shadow="md"
            width={200}
            trigger="click-hover"
            openDelay={100}
            closeDelay={200}
          >
            <Menu.Target>
              <Flex align="center">
                <IconTextArrow
                  dropdownTitle="Daily Task"
                  headerSelectData={headerSelectData}
                  imageUrl={Logos}
                  headerClass={"!text-primary-text !font-bold"}
                  mobileShow={true}
                />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              <HeaderMenu headerMenu={headerTitles} />
            </Menu.Dropdown>
          </Menu>
          <Group className="!absolute !right-[3rem]">
            <GroupedIcons
              IconName={headerIcons}
              variant="white"
              onclick={handleSearchIcons}
            />
            <ToggleMenus
              children={avatharImages()}
              ToogleMenusItem={toggleMenusData}
              position={"bottom-end"}
            />
          </Group>
        </Flex>
      </>
    );
  };
  return (
    <DrawerUi
      drawerOpened={drawerOpened}
      closeDrawer={() => {
        setOpenedLinks(null);
        closeDrawer();
      }}
      HeadData={data}
      SubHeadData={subData}
      customTitle={true}
      CustomDrawerTitle={HeaderTitle}
      openedLink={openedLinks}
      setOpenedLink={setOpenedLinks}
      handleToggleLinksDrawer={handleToggleLinksDrawer}
      secondDataUicollpse={true}
      setSecondCollapseOpened={setSecondCollapseOpened}
      secondCollapseOpened={secondCollapseOpened}
    />
  );
};

export default MobileNavBar;
