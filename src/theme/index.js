import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "sans-serif",
    body: "sans-serif",
  },
  colors: {
    backgroundColor: '#fff',
    primary: '#297AF3',
    default: '#515151',
    light: '#f9f9f9',
    gray: '#E5E5E5',
    lightGray: '#818283',
    dark: '#292D32',
    title: '#a7bcff',
    button: '#7b96ec'
  },
});

export default theme;