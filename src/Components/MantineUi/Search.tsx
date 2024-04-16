import { TextInput, ActionIcon, rem } from "@mantine/core";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import React from "react";

interface TextInputProps {
  placeholder?: string;
  size?: any;
  radius?: any;
  setValue?: any;
  value?: any;
}

export const SearchInputWithButton = (props: TextInputProps) => {
  const { placeholder, radius, size, value, setValue } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <TextInput
      radius={radius}
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="z-10"
      rightSection={
        value ? (
          <ActionIcon
            size={32}
            radius="xl"
            color="color-primary"
            variant="transparent"
            onClick={handleClear}
          >
            <IconX style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
        ) : (
          <ActionIcon
            size={32}
            radius="xl"
            color="color-primary"
            variant="transparent"
          >
            <IconArrowRight
              style={{ width: rem(19), height: rem(19) }}
              stroke={2}
            />
          </ActionIcon>
        )
      }
      {...props}
    />
  );
};
