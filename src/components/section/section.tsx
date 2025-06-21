import React from 'react';
import { useIntl } from 'react-intl';

import Space from '../layout/space';
import { useContent } from '../../hooks/use-content';
import { getContentPath } from '../../utils/content-utils';

import SectionWrapper, { SectionProps } from './section-wrapper';
import Markdown from 'markdown-to-jsx';

const Section = ({ sectionId, $role, markdownOverrides, size }: SectionProps) => {
  const { locale } = useIntl();
  const path = getContentPath({ filename: sectionId.toLowerCase(), lang: locale });
  const { content, isLoading, isError } = useContent(path);

  return (
    <SectionWrapper {...{ sectionId, $role, size }}>
      <Space height="5rem" />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Failed to load content.</div>
      ) : (
        <Markdown
          options={{
            overrides: markdownOverrides || {},
          }}
        >
          {content}
        </Markdown>
      )}
      <Space height="7rem" />
    </SectionWrapper>
  );
};

export default Section;
