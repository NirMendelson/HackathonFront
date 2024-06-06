// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4d87b8', // a cool, moderate blue
    },
    secondary: {
      main: '#ffd896', // a light, vivid orange
    },
    error: {
      main: '#fed4d5', // a light, slightly pinkish red
    },
    background: {
      default: '#ffffff',
      pastel1: '#fed4d5',
      pastel2: '#ffd896',
    },
  },
});

export default theme;
