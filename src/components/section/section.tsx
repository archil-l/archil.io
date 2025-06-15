import React from 'react';
import { useIntl } from 'react-intl';
import type { HTMLAttributes } from 'react';

import Space from '../layout/space';
import { useContent } from '../../hooks/use-content';
import { getContentPath } from '../../utils/content-utils';

import SectionWrapper, { SectionProps } from './section-wrapper';
import Markdown from 'markdown-to-jsx';
import Links from '../links/links';

const Section = ({ $sectionid, $role, size }: SectionProps) => {
  const { locale } = useIntl();
  const path = getContentPath({ filename: $sectionid.toLowerCase(), lang: locale });
  const { content, isLoading, isError } = useContent(path);

  return (
    <SectionWrapper {...{ $sectionid, $role, size }}>
      <Space height="5rem" />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Failed to load content.</div>
      ) : (
        <Markdown
          options={{
            overrides: {
              img: {
                component: ({ ...props }: HTMLAttributes<HTMLImageElement>) => (
                  <img
                    {...props}
                    style={{
                      float: 'right',
                      display: 'block',
                      margin: '10px',
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
                      width: '350px',
                      maxWidth: '100%',
                    }}
                  />
                ),
              },
              WelcomeLinks: {
                component: () => <Links />,
              },
              SectionHeader: {
                component: ({ children }: { children: React.ReactNode }) => (
                  <h2 id={$sectionid}>{children}</h2>
                ),
              },
              SiteHeader: {
                component: ({ children }: { children: React.ReactNode }) => (
                  <h1 id={$sectionid}>{children}</h1>
                ),
              },
            },
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
