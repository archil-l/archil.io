import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import Header from '../Header';
import { darkTheme } from '../../../themes/theme';

describe('Header', () => {
  const mockToggleTheme = jest.fn();

  const renderHeader = (appearance: 'light' | 'dark' = 'light') => {
    return renderWithProviders({
      children: <Header />,
      appearance,
      toggleTheme: mockToggleTheme,
    });
  };

  it('renders the header with navigation', () => {
    renderHeader();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders with correct theme context', () => {
    renderHeader('dark');
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle({
      backgroundColor: darkTheme.colors.header.backgroundColor,
    });
  });
});
