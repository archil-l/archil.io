import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme, ColorSchemeType } from '../hooks/useColorScheme';

interface ColorContextType extends ColorSchemeType {
  toggleTheme: () => void;
}

type ColorProviderProps = {
  children: ReactNode;
};

const initialTheme: ColorContextType = { theme: 'light', toggleTheme: () => { } };

// Create the context
export const ColorSchemeContext = createContext<ColorContextType>(initialTheme);

export const ColorSchemeProvider = ({ children }: ColorProviderProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <ColorSchemeContext.Provider value={{ theme: colorScheme.theme, toggleTheme: toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};