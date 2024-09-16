import React from 'react';
import styled from 'styled-components';

import { Container } from '../Layout';

export const StyledFooter = styled.footer`
  margin-top: 15%;
  width: 100%;
  font-size: 1.2rem;

  ${({ theme }) => theme.colors.footer};

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;

  ${({ theme }) => theme.colors.header};

  .column {
    display: flex;
    flex-direction: row-reverse;
  }

`;

export const MainWrapper = styled(Container)`

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .column {
    margin-top: 20%;
  }
`;
