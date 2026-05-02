import React, { useState } from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
  flex-wrap: wrap;

  a {
    color: #fff;
    font-weight: 700;
    text-decoration: underline;
  }

  button {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: #fff;
    border-radius: 4px;
    padding: 2px 10px;
    cursor: pointer;
    font-size: 13px;
    white-space: nowrap;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
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
        I built a new AI-powered version of this site —{' '}
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
