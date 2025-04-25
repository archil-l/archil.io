import React from 'react';
import { useIntl } from 'react-intl';

import SectionWrapper, { SectionProps } from './SectionWrapper';

import messages from '../../contents/projects';
import Space from '../Layout/Space';

const Projects = ({ $sectionid, $role, size }: SectionProps) => {
  const { formatMessage } = useIntl();
  return (
    <SectionWrapper $sectionid={$sectionid} $role={$role} size={size}>
      <Space height="7rem" />
      <h2 id={$sectionid}>{formatMessage(messages.heading)}</h2>
      <p>{formatMessage(messages.aboutPartOne)}</p>

      <Space height="20rem" />
      <br />
    </SectionWrapper>
  );
};

export default Projects;
