import { Avatar } from "@mantine/core";
import { Icons } from "./Icons";
interface IMultipleIconsProps {
  IconName?: any;
  classNames?: any;
  variant?: any;
  color?: any;
  onclick?: any;
  indicationShow?: any;
}

export const GroupedIcons = (props: IMultipleIconsProps) => {
  const { IconName, variant, classNames, color, onclick,indicationShow } = props;

  return (
    <>
      {IconName?.map((icon: any) => (
        <Avatar
          key={Math.random()}
          className={`cursor-pointer ${classNames}`}
          c={"text-icon-text "}
        >
          <Icons
            IconName={icon.name}
            variant={variant}
            color={color}
            onClick={() => onclick(icon.name)}
            indicationShow={indicationShow}
          />
        </Avatar>
      ))}
    </>
  );
};
