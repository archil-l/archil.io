import React from 'react';
import styled from 'styled-components';
import { Column, Container, Row } from '../Layout';
import { SectionIds } from 'constants/consts';

export interface SectionProps {
  children?: React.ReactNode;
  $sectionid: SectionIds;
  $role?: string;
  size?:
    | ''
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve'
    | 'one-third'
    | 'two-thirds'
    | 'one-half'
    | 'full';
}

export const FullWidthBackground = styled.div<SectionProps>`
  background-color: ${({ theme, $sectionid }) =>
    theme.colors.sections?.[$sectionid].backgroundColor};
  color: ${({ theme, $sectionid }) => theme.colors.sections[$sectionid].color};
  transition: ${({ theme, $sectionid }) => theme.colors.sections[$sectionid].transition};
`;

const SectionWrapper = ({ children, $sectionid, $role, size }: SectionProps) => {
  return (
    <FullWidthBackground $sectionid={$sectionid}>
      <Container role={$role}>
        <Row>
          <Column size={size || 'two-thirds'}>{children}</Column>
        </Row>
      </Container>
    </FullWidthBackground>
  );
};

export default SectionWrapper;
