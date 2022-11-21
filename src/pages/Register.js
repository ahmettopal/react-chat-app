/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Avatar,
  Box,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  Icon,
  Image,
  IconButton,
  Link,
  useDisclosure,
  Button,
  Divider,
  AvatarGroup
} from '@chakra-ui/react';
import useForm from '../hooks/useForm';
import * as yup from 'yup';
import Add from '../assets/img/addAvatar.png';
import BackGroundImage from '../assets/img/mesh.jpeg'

const Register = () => {

  const validation = yup.object({
    name: yup.string().required('Lütfen adınızı giriniz'),
    email: yup
      .string()
      .email('Geçersiz email adresi')
      .required('Lütfen email adresinizi giriniz'),
    password: yup
      .string()
      .min(6, 'En az 6 karakter olmalıdır')
      .required('Lütfen sifrenizi giriniz'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Şifreler Uyuşmuyor'),
  });

  const { values, setValues, errors, isValid, setValuesDirectly } = useForm(
    {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validation
  );

  return (
    <Box 
    backgroundImage={BackGroundImage}
    backgroundSize={'cover'}
    backgroundRepeat={'no-repeat'}
    height={'100vh'}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
    //className="formContainer"
    >
      <Box 
      backgroundColor={'white'}
      p={'20'}
      borderRadius={'md'}
      gap={'10'}
      alignItems={'center'}
      //className="formWrapper"
      >
        <Text 
        color={'#5d5b8d'}
        fontWeight={'bold'}
        fontSize={'2xl'}
       // className="logo"
        >Chat Application</Text>
        <Text 
        color={'blueviolet'}
        fontSize={'md'}
        //className="title"
        >Register</Text>
        <form>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{display:"none"}} type="file" id="file"/>
            <label htmlFor="file">
                <img src={Add} alt=""/>
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </Box>
    </Box>
  );
};

export default Register;
