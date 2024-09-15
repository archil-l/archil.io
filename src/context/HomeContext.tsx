import React from 'react';
import { THEME } from '../constants/consts';
import { HomeContextProps, HomeContextProviderProps } from './types';

const { LIGHT, DARK } = THEME;

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