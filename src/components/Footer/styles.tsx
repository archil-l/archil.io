import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;

  ${({ theme }) => theme.colors.footer};

  p,
  a {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .footer-logo {
    display: flex;
    @media (min-width: 550px) {
      justify-content: flex-end;
    }
    justify-content: flex-start;
    align-items: center;
    svg {
      width: 32px;
      height: 32px;
      margin-left: 8px;
      margin-top: 8px;
    }
  }
`;
