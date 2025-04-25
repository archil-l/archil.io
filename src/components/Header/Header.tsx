import React from 'react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Column, Container, Row } from '../Layout';
import { StyledHeader } from './styles';

import { SECTIONS } from '../../constants/consts';
import messages from '../../contents/header';
import Nav from '../Nav/Nav';

const { WELCOME, WORK, PROJECTS } = SECTIONS;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Column size="two">
            <ul className="navbar-list" role="navigation">
              <li className="navbar-item">
                <Nav sectionId={WELCOME} title={messages.welcome} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={WORK} title={messages.work} />
              </li>
              <li className="navbar-item">
                <Nav sectionId={PROJECTS} title={messages.projects} />
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
