import React from 'react';
import styled from 'styled-components';
import { sectionIds } from 'constants/consts';
import Column from '../layout/column';
import Container from '../layout/container';
import Row from '../layout/row';
import { MarkdownToJSX } from 'markdown-to-jsx';

export interface SectionProps {
  children?: React.ReactNode;
  sectionId: sectionIds;
  $role?: string;
  markdownOverrides?: MarkdownToJSX.Overrides;
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

export const FullWidthBackground = styled.div<{ $sectionid: sectionIds }>`
  background-color: ${({ theme, $sectionid }) =>
    theme.colors.sections?.[$sectionid].backgroundColor};
  color: ${({ theme, $sectionid }) => theme.colors.sections[$sectionid].color};
  transition: ${({ theme, $sectionid }) => theme.colors.sections[$sectionid].transition};
`;

const SectionWrapper = ({ children, sectionId, $role, size }: SectionProps): JSX.Element => {
  return (
    <FullWidthBackground $sectionid={sectionId}>
      <Container role={$role}>
        <Row>
          <Column size={size || 'two-thirds'}>{children}</Column>
        </Row>
      </Container>
    </FullWidthBackground>
  );
};

export default SectionWrapper;
