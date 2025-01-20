import React from 'react';
import { useIntl } from 'react-intl';

import { Links } from '../Links';
import SectionWrapper, { SectionProps } from './SectionWrapper'

import messages from '../../contents/home';
import Space from '../Layout/Space';

const Welcome = ({ $sectionid, $role }: SectionProps) => {
  const { formatMessage } = useIntl();
  return (
    <SectionWrapper $sectionid={$sectionid} $role={$role}>
      <Space height="7rem" />
      <h1 id={$sectionid}>{formatMessage(messages.heading)}</h1>
      <p>{formatMessage(messages.aboutPartOne)}</p>
      <p>{formatMessage(messages.aboutPartTwo)}</p>
      <Links />
      <br />
      <p>{formatMessage(messages.whatsDone)}<a href="https://github.com/archil-l/archil.io" target="_blank" rel="noopener noreferrer">source code</a>.</p>
      <Space height="7rem" />
    </SectionWrapper >);
};

export default Welcome;