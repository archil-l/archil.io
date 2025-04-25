import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { ColorSchemeContext } from '../context/ColorSchemeContext';
import { lightTheme, darkTheme } from '../themes/theme';

interface RenderWithProvidersProps {
  children: ReactNode;
  appearance?: 'light' | 'dark';
  toggleTheme?: () => void;
}

// @ts-ignore
const TestIntlProvider = IntlProvider as React.ComponentType<any>;

const AllTheProviders = ({
  children,
  appearance = 'light',
  toggleTheme = jest.fn(),
}: RenderWithProvidersProps) => {
  const theme = appearance === 'light' ? lightTheme : darkTheme;

  return (
    <TestIntlProvider locale="en" messages={{}} textComponent={React.Fragment}>
      <ThemeProvider theme={theme}>
        <ColorSchemeContext.Provider value={{ appearance, toggleTheme }}>
          {children}
        </ColorSchemeContext.Provider>
      </ThemeProvider>
    </TestIntlProvider>
  );
};

export const renderWithProviders = (props: RenderWithProvidersProps) => {
  return render(<AllTheProviders {...props} />);
};
