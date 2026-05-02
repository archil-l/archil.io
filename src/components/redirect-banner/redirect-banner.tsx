import React, { useState } from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-size: 14px;

  span {
    grid-column: 2;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.colors.background};
    font-weight: 700;
    text-decoration: underline;
  }

  button {
    grid-column: 3;
    justify-self: end;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    padding: 0 20px;
    margin: 0px;
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;

    &:hover {
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const STORAGE_KEY = 'redirect-banner-dismissed';

const RedirectBanner = () => {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== '1');

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Banner role="banner">
      <span>
        Check out my new AI-powered version of this site —{' '}
        <a href="https://ask.archil.io" target="_blank" rel="noopener noreferrer">
          ask.archil.io
        </a>
      </span>
      <button onClick={dismiss} aria-label="Dismiss banner">
        Dismiss
      </button>
    </Banner>
  );
};

export default RedirectBanner;
