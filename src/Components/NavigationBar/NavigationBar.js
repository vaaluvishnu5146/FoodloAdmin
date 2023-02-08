import {
  Box,
  Flex,
  Spacer,
  Center,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

export default function NavigationBar() {
  return (
    <Box bg="green.300" w="100%" p={2} color="white">
      <Flex>
        <Box>
          <Center h="50px" color="white">
            Foodlo Admin
          </Center>
        </Box>
        <Spacer />
        <Box>
          <AvatarGroup spacing="1rem">
            <Avatar bg="red.500" />
          </AvatarGroup>
        </Box>
      </Flex>
    </Box>
  );
}
