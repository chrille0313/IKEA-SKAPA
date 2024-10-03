'use client';

import { createTheme, responsiveFontSizes } from '@mui/material';
import { EudoxusSans } from '@/fonts';

export const blue = {
  50: '#E2F0FC',
  100: '#B5D8F7',
  200: '#84BEF2',
  300: '#519FEA',
  400: '#297FE0',
  500: '#0158A3',
  600: '#014A89',
  700: '#013A6C',
  800: '#012B51',
  900: '#001E3A'
};

export const secondary = {
  50: '#F9F0FF',
  100: '#E9CEFD',
  200: '#D49CFC',
  300: '#B355F6',
  400: '#750AC2',
  500: '#6709AA',
  600: '#490679',
  700: '#3B0363',
  800: '#2F024F',
  900: '#23023B'
};

export const gray = {
  50: '#FBFCFE',
  100: '#EAF0F5',
  200: '#D6E2EB',
  300: '#BFCCD9',
  400: '#94A6B8',
  500: '#5B6B7C',
  600: '#4C5967',
  700: '#364049',
  800: '#131B20',
  900: '#090E10'
};

export const green = {
  50: '#F6FEF6',
  100: '#E3FBE3',
  200: '#C7F7C7',
  300: '#A1E8A1',
  400: '#51BC51',
  500: '#1F7A1F',
  600: '#136C13',
  700: '#0A470A',
  800: '#042F04',
  900: '#021D02'
};

export const red = {
  50: '#FFE6E6',
  100: '#FFB3B3',
  200: '#FF8080',
  300: '#FF4D4D',
  400: '#FF1A1A',
  500: '#E60000',
  600: '#B30000',
  700: '#800000',
  800: '#660000',
  900: '#4D0000'
};

export const yellow = {
  50: '#FFFCE6',
  100: '#FFF7B3',
  200: '#FFF380',
  300: '#FFEE4D',
  400: '#FFE91A',
  500: '#E6CF00',
  600: '#B3A600',
  700: '#807D00',
  800: '#665F00',
  900: '#4D4800'
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: gray[50]
    },
    secondary: {
      light: secondary[400],
      main: secondary[500],
      dark: secondary[900]
    },

    warning: {
      main: '#F7B538',
      dark: '#F79F00'
    },
    error: {
      light: '#D32F2F',
      main: '#D32F2F',
      dark: '#B22A2A'
    },
    success: {
      light: green[400],
      main: green[500],
      dark: green[700]
    },

    grey: {
      ...gray
    },

    divider: gray[300],

    background: {
      default: gray[50],
      paper: gray[50]
    },
    text: {
      primary: '#000',
      secondary: gray[400]
    },

    action: {
      hover: blue[100],
      selected: blue[200]
    }
  },
  typography: {
    fontFamily: EudoxusSans.style.fontFamily
  },
  transitions: {
    duration: {
      enteringScreen: 500
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          '&:hover': {
            color: blue[300]
          }
        }
      }
    }
  }
});

const theme = lightTheme;

export default responsiveFontSizes(theme);
