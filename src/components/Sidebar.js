import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from '.';

const Sidebar = () => {
  return (
    <Box flex={1} backgroundColor={"#3e3c61"} position={"relative"}>
      <Navbar/>
    </Box>
  );
};

export default Sidebar;
