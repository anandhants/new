import { Menu } from "@mantine/core"
interface IMenuChildren {
    children?: any;
    childrenDropdown?: any;
}
export const MenuChildren = (props: IMenuChildren) => {
    const { children, childrenDropdown } = props
    return (
        <Menu
            shadow="md"
            width={200}
            trigger="click-hover"
            openDelay={100}
            closeDelay={200}
        >
            <Menu.Target>
                {children}
            </Menu.Target>
            <Menu.Dropdown>
                {childrenDropdown}
            </Menu.Dropdown>
        </Menu>
    )
}