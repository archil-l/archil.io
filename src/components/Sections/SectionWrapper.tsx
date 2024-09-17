import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../Layout';

interface SectionProps {
  children: React.ReactNode;
  sectionid: string;
}

export const FullWidthBackground = styled.div<SectionProps>`
  ${({ theme, sectionid }) => theme.colors.sections[sectionid]}
`;

const SectionWrapper = ({ children, sectionid }: SectionProps) => {
  return (
    <FullWidthBackground sectionid={sectionid}>
      <Container>
        <Row>
          <Column size='two-thirds'>
            {children}
          </Column>
        </Row>
      </Container>
    </FullWidthBackground>
  );
};

export default SectionWrapper;