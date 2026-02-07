import React from 'react';

import '../../tests/test-utils';
import { screen } from '@testing-library/react';
import Footer from './footer';
import { renderWithProviders } from '../../tests/test-utils';

describe('Footer', () => {
  const renderFooter = () => {
    return renderWithProviders({
      children: <Footer />,
    });
  };

  it('renders the footer with copyright', () => {
    renderFooter();
    expect(screen.getByText(/© 2026 Archil Lelashvili/i)).toBeInTheDocument();
  });

  it('renders the React link', () => {
    renderFooter();
    const link = screen.getByRole('link', { name: /react/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reactjs.org/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the React icon', () => {
    renderFooter();
    expect(screen.getByTestId('react-icon')).toBeInTheDocument();
  });
});
