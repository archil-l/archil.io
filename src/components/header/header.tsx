import React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';
import { StyledHeader } from './styles';

import Nav from '../nav/nav';
import { SectionIds } from '../../constants/consts';

type HeaderProps = {
  navList?: { sectionId: SectionIds; label: string }[];
};

const Header = ({ navList }: HeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size="two">
            <ul className="navbar-list" role="navigation">
              {navList?.map(navItem => (
                <li className="navbar-item" key={navItem.sectionId}>
                  <Nav sectionId={navItem.sectionId} />
                </li>
              ))}
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
