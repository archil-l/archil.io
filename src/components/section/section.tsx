import React from 'react';
import { useIntl } from 'react-intl';
import type { HTMLAttributes } from 'react';

import Markdown from '../markdown/markdown';
import Space from '../layout/space';
import { useContent } from '../../hooks/use-content';
import { getMarkdownPath } from '../../content/content-utils';

import SectionWrapper, { SectionProps } from './section-wrapper';

const Section = ({ $sectionid, $role, size }: SectionProps) => {
  const { locale } = useIntl();
  const path = getMarkdownPath($sectionid.toLowerCase(), locale);
  const { content, isLoading, isError } = useContent(path);

  return (
    <SectionWrapper {...{ $sectionid, $role, size }}>
      <Space height="7rem" />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Failed to load content.</div>
      ) : (
        <Markdown
          components={{
            img: (props: HTMLAttributes<HTMLImageElement>) => (
              <img {...props} style={{ width: '300px', maxWidth: '100%' }} />
            ),
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
