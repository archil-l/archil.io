// theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#343a40',
    background: '#f8f9fa',
    footer: {
      backgroundColor: '#eff2f5',
      color: '#343a40'
    },
    header: {
      backgroundColor: '#eff2f5',
      color: '#f8f9fa'
    },
    anchor: {
      color: '#2f80ff'
    }
  },
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: '#f8f9fa',
    background: '#343a40',
    footer: {
      backgroundColor: '#28282B',
      color: '#f8f9fa'
    },
    header: {
      backgroundColor: '#28282B',
      color: '#f8f9fa'
    },
    anchor: {
      color: '#2f80ff'
    }
  },

};
