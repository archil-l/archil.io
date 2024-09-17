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
    },
    sections: {
      introduction: {
        backgroundColor: '#f8f9fa',
        color: '#343a40'
      },
      projects: {
        backgroundColor: '#eff2f5',
        color: '#343a40'
      },
      contact: {
        backgroundColor: '#f8f9fa',
        color: '#343a40'
      }
    }
  }
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
    },
    sections: {
      introduction: {
        backgroundColor: '#343a40',
        color: '#f8f9fa'
      },
      projects: {
        backgroundColor: '#28282B',
        color: '#f8f9fa'
      },
      contact: {
        backgroundColor: '#343a40',
        color: '#f8f9fa'
      }
    }
  }
};
