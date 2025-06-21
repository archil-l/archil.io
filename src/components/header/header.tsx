import React from 'react';

import ThemeToggle from '../theme-toggle/theme-toggle';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';
import { StyledHeader } from './styles';

import Nav from '../nav/nav';
import { PageIds, sectionIds } from '../../constants/consts';

export type NavItem = {
  label: string;
  path: `/${PageIds}`;
  section: sectionIds;
};

type HeaderProps = {
  navList?: NavItem[];
};

const Header = ({ navList }: HeaderProps) => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size="two">
            <ul className="navbar-list" role="navigation">
              {navList?.map(navItem => (
                <li className="navbar-item" key={navItem.section}>
                  <Nav {...{ navItem }} />
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
