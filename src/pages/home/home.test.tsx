import React from 'react';
import { render } from '@testing-library/react';

import Home from './home';
import { SectionProps } from '../../components/section/section-wrapper';

// Mock child components
jest.mock('../section/section', () => ({
  __esModule: true,
  default: jest.fn(({ $sectionid }: SectionProps) => <div>Section {$sectionid}</div>),
}));

jest.mock('../layout/divider', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Divider</div>),
}));

describe('Home', () => {
  it('renders Welcome section', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Section welcome')).toBeInTheDocument();
  });

  it('renders Work section', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Section work')).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Section projects')).toBeInTheDocument();
  });

  it('renders all dividers', () => {
    const { getAllByText } = render(<Home />);

    const dividers = getAllByText('Divider');
    expect(dividers.length).toEqual(2);
  });
});
