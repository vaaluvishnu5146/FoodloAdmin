import { Select, Text } from "@chakra-ui/react";
import React from "react";

export default function BasicSelect({
  placeholder = "",
  handleChange = () => {},
  options = [],
  id = "",
  label = "",
  value = "",
}) {
  return (
    <>
      <Text fontSize="md" mb={3}>
        {label}
      </Text>
      <Select
        id={id}
        placeholder={placeholder}
        onChange={(o) => handleChange(o)}
        value={value}
      >
        {options.length > 0 &&
          options.map((o, i) => (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          ))}
      </Select>
    </>
  );
}
