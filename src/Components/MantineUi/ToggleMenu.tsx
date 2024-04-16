import { Menu, Text, Paper } from "@mantine/core";
import React from "react";
import { Icons } from "./Icons";
// import { AvatharImage } from "./AvatharImage";

interface IToggleMenus {
  children?: any;
  ToogleMenusItem?: any; // Add toggleMenusData prop
  setOpened?: any;
  opened?: any;
  position?: any;
  menuclassName?: any;
}

export const ToggleMenus = (props: IToggleMenus) => {
  const {
    children,
    ToogleMenusItem,
    setOpened,
    opened,
    position,
    menuclassName,
  } = props;

  return (
    <Menu
      shadow="md"
      width={250}
      opened={opened}
      onChange={setOpened}
      position={position}
      transitionProps={{ transition: 'pop-top-right' }}
      withinPortal
    >
      <Menu.Target>
        <Paper p={0} variant="transparent" className="!shadow-none sm:!mr-4 !mr-0 ">
          {children}
        </Paper>
      </Menu.Target>
      <Menu.Dropdown className={`${menuclassName}`}>
        {(ToogleMenusItem || [])?.map((menu: any) => (
          <React.Fragment key={menu.id}>
            {menu.id !== 1 && menu.label && <Menu.Divider />}
            {menu.label && (
              <Menu.Label className="!text-base !leading-none">{menu.label}</Menu.Label>
            )}
            {((ToogleMenusItem[0]?.options == true ? menu?.selectData?.[0]?.items : menu.items || []) || []).map((item: any) => (
              <Menu.Item
                key={item.name}
                onClick={() => setOpened(false)}
                leftSection={
                  item.icon && (
                    <Icons IconName={item.icon} variant={"transparent"} color={item.colorShade && 'red'} classNames="!text-icon-text" />
                  )
                }
              >
                <Text className="cursor-pointer !p-1" fw={500} c={item.colorShade ? 'red' : `!text-secondary-text`}>
                  {item.name}
                </Text>
              </Menu.Item>
            ))}
          </React.Fragment>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
