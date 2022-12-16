import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { UserCard } from ".";

const Chats = () => {
  return (
    <UserCard
      image="https://gravatar.com/avatar/95b7296fed7f11ce97c25385025a77fd?s=400&d=robohash&r=x"
      username="ahmet topal"
      message="last mesage"
    />
  );
};

export default Chats;
