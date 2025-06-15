import React from 'react';
import { render } from '@testing-library/react';
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

jest.mock('../../constants/consts', () => ({
  SectionIds: {
    Welcome: 'welcome',
    Work: 'work',
    Projects: 'projects',
  },
}));

describe('Main', () => {
  it('renders all sections and dividers', () => {
    const { getByText } = render(<Main />);
    expect(getByText('Section welcome')).toBeInTheDocument();
    expect(getByText('Divider')).toBeInTheDocument();
    expect(getByText('Section work')).toBeInTheDocument();
    expect(getByText('Section projects')).toBeInTheDocument();
  });
});
