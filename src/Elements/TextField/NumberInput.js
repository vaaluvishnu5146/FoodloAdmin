import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
export default function BasicNumberInput({
  placeholder = "",
  value = "",
  id = "",
  name = "",
  handleChange = () => {},
  label = "",
  max = "",
}) {
  return (
    <>
      <Text fontSize="md" mb={3}>
        {label}
      </Text>
      <NumberInput
        onChange={(e) =>
          handleChange({
            target: {
              id: id,
              value: e,
            },
          })
        }
        value={value}
        id={id}
      >
        <NumberInputField placeholder={placeholder} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
