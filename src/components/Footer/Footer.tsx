import React from 'react';
import ReactIcon from '../../icons/react-icon';
import { StyledFooter } from './styles';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';

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
