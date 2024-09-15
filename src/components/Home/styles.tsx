import React from 'react';
import styled from 'styled-components';

import { Column, Container } from '../Layout';

export const StyledColumn = styled(Column)`
    margin-top: 20%;
`;

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;
    font-size: 1.2rem;

    p {
      margin-top: 15px;
      margin-bottom: 15px;
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
