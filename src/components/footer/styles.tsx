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
`;
