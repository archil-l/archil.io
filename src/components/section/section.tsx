import React from 'react';
import { useIntl } from 'react-intl';
import Space from '../layout/space';

import SectionWrapper, { SectionProps } from './section-wrapper';
import navMessages from '../nav/messages';

type SectionHeaderProps = { sectionId: string; label: string };

const SiteHeader = ({ sectionId, label }: SectionHeaderProps) => <h1 id={sectionId}>{label}</h1>;

const Section = ({ sectionId, $role, size, children }: SectionProps) => {
  const { formatMessage } = useIntl();

  return (
    <SectionWrapper {...{ sectionId, $role, size }}>
      <Space height="5rem" />
      <SiteHeader sectionId={sectionId} label={formatMessage(navMessages[sectionId])} />
      {children}
      <Space height="7rem" />
    </SectionWrapper>
  );
};

export default Section;
