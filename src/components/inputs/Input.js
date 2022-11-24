import React from "react";
import { Input as CInput } from "@chakra-ui/react";

const Input = ({ ...props }) => {
  return (
    <CInput
      type="text"
      border={"none"}
      color={"gray"}
      outline={"none"}
      {...props}
    />
  );
};

export default Input;
