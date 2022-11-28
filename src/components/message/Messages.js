import React from "react";
import { Box } from "@chakra-ui/react";
import {Message} from '..';

const Messages = () => {
  return (
    <Box backgroundColor={"#ddddf7"} p="10px" overflow={"scroll"} h="450px">
      <Message />
    </Box>
  );
};

export default Messages;