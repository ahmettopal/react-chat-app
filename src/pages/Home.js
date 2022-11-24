import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar, Chat } from "../components";

const Home = () => {
  return (
    <Box
      backgroundColor={"#a7bcff"}
      height="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Box
        borderRadius={"10px"}
        w={"65%"}
        h={"80%"}
        display={"flex"}
        overflow={"hidden"}
      >
        <Sidebar />
        <Chat/>
      </Box>
    </Box>
  );
};

export default Home;