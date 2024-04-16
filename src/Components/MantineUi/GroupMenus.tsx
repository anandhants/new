import { Group, Text } from "@mantine/core"

interface IGroupMenu {
    headerMenusDatas?: any,
    onClick?: any,
    state?:any,
    groupClassName?:any,
    textClassName?:any
}
export const GroupMenus = (props: IGroupMenu) => {
    const { headerMenusDatas, onClick, state,groupClassName,textClassName } = props
    return (
        <Group gap="xs" visibleFrom="md" className={groupClassName}>
            {headerMenusDatas?.map((el: any) => (
                <Text
                    size="md"
                    inline={true}
                    fw={500}
                    className={`cursor-pointer hover:bg-[#F1F3F5] rounded-md ${state === el.id && "bg-[#F1F3F5]"} ${textClassName}`}
                    p={12}
                    onClick={() => onClick(el.id)}
                    key={Math.random()}
                >
                    {el.name}
                </Text>
            ))}
        </Group>
    )
}