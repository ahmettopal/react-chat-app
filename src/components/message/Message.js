import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const Message = () => {
  const isOwner = true;
  return (
    <Box
      display={"flex"}
      gap="20px"
      marginBottom={"20px"}
      flexDirection={isOwner ? "row-reverse" : "row"}
    >
      <Box
        display={"flex"}
        flexDirection="column"
        color={"gray"}
        fontWeight="300"
      >
        <Image
          src={
            "https://gravatar.com/avatar/95b7296fed7f11ce97c25385025a77fd?s=400&d=robohash&r=x"
          }
          alt=""
          w={"50px"}
          h={"24px"}
          borderRadius="50%"
          objectFit={"cover"}
        />
        <Text>Just now</Text>
      </Box>
      <Box
        maxW={"80%"}
        display={"flex"}
        flexDirection="column"
        gap={"10px"}
        alignItems={isOwner ? "flex-end" : "flex-start"}
      >
        <Text
          backgroundColor={isOwner ? "#8da4f1" : "white"}
          p="10px"
          borderRadius={"10px"}
          color={isOwner ? "white" : "black"}
          minW={"max-content"}
        >
          Hello
        </Text>
        <Image
          src={
            "https://gravatar.com/avatar/95b7296fed7f11ce97c25385025a77fd?s=400&d=robohash&r=x"
          }
          alt=""
          w={"50%"}
          h={"50px"}
          borderRadius="50%"
          objectFit={"cover"}
        />
      </Box>
    </Box>
  );
};

export default Message;
