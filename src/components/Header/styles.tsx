import React from 'react';
import styled from 'styled-components';

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
