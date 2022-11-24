import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar, Search , Chats} from ".";

const Sidebar = () => {
  return (
    <Box flex={1} backgroundColor={"#3e3c61"} position={"relative"}>
      <Navbar />
      <Search />
      <Chats />
    </Box>
  );
};

export default Sidebar;
