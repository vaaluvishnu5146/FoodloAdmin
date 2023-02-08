import React from "react";
import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

export default function BasicRadio({
  label = "",
  handleChange = () => {},
  value = "",
  id = "",
  name = "",
}) {
  return (
    <>
      <Text fontSize="md" mb={3}>
        {label}
      </Text>
      <RadioGroup
        onChange={(e) =>
          handleChange({
            target: {
              value: e,
              id: id,
            },
          })
        }
        value={value}
        id={id}
        name={name}
      >
        <Stack direction="row">
          <Radio value="1">Veg</Radio>
          <Radio value="2">Non-Veg</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
