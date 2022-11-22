/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Box, Text, Image, Button, Input } from "@chakra-ui/react";
import { PasswordInput, AuthInput } from "../components";
import useForm from "../hooks/useForm";
import * as yup from "yup";
import Add from "../assets/img/addAvatar.png";
import BackGroundImage from "../assets/img/mesh.jpeg";

const Register = () => {
  const imageInput = useRef();

  const validation = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Invalid e-mail adress")
      .required("Please enter your e-mail adress"),
    password: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .required("Please enter your password"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
  });

  const { values, setValues, errors, isValid, setValuesDirectly } = useForm(
    {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validation
  );

  const onSubmit = async () => {};

  const onSelectImage = async () => {
    imageInput.current?.click();
  };

  const onUploadImage = async (e) => {
    const image = e.target.files[0];
    //onChange({ url: URL.createObjectURL(image), image });
  };

  return (
    <Box
      backgroundImage={BackGroundImage}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display="flex"
        backgroundColor={"white"}
        p="12"
        borderRadius={"md"}
        gap="10px"
        alignItems={"center"}
        flexDirection="column"
      >
        <Text color={"#5d5b8d"} fontWeight={"bold"} fontSize="24px">
          Chat Application
        </Text>
        <Text color={"blueviolet"} fontSize="12px">
          Register
        </Text>

        <Box display={"flex"} flexDirection={"column"} gap="10px">
          <AuthInput
            placeholder="Name"
            name="name"
            onChange={setValues}
            value={values.name}
          />
          <AuthInput
            placeholder="E-Posta"
            name="email"
            onChange={setValues}
            value={values.email}
          />
          <PasswordInput
            name="password"
            onChange={setValues}
            value={values.password}
          />
          <PasswordInput
            name="passwordConfirm"
            onChange={setValues}
            value={values.passwordConfirm}
          />

          <Input
            ref={imageInput}
            type="file"
            accept="image/*"
            display="none"
            onChange={onUploadImage}
          />
          <Box
            display={"flex"}
            alignItems="center"
            cursor={"pointer"}
            onClick={onSelectImage}
          >
            <Image src={Add} alt="" width={"32px"} />
            <Text color={"#8da4f1"} fontSize="12px">
              Add an avatar
            </Text>
          </Box>

          <Button
            backgroundColor={"button"}
            borderRadius={"md"}
            border={"none"}
            onClick={onSubmit}
          >
            <Text color={"white"} fontWeight={"bold"}>
              Sign up
            </Text>
          </Button>
        </Box>
        <Text color={"title"} fontSize="12px" mt={"10px"}>
          You do have an account? Login
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
