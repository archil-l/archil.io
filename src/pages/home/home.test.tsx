import React from 'react';
import { render } from '@testing-library/react';

import Home from './home';
import { SectionProps } from '../../components/section/section-wrapper';
import '../../tests/test-utils';

// Mock child components
jest.mock('../../components/section/section-with-markdown', () => ({
  __esModule: true,
  default: jest.fn(({ sectionId }: SectionProps) => <div>Section {sectionId}</div>),
}));

jest.mock('../../components/layout/divider', () => ({
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
