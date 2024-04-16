import { Flex, Group } from "@mantine/core";
import { Icons } from "./Icons";
import { AvatharImage } from "./AvatharImage";
import { HeaderName } from "./HeaderName";
interface IIconTextArrowProps {
  dropdownTitle?: any;
  classNames?: any;
  imageUrl?: any;
  headerSelectData?: any;
  headerClass?: any;
  mobileShow?:any
}

export const IconTextArrow = (props: IIconTextArrowProps) => {
  const { dropdownTitle, imageUrl, headerSelectData, headerClass, mobileShow } = props;

  return (
    <Group p={0} className="sm:!gap-[16px] !gap-2">
      <AvatharImage AvathatarimageUrl={imageUrl} width={40} height={40} radius={"xl"}/>
      <HeaderName
        dropdownTitle={dropdownTitle}
        headerClass={headerClass}
        headerSubMenu={headerSelectData}
        mobileShow={mobileShow}
      />
      {/* icons buttons start */} 
      
      <Flex direction="column" className="mr-4 sm:-ml-3" visibleFrom={mobileShow && "sm"}>
        <Icons
          IconName="selector"
          size={"2rem"}
          stroke="2"
          variant="transparent"
          classNames="!text-primary-text sm:!ml-0 !ml-[-25px]"
        />
      </Flex>
    </Group>
  );
};
