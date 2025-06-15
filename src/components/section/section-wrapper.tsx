import React from 'react';
import styled from 'styled-components';
import { SectionIds } from 'constants/consts';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';

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
