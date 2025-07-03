import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.header.backgroundColor};
  color: ${({ theme }) => theme.colors.header.color};
  transition: ${({ theme }) => theme.colors.header.transition};

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

  a.nav-button {
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border: none;
    margin: 0;
    padding: 0 20px 0 20px;
    color: ${({ theme }) => theme.colors.header.color};
    transition: color 1s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: color 1s;
    }
  }

  .toggle-container {
    margin-top: 6px;
  }
`;
