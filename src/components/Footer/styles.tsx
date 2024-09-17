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
`;
