import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { ColorSchemeContext } from '../context/color-scheme-context';
import { lightTheme, darkTheme } from '../themes/theme';

jest.mock('react-router', () => ({
  __esModule: true,
  HashRouter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Route: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Link: ({ children, to }: { children: ReactNode; to: string }) => (
    <a href={to} className="nav-button">
      {children}
    </a>
  ),
  Navigate: ({ to }: { to: string }) => <div>Redirecting to {to}</div>,
}));
interface RenderWithProvidersProps {
  children: ReactNode;
  appearance?: 'light' | 'dark';
  toggleTheme?: () => void;
}

// @ts-ignore
const TestIntlProvider = IntlProvider as React.ComponentType<React.Fragment>;

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
