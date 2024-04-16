import React from "react";
// import { Avatar, Indicator } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { IconCall } from "../Settings/IconsUtility";

interface ISingleIconsProps {
  IconName?: string; // Assuming IconName is a string representing the name of the icon
  classNames?: string;
  onClick?: () => void; // Assuming onClick is a function
  variant?: string;
  size?: string;
  color?: any; // Assuming color is a string, adjust it according to your needs
  stroke?: any; // Assuming stroke is a string, adjust it according to your needs
  avtharClassName?: any;
  indicationShow?: boolean
}

export const Icons: React.FC<ISingleIconsProps> = (props) => {
  // const { IconName, onClick, classNames, variant, size, color, stroke, avtharClassName, indicationShow } = props;
  const { IconName, onClick, classNames, variant, size, color, stroke, avtharClassName } = props;

  const IconComponent = IconCall.find((el) => el.name === IconName)?.component;
  // const IndicationIcon = IconCall.find((el) => el.name === IconName)?.indication;
  // If IconComponent is not found, return null or render a fallback icon
  if (!IconComponent) {
    // console.error(`Icon component "${IconName}" not found.`);
    return null;
  }

  return (
    <Avatar variant={variant} onClick={onClick} className={`${avtharClassName}`}>
      {/* Render the dynamically found icon component */}
      {/* {indicationShow && IndicationIcon &&<Indicator color="red" size={10} withBorder>
        <IconComponent
          size={size}
          color={color}
          stroke={stroke}
          className={`cursor-pointer ${classNames}`}
        />
      </Indicator>
      }
      {!indicationShow || !IndicationIcon &&
        <IconComponent
          size={size}
          color={color}
          stroke={stroke}
          className={`cursor-pointer ${classNames}`}
        />
      } */}
       <IconComponent
          size={size}
          color={color}
          stroke={stroke}
          className={`cursor-pointer ${classNames} `}
        />
    </Avatar>
  );
};
