import { Flex, Text } from "@mantine/core";
import { Icons } from "./Icons";

interface IIconTextProps {
  dropdownTitle?: any;
  classNames?: any;
  subIcon?: any;
  justify?: any;
  gap?: any;
  flexClass?: any;
  onClick?: any
}

export const IconText = (props: IIconTextProps) => {
  const { dropdownTitle, classNames, subIcon, justify, gap, flexClass, onClick } = props;

  return (
    <Flex align={"center"} justify={justify} gap={gap} className={flexClass} onClick={onClick}>
      <Icons IconName={subIcon} variant="transparent" classNames="!text-secondary-text" />
      <Text className={`${classNames} !font-bold !text-secondary-text !mt-[3px]`} size="md">{dropdownTitle}</Text>
    </Flex>
  );
};
