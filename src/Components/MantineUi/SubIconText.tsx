import { Flex, Paper, Text } from "@mantine/core";
import { Icons } from "./Icons";

interface ISubIconTextProps {
  dropdownTitle?: any;
  classNames?: any;
  subIcon?: any;
  colors?: string;
  fontWeight?: any;
}

export const SubIconText = (props: ISubIconTextProps) => {
  const { dropdownTitle, classNames, subIcon, colors, fontWeight } = props;

  return (
    <>
      <Paper shadow="xs" radius="md" withBorder p={6} variant="filled">
        <Flex align="center" className="rounded-md">
          <Icons IconName={subIcon} variant="transparent" classNames="!text-secondary-text !w-6 !h-6 !mt-[-4px]" />
          <Text className={`${classNames}`} size="lg" c={colors} fw={fontWeight} >
            {dropdownTitle}
          </Text>
          <Icons
            IconName="selector"
            size="1.5rem"
            stroke="2"
            variant="transparent"
            classNames="text-[#9aa4b2]"
          />
        </Flex>
      </Paper>
    </>
  );
};
