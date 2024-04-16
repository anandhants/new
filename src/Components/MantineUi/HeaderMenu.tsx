import { Menu, MenuItem, Text } from "@mantine/core";

interface IHeaderMenuProps {
  headerMenu?: any;
  onClick?: any;
  classNames?: any;
  openMenuId?: any;
}

export const HeaderMenu = (props: IHeaderMenuProps) => {
  const { headerMenu, onClick, classNames } = props;

  return (
    <Menu position="bottom">
      {headerMenu?.map((el: any, index: any) => (
        <div key={el.id} className={`${classNames}`}>
          <MenuItem onClick={() => onClick(el.id, index)}>
            <Text  size="md" fw={500}  className="!text-secondary-text">
              {el.name}
            </Text>
          </MenuItem>
        </div>
      ))}
    </Menu>
  );
};
