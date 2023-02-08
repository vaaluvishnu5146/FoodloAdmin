import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function BasicMenu({ options = [], handleOptions = () => {} }) {
  return (
    <Menu>
      <MenuButton as={Button}>Options</MenuButton>
      <MenuList>
        {options.length > 0 &&
          options.map((d, i) => (
            <MenuItem onClick={(e) => handleOptions(d.value)} key={i}>
              {d.label}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
}
