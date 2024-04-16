import { Image } from "@mantine/core";
interface IAvatharProps {
  AvathatarimageUrl?: any;
  name?: any;
  width?: any;
  height?: any;
  classNames?: any;
  radius?: any;
}
export const AvatharImage = (props: IAvatharProps) => {
  const { AvathatarimageUrl, name, classNames, width, height, radius } = props;
  return (
    <Image
      src={AvathatarimageUrl}
      alt={name}
      className={`${classNames}`}
      w={width}
      h={height}
      radius={radius}
    />
  );
};
