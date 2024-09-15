import { useEffect, useState } from 'react';

export interface ColorSchemeType {
  theme: 'light' | 'dark'
};

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>({ theme: 'light' });

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setColorScheme({ theme: mediaQueryList.matches ? 'dark' : 'light' });
    };

    mediaQueryList.addEventListener('change', handleChange);

    // Set the initial color scheme based on the current preference
    handleChange();

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleColorScheme = () => {
    setColorScheme({ theme: colorScheme.theme === 'light' ? 'dark' : 'light' });
  }

  return { colorScheme, toggleColorScheme };
};