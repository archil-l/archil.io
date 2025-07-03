import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  margin-top: -10px;
  margin-right: 20px;
  margin-bottom: 0px;
  float: right;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const AssistantLogo = (): JSX.Element => {
  return <StyledImg width={100} src="/assistant-portait.png" />;
};
