import React from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      backgroundColor={"#2f2d52"}
      h="50px"
      p={"10px"}
      justifyContent={"space-between"}
      color={"#ddddf7"}
    >
      <Text fontWeight={"bold"}>Chat App</Text>
      <Box display={"flex"} gap="10px" alignItems={"center"}>
        <Image
          src={
            "https://gravatar.com/avatar/95b7296fed7f11ce97c25385025a77fd?s=400&d=robohash&r=x"
          }
          alt=""
          w={"24px"}
          h={"24px"}
          borderRadius={"50%"}
          objectFit={"cover"}
          backgroundColor={"#ddddf7"}
        />
        <Text>ahmet</Text>
        <Button
          backgroundColor={"button"}
          fontSize={"12px"}
          border={"none"}
          h={"25px"}
        >
          logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
