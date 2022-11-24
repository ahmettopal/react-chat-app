import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import {UserCard} from '.';

const Chats = () => {
  return (
    <Box>
      <Box
        p={"10px"}
        display="flex"
        alignItems={"center"}
        gap="10px"
        color={"white"}
        cursor={"pointer"}
      >
        <UserCard 
        image="https://gravatar.com/avatar/95b7296fed7f11ce97c25385025a77fd?s=400&d=robohash&r=x"
        username="ahmet topal"
        message="last mesage"
        />
      </Box>
    </Box>
  );
};

export default Chats;
