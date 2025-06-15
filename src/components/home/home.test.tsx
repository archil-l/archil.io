import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';
import { ColorSchemeContext } from '../../context/color-scheme-context';

// Mock child components
jest.mock('../footer/footer', () => ({
  __esModule: true,
  default: jest.fn(() => <footer>Footer</footer>),
}));

jest.mock('../header/header', () => ({
  __esModule: true,
  default: jest.fn(() => <header>Header</header>),
}));

jest.mock('./main', () => ({
  __esModule: true,
  default: jest.fn(() => <main>Main</main>),
}));

describe('Home', () => {
  it('renders Header, Main, and Footer', () => {
    const contextValue = { appearance: 'light' };
    const { getByText } = render(
      <ColorSchemeContext.Provider value={contextValue as any}>
        <Home />
      </ColorSchemeContext.Provider>
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Main')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });

  it('sets document.body.className based on appearance', () => {
    const contextValue = { appearance: 'dark' };
    render(
      <ColorSchemeContext.Provider value={contextValue as any}>
        <Home />
      </ColorSchemeContext.Provider>
    );
    expect(document.body.className).toBe('dark');
  });
});
