/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Box, Text, Image, Button, Input } from "@chakra-ui/react";
import { PasswordInput, AuthInput } from "../components";
import useForm from "../hooks/useForm";
import * as yup from "yup";
import Add from "../assets/img/addAvatar.png";
import BackGroundImage from "../assets/img/mesh.jpeg";
import { auth, db, storage } from "../components/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const imageInput = useRef();
  const [err, setErr] = useState({
    name: "",
    password: "",
    email: "",
    passconfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

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

  const onSubmit = async () => {
    if (!isValid) {
      setErr({
        name: errors.name,
        password: errors.password,
        email: errors.email,
        passconfirm: errors.passwordConfirm,
      });
      return;
    }

    setLoading(true);
    const displayName = values.name;
    const email = values.email;
    const password = values.password;
    const file = image;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            //setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      //setErr(true);
      setLoading(false);
    }
  };

  const onSelectImage = async () => {
    imageInput.current?.click();
  };

  const onUploadImage = async (e) => {
    setImgLoading(true);
    const image = e.target.files[0];
    setImage(image);
    setImgLoading(false);
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
          {err.name && <Text>{err.name}</Text>}
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
          <PasswordInput
            name="passwordConfirm"
            onChange={setValues}
            value={values.passwordConfirm}
          />
          {err.passconfirm && <Text>{err.passconfirm}</Text>}
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
          {imgLoading && <Text>"Uploading and compressing the image please wait..."</Text>}
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
          You do have an account? {' '}
          <Link to="/login">Login</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
