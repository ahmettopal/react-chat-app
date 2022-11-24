import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Input } from ".";

const Search = () => {
  const [username, setUsername] = useState("");
  return (
    <Box borderBottom={"1px"}>
      <Box p={"10px"}></Box>
      <Input
        type={"text"}
        placeholder="Find a user"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </Box>
  );
};

export default Search;
