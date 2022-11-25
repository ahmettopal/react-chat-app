import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { Camera, More, Add } from "./icons";
import { Messages } from ".";

const Chat = () => {
  return (
    <Box flex={2}>
      <Box
        h={"50px"}
        backgroundColor={"#5d5b8d"}
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-between"
        p={"10px"}
        color="lightgray"
      >
        <Text>ahmet</Text>
        <Box display={"flex"} gap="10px">
          <Icon as={Camera} />
          <Icon as={More} />
          <Icon as={Add} />
        </Box>
      </Box>
      <Messages />
    </Box>
  );
};

export default Chat;
