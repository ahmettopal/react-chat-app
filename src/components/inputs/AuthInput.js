import React from "react";
import { Input } from "@chakra-ui/react";

const AuthInput = ({ ...props }) => {
  return <Input p={1} variant="flushed" w={250} {...props} />;
};

export default AuthInput;
