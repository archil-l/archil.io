// theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#343a40',
    background: '#f8f9fa',
    footer: {
      backgroundColor: '#eff2f5',
      color: '#343a40',
      transition: 'background-color 2s ease',
    },
    header: {
      backgroundColor: '#eff2f5',
      color: '#343a40',
      transition: 'background-color 2s ease',
    },
    anchor: {
      color: '#2f80ff',
    },
    divider: {
      borderTop: '2px solid #343a40',
    },
    error: {
      backgroundColor: '#fff5f5',
      textColor: '#e53e3e',
      buttonBackground: '#e53e3e',
      buttonText: '#ffffff',
    },
    sections: {
      welcome: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
      },
      work: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
      },
      projects: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
      },
      teaching: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
      },
      agent: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
        chat: {
          border: '1px solid #ccc',
          backgroundColor: '#fafafa',
          color: '#f8f9fa',
          transition: 'background-color 2s ease',
        },
      },
      contact: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease',
      },
    },
  },
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: '#f8f9fa',
    background: '#343a40',
    footer: {
      backgroundColor: '#1c1c1e',
      color: '#f8f9fa',
      transition: 'background-color 2s ease',
    },
    header: {
      backgroundColor: '#1c1c1e',
      color: '#bdbfc1',
      transition: 'background-color 2s ease',
    },
    anchor: {
      color: '#2f80ff',
    },
    divider: {
      borderTop: '2px solid #343a40',
    },
    error: {
      backgroundColor: '#2d2a2e',
      textColor: '#ff6b6b',
      buttonBackground: '#ff6b6b',
      buttonText: '#1a1a1a',
    },
    sections: {
      welcome: {
        backgroundColor: '#343a40',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
      work: {
        backgroundColor: '#28282b',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
      projects: {
        backgroundColor: '#343a40',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
      teaching: {
        backgroundColor: '#343a40',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
      agent: {
        backgroundColor: '#343a40',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
        chat: {
          border: '1px solid #555',
          backgroundColor: '#28282b',
          color: '#bdbfc1',
          transition: 'background-color 2s ease',
        },
      },
      contact: {
        backgroundColor: '#28282b',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
    },
  },
};
