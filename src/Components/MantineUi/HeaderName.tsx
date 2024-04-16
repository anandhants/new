import { Paper, Text } from "@mantine/core";
import { HeaderMenu } from "./HeaderMenu";

interface IHeaderTitleProps {
  dropdownTitle?: any;
  headerClass?: any;
  handleToggle?: any;
  opened?: any;
  headerMenu?: any;
  headerSubMenu?: any;
  mobileShow?:any
}

export const HeaderName = (props: IHeaderTitleProps) => {
  const { dropdownTitle, headerClass, handleToggle, opened, headerSubMenu, mobileShow } =
    props;
  return (
    <>
      <Text className={`${headerClass} !text-primary-text !font-bold`} onClick={handleToggle}  size="lg" visibleFrom={mobileShow && "sm"}>
        {dropdownTitle}
      </Text>
      {opened && (
        <Paper className="absolute z-10 bg-white-bg w-[200px] shadow-lg rounded-md left-[1rem] top-[3rem]">
          <HeaderMenu headerMenu={headerSubMenu} classNames={"py-3"} />
        </Paper>
      )}
    </>
  );
};
