import React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';
import { StyledHeader } from './styles';

import Nav from '../nav/nav';
import { SectionIds } from '../../constants/consts';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size="two">
            <ul className="navbar-list" role="navigation">
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Welcome} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Work} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Projects} />
              </li>
            </ul>
          </Column>
          <Column size="one" className="toggle-container">
            <ThemeToggle />
          </Column>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
