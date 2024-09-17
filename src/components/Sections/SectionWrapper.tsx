import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../Layout';

export interface SectionProps {
  children?: React.ReactNode;
  $sectionid: string;
  $role?: string;
}

export const FullWidthBackground = styled.div<SectionProps>`
  ${({ theme, $sectionid }) => theme.colors.sections[$sectionid]}
`;

const SectionWrapper = ({ children, $sectionid, $role }: SectionProps) => {
  return (
    <FullWidthBackground $sectionid={$sectionid}>
      <Container role={$role}>
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