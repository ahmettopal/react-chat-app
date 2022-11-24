import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const UserCard = ({ image, username, message }) => {
  return (
    <>
      <Image src={image} alt="" w={"45px"} h={"45px"} />
      <Box>
        <Text fontSize={"18px"} fontWeight={"500"}>
          {username}
        </Text>
        <Text fontSize={"14px"} color={"lightgray"}>
          {message}
        </Text>
      </Box>
    </>
  );
};

export default UserCard;
