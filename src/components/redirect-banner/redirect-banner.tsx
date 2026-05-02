import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Banner = styled.div<{ $dismissing: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-size: 14px;
  overflow: hidden;
  transition:
    max-height 0.35s ease,
    opacity 0.35s ease,
    padding 0.35s ease;
  max-height: ${({ $dismissing }) => ($dismissing ? '0' : '60px')};
  opacity: ${({ $dismissing }) => ($dismissing ? '0' : '1')};
  padding: ${({ $dismissing }) => ($dismissing ? '0 20px' : '10px 20px')};

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
const BEFORE_LINK = 'Check out my new AI-powered version of this site 🚀 — ';
const LINK_TEXT = 'ask.archil.io';
const FULL_TEXT = BEFORE_LINK + LINK_TEXT;
const START_DELAY_MS = 600;
const CHAR_INTERVAL_MS = 30;

const RedirectBanner = () => {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== '1');
  const [dismissing, setDismissing] = useState(false);
  const [typed, setTyped] = useState(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!visible) return;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setTyped(n => {
          if (n >= FULL_TEXT.length) {
            clearInterval(interval);
            return n;
          }
          return n + 1;
        });
      }, CHAR_INTERVAL_MS);
      return () => clearInterval(interval);
    }, START_DELAY_MS);
    return () => clearTimeout(startTimer);
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setDismissing(true);
    dismissTimer.current = setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  const beforeLink = FULL_TEXT.slice(0, Math.min(typed, BEFORE_LINK.length));
  const linkTyped = typed > BEFORE_LINK.length ? typed - BEFORE_LINK.length : 0;
  const linkVisible = LINK_TEXT.slice(0, linkTyped);

  return (
    <Banner role="banner" $dismissing={dismissing}>
      <span>
        {beforeLink}
        {linkTyped > 0 && (
          <a href="https://ask.archil.io" target="_blank" rel="noopener noreferrer">
            {linkVisible}
          </a>
        )}
      </span>
      <button onClick={dismiss} aria-label="Dismiss banner">
        Dismiss
      </button>
    </Banner>
  );
};

export default RedirectBanner;
