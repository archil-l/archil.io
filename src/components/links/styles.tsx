import styled from 'styled-components';

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LogoWrapper = styled.li`
  margin: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin: 8px;
  }

  a:visited {
    ${({ theme }) => theme.mode === 'dark' && theme.colors.anchor};
  }
`;

export const WrappedImg = styled.img`
  float: right;
  display: block;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContributionList = styled.ul`
  margin-top: 15px;
  margin-left: 20px;
  list-style-position: outside;
`;
