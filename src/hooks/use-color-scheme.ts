import { useEffect, useState } from 'react';

export interface ColorSchemeType {
  appearance: 'light' | 'dark';
}

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>({ appearance: 'light' });

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setColorScheme({ appearance: mediaQueryList.matches ? 'dark' : 'light' });
    };

    mediaQueryList.addEventListener('change', handleChange);

    // Set the initial color scheme based on the current preference
    handleChange();

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleColorScheme = () => {
    setColorScheme({ appearance: colorScheme.appearance === 'light' ? 'dark' : 'light' });
  };

  return { colorScheme, toggleColorScheme };
};
