import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useIntl } from 'react-intl';
import SectionWrapper, { SectionProps } from './SectionWrapper';
import Space from '../layout/space';
import { getMarkdownPath } from '../../contents/content-utils';

const Section = ({ $sectionid, $role, size }: SectionProps) => {
  const { locale } = useIntl();
  const [content, setContent] = useState('');

  useEffect(() => {
    const path = getMarkdownPath($sectionid.toLowerCase(), locale);
    if (!path) {
      setContent('');
      return;
    }
    fetch(path)
      .then(res => res.text())
      .then(setContent)
      .catch(() => setContent('Failed to load content.'));
  }, [locale, $sectionid]);

  return (
    <SectionWrapper $sectionid={$sectionid} $role={$role} size={size}>
      <Space height="7rem" />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: props => <img {...props} style={{ width: '300px', maxWidth: '100%' }} />,
        }}
      >
        {content}
      </ReactMarkdown>
      <Space height="7rem" />
    </SectionWrapper>
  );
};

export default Section;
