import React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle';
import { Column, Container, Row } from '../layout';
import { StyledHeader } from './styles';

import Nav from '../nav/nav';
import { SectionIds } from 'constants/consts';

const NavLabels = {
  [SectionIds.Welcome]: 'Home',
  [SectionIds.Work]: 'Work',
  [SectionIds.Projects]: 'Projects',
};

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size="two">
            <ul className="navbar-list" role="navigation">
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Welcome} title={NavLabels[SectionIds.Welcome]} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Work} title={NavLabels[SectionIds.Work]} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={SectionIds.Projects} title={NavLabels[SectionIds.Projects]} />
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
