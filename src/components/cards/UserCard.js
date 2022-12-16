import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const UserCard = ({ onClick = () => {}, image, username, message }) => {
  return (
    <Box
      p={"10px"}
      display="flex"
      alignItems={"center"}
      gap="10px"
      color={"white"}
      cursor={"pointer"}
      onClick={onClick}
    >
      <Image src={image} alt="" w={"45px"} h={"45px"} borderRadius={"50%"} />
      <Box>
        <Text fontSize={"18px"} fontWeight={"500"}>
          {username}
        </Text>
        <Text fontSize={"14px"} color={"lightgray"}>
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default UserCard;
