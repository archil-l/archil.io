import React from 'react';
import { THEME } from '../constants/consts';

// Define the types for the context and provider props
type HomeContextProps = {
  theme: string;
  switchTheme: (theme?: string) => void;
}

type HomeContextProviderProps = {
  children: React.ReactNode;
}

const { LIGHT, DARK } = THEME;

// Create the context with a default value
const HomeContext = React.createContext<HomeContextProps>({
  theme: LIGHT,
  switchTheme: () => { },
});

const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
  const [theme, setTheme] = React.useState<string>(LIGHT);

  const switchTheme = (theme?: string) => {
    if (theme === LIGHT || theme === DARK) {
      setTheme(theme);
    } else {
      setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
    }
  };

  return (
    <HomeContext.Provider value={{ theme, switchTheme }
    }>
      {children}
    </HomeContext.Provider>
  );
};

export { HomeContextProvider, HomeContext };