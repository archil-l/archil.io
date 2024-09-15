// theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#343a40',
    background: '#f8f9fa',
  },
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: '#f8f9fa',
    background: '#343a40',
  },
};
