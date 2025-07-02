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

  button.nav-button {
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
