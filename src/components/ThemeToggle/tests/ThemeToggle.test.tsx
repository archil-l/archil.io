import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../tests/test-utils';
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle', () => {
  const mockToggleTheme = jest.fn();

  const renderThemeToggle = (appearance: 'light' | 'dark' = 'light') => {
    return renderWithProviders({
      children: <ThemeToggle />,
      appearance,
      toggleTheme: mockToggleTheme,
    });
  };

  beforeEach(() => {
    mockToggleTheme.mockClear();
  });

  it('renders the theme toggle button', () => {
    renderThemeToggle();
    const button = screen.getByRole('switch');
    expect(button).toBeInTheDocument();
  });

  it('shows correct state in light mode', () => {
    renderThemeToggle('light');
    const button = screen.getByRole('switch');
    expect(button).toHaveAttribute('aria-checked', 'false');
  });

  it('shows correct state in dark mode', () => {
    renderThemeToggle('dark');
    const button = screen.getByRole('switch');
    expect(button).toHaveAttribute('aria-checked', 'true');
  });

  it('calls toggleTheme when clicked', () => {
    renderThemeToggle();
    const button = screen.getByRole('switch');
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
