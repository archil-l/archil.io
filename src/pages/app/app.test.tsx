import React from 'react';
import { render } from '@testing-library/react';
import App from './app';
import { ColorSchemeContext } from '../../context/color-scheme-context';

// Mock child components
jest.mock('../../components/footer/footer', () => ({
  __esModule: true,
  default: jest.fn(() => <footer>Footer</footer>),
}));

jest.mock('../../components/header/header', () => ({
  __esModule: true,
  default: jest.fn(() => <header>Header</header>),
}));

jest.mock('./app', () => ({
  __esModule: true,
  default: jest.fn(() => <main>Home</main>),
}));

describe('Home', () => {
  it('renders Header, App, and Footer', () => {
    const contextValue = { appearance: 'light' };
    const { getByText } = render(
      <ColorSchemeContext.Provider value={contextValue as any}>
        <App />
      </ColorSchemeContext.Provider>
    );
    expect(getByText('Header')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Footer')).toBeInTheDocument();
  });

  it('sets document.body.className based on appearance', () => {
    const contextValue = { appearance: 'dark' };
    render(
      <ColorSchemeContext.Provider value={contextValue as any}>
        <App />
      </ColorSchemeContext.Provider>
    );
    expect(document.body.className).toBe('dark');
  });
});
