/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { PasswordInput, AuthInput } from "../components";
import useForm from "../hooks/useForm";
import * as yup from "yup";
import BackGroundImage from "../assets/img/mesh.jpeg";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({ email: "", password: "" });
  const navigate = useNavigate();

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

  const onSubmit = async () => {
    if (!isValid) {
      setErr({
        password: errors.password,
        email: errors.email,
      });
      return;
    }
    setLoading(true);
    const email = values.email;
    const password = values.password;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      //setErr(true);
    }
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
          Login
        </Text>

        <Box display={"flex"} flexDirection={"column"} gap="10px">
          <AuthInput
            placeholder="E-Posta"
            name="email"
            onChange={setValues}
            value={values.email}
          />
          {err.email && <Text>{err.email}</Text>}
          <PasswordInput
            name="password"
            onChange={setValues}
            value={values.password}
          />
           {err.password && <Text>{err.password}</Text>}

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
          You don't have an account? <Link to="/register">Register</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
