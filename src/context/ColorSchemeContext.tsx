import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme, ColorSchemeType } from '../hooks/useColorScheme';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../themes/theme';

interface ColorContextType extends ColorSchemeType {
  toggleTheme: () => void;
}

type ColorProviderProps = {
  children: ReactNode;
};

const initialTheme: ColorContextType = { appearance: 'light', toggleTheme: () => { } };

// Create the context
export const ColorSchemeContext = createContext<ColorContextType>(initialTheme);

export const ColorSchemeProvider = ({ children }: ColorProviderProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const currentTheme = colorScheme.appearance === 'dark' ? darkTheme : lightTheme;

  return (
    <ColorSchemeContext.Provider value={{ appearance: colorScheme.appearance, toggleTheme: toggleColorScheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ColorSchemeContext.Provider>
  );
};