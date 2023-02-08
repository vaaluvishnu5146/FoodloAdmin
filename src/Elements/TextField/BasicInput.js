import React from "react";
import { Input, Text } from "@chakra-ui/react";

export default function BasicInput({
  placeholder = "",
  value = "",
  id = "",
  name = "",
  onChange = () => {},
  variant = "filled",
  label = "",
}) {
  return (
    <>
      <Text fontSize="md" mb={3}>
        {label}
      </Text>
      <Input
        variant={variant}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
      />
    </>
  );
}
