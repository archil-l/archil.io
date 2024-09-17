import React from 'react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

import { Column, Container, Row } from '../Layout';
import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size='full'>
            <ThemeToggle />
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );

};

export default Header;

