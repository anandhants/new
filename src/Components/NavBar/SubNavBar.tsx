import { ActionIcon, CloseButton, Flex, Paper, Text } from "@mantine/core";
import { ToggleMenus } from "../MantineUi/ToggleMenu";
import { SubIconText } from "../MantineUi/SubIconText";
import { IconText } from "../MantineUi/IconText";
import { Containerui } from "../MantineUi/ContainerUi";

interface ISubNavBarProps {
  Data?: any;
  handleCancel?: any;
  setSubOpenMenuId?: any;
  openSubMenuId?: any;
  setOpenSubTitleMenu?: any;
  openSubTitleMenu?: any;
}

export const SubNavBar = (props: ISubNavBarProps) => {
  const {
    Data,
    handleCancel,
    setSubOpenMenuId,
    openSubMenuId,
    openSubTitleMenu,
    setOpenSubTitleMenu,
  } = props;

  const handleHeaderSubClick = (id: number) => {
    setSubOpenMenuId((prevId: number) => (prevId === id ? null : id));
  };

  return (
    <Paper shadow="md" className="bg-white-bg xl:px-24 px-4 py-4 py-3" visibleFrom="md">
      <Containerui sizeContainer={"100%"} containerClass="!pl-0">
        <Flex className="flex items-center " h={40}>
          <ToggleMenus
            ToogleMenusItem={Data}
            opened={openSubTitleMenu}
            setOpened={
              Data?.[0].options == true ? setOpenSubTitleMenu : () => { }
            }
          >
            {Data[0].options == true ? (
              <SubIconText
                dropdownTitle={Data[0].name}
                subIcon={Data[0].icons}
                fontWeight={500}
                colors="text-subMenuText"
              />
            ) : (
              <IconText dropdownTitle={Data[0].name} subIcon={Data[0].icons} />
            )}
          </ToggleMenus>
          {Data[0].items?.map((el: any) => (
            <Text
              size="md"
              inline={true}
              key={Math.random()}
              p={12}
              className={`cursor-pointer text-secondary-text !mx-1 hover:bg-[#F1F3F5] rounded-md ${openSubMenuId == el.id && "bg-[#F1F3F5]"
                }`}
              fw={500}
              onClick={() => handleHeaderSubClick(el.id)}
            >
              {el.name}
            </Text>
          ))}
        </Flex>
      </Containerui>
      <ActionIcon variant="transparent" aria-label="Settings" className="!absolute xl:!right-[7rem] !right-[2rem] top-[1.50rem]">
        <CloseButton onClick={handleCancel} variant="transparent" className='!w-10 !h-10' />
      </ActionIcon>
    </Paper>
  );
};
