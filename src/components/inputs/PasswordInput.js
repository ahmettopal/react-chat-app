import React from "react";
import { Input } from "@chakra-ui/react";

function PasswordInput({ ...props }) {
  return (
    <Input
      p={1}
      variant="flushed"
      w={250}
      type={"password"}
      placeholder="Password"
      {...props}
    />
  );
}

export default PasswordInput;