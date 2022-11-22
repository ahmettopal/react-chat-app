/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { PasswordInput, AuthInput } from "../components";
import useForm from "../hooks/useForm";
import * as yup from "yup";
import BackGroundImage from "../assets/img/mesh.jpeg";

const Login = () => {
  const validation = yup.object({
    email: yup
      .string()
      .email("Invalid e-mail adress")
      .required("Please enter your e-mail adress"),
    password: yup
      .string()
      .min(6, "Must be at least 6 characters")
      .required("Please enter your password"),
  });

  const { values, setValues, errors, isValid, setValuesDirectly } = useForm(
    {
      email: "",
      password: "",
    },
    validation
  );

  const onSubmit = async () => {};

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
          Login
        </Text>

        <Box display={"flex"} flexDirection={"column"} gap="10px">
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

          <Button
            backgroundColor={"button"}
            borderRadius={"md"}
            border={"none"}
            onClick={onSubmit}
          >
            <Text color={"white"} fontWeight={"bold"}>
              Login
            </Text>
          </Button>
        </Box>
        <Text color={"title"} fontSize="12px" mt={"10px"}>
          You don't have an account? Register
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
