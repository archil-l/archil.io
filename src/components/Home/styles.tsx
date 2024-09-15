import React from 'react';
import styled from 'styled-components';

import { Column, Container } from '../Layout';

export const StyledColumn = styled(Column)`
    margin-top: 20%;
`;

export const StyledFooter = styled.footer`
    margin-top: 15%;
    width: 100%;
    font-size: 1.2rem;

    p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
`;

export const StyledContainer = styled(Container)`
  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
  }

`;
