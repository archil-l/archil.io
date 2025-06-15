import React from 'react';
import ReactIcon from '../../icons/ReactIcon';
import { Container, Row, Column } from '@components/layout';
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Column size="six">
            <p>&copy; 2025 Archil Lelashvili</p>
          </Column>
          <Column size="six" className="footer-logo">
            <p>
              Powered by{' '}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
              </a>
            </p>
            <ReactIcon />
          </Column>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
