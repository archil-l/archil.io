import React from 'react';
import { getAllByText, render } from '@testing-library/react';
import Main from './main';
import { SectionProps } from '@components/section/section-wrapper';

// Mock child components
jest.mock('../section/section', () => ({
  __esModule: true,
  default: jest.fn(({ $sectionid }: SectionProps) => <div>Section {$sectionid}</div>),
}));

jest.mock('../layout/divider', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Divider</div>),
}));

describe('Main', () => {
  it('renders Welcome section', () => {
    const { getByText } = render(<Main />);

    expect(getByText('Section welcome')).toBeInTheDocument();
  });

  it('renders Work section', () => {
    const { getByText } = render(<Main />);

    expect(getByText('Section work')).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    const { getByText } = render(<Main />);

    expect(getByText('Section projects')).toBeInTheDocument();
  });

  it('renders all dividers', () => {
    const { getAllByText } = render(<Main />);

    const dividers = getAllByText('Divider');
    expect(dividers.length).toEqual(2);
  });
});
