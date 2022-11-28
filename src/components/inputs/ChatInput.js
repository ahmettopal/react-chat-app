import React, { useState, useRef } from "react";
import { Box, Button, Icon, Input as CInput } from "@chakra-ui/react";
import { Input } from "..";
import { Attach, ImageAdd } from "../icons";

const ChatInput = () => {
  const imageInput = useRef();

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const onSelectImage = async () => {
    imageInput.current?.click();
  };

  const onUploadImage = async (e) => {
    const image = e.target.files[0];
    //onChange({ url: URL.createObjectURL(image), image });
  };

  return (
    <Box
      h={"50px"}
      backgroundColor={"white"}
      p={"10px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Input
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        color={"black"}
      />
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Icon as={Attach} />
        <CInput
          ref={imageInput}
          type="file"
          accept="image/*"
          display="none"
          onChange={onUploadImage}
        />
        <Icon cursor={"pointer"} onClick={onSelectImage} as={ImageAdd} />
        <Button
          backgroundColor={"button"}
          fontSize={"11px"}
          border={"none"}
          h={"25px"}
          color="white"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatInput;
