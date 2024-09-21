import React from 'react';
import styled from 'styled-components';


export const StyledFooter = styled.footer`
  width: 100%;
  font-size: 1.2rem;

  ${({ theme }) => theme.colors.footer};

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .footer-logo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg {
      width: 32px;
      height: 32px;
      margin-left: 8px;
      margin-top: 8px;
    }
  }

`;
