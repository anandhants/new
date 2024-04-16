import {
  Box,
  Collapse,
  Divider,
  Drawer,
  Flex,
  ScrollArea,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
// import { useState } from "react";
import { IconText } from "./IconText";
import { Icons } from "./Icons";

interface IDrawerUiProps {
  drawerOpened?: any;
  closeDrawer?: any;
  toggle?: any;
  HeadData?: any;
  SubHeadData?: any;
  customTitle?: any;
  HeadTitle?: any;
  CustomDrawerTitle?: any;
  openedLink?: any;
  setOpenedLink?: any;
  handleToggleLinksDrawer?: any;
  secondDataUicollpse?: boolean
  setSecondCollapseOpened?:any,
  secondCollapseOpened?:any
}

export const DrawerUi = (props: IDrawerUiProps) => {
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
  
  const IcontextClick = (index: number) => {
    const updatedCollapseState = [...secondCollapseOpened];
    updatedCollapseState[index] = !updatedCollapseState[index];
    setSecondCollapseOpened(updatedCollapseState);
  };

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title={customTitle ? CustomDrawerTitle() : HeadTitle}
      hiddenFrom="md"
      zIndex={1}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" className="relative" >
        <Divider my="sm" />
        {HeadData?.map((el: any, index: number) => (
          <Box key={index} className="w-full">
            <UnstyledButton onClick={() => handleToggleLinksDrawer(index)} className="w-full">
              <Flex justify={"space-between"} className={`hover:bg-[#F1F3F5]`}>
                <Box component="span" mx="lg" my={5} >
                  <Text fw={500} className="!text-secondary-text " size="md">
                    {el.name}
                  </Text>
                </Box>
                <Icons IconName={openedLink === index ? "uparrow" : "downarrow"} variant={"transparent"} size="20" classNames="mr-4" />
              </Flex>
            </UnstyledButton>
            <Collapse in={openedLink === index}>
              <Box ml={5} mx="xl">
                {secondDataUicollpse &&
                  <>
                    <Flex justify={"space-between"} onClick={() => SubHeadData[index].options == true && IcontextClick(index)}>
                      <IconText
                        dropdownTitle={SubHeadData[index].name}
                        subIcon={SubHeadData[index].icons}
                        justify={"start"}
                        flexClass="!pl-5"
                      />
                      {SubHeadData[index].options == true &&
                        <Icons IconName={secondCollapseOpened[0] == true ? "uparrow" : "downarrow"} variant={"transparent"} size="20" avtharClassName={`mr-[-23px]`} />
                      }
                    </Flex>
                    <Collapse in={secondCollapseOpened[index]}>
                      <Box ml={10} mx="xl" >
                        {(SubHeadData[index]?.selectData[0]?.items || []).map((el: any) => (
                          <Text className={`!pl-[3rem] cursor-pointer hover:bg-[#F1F3F5]  ${SubHeadData[index]?.id == el.id && '!font-bold'}`} key={Math.random()}
                            py={"sm"}
                            size="md">{el.name}</Text>
                        ))}
                      </Box>
                    </Collapse>
                  </>
                }
                {SubHeadData[index]?.items?.map((el: any) => (
                  <Text
                    px={"xl"}
                    py={"sm"}
                    size="md"
                    fw={500}
                    className="!text-secondary-text  hover:bg-[#F1F3F5] "
                    key={Math.random()}
                  >
                    {el.name}
                  </Text>
                ))}
              </Box>
              <Divider my="sm" />
            </Collapse>
          </Box>
        ))}
      </ScrollArea>
    </Drawer>
  );
};

