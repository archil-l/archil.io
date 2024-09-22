import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;

  ${({ theme }) => theme.colors.header};

  .row {
    display: flex;
    justify-content: flex-end;
  }

  .navbar-list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navbar-item {
    margin: 0;
  }

  button.nav-button {
    border: none;
    margin: 0;
    padding: 0 20px 0 20px;
    color: ${({ theme }) => theme.colors.header.color};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      
    }
  }

  .toggle-container {  
  margin-top: 6px  
  }


`;
