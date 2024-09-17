import React from 'react';
import { useIntl } from 'react-intl';

import { Links } from '../Links';
import SectionWrapper from './SectionWrapper'

import messages from '../../contents/home';

const Introduction = () => {
  const { formatMessage } = useIntl();
  return (
    <SectionWrapper sectionid="introduction">
      <h1>{formatMessage(messages.heading)}</h1>
      <p>{formatMessage(messages.aboutPartOne)}</p>
      <p>{formatMessage(messages.aboutPartTwo)}</p>
      <Links />
      <br />
      <p>{formatMessage(messages.underConstruction)}</p>
      <p><s>{formatMessage(messages.nothingYet)}</s></p>
      <p>{formatMessage(messages.whatsDone)}<a href="https://github.com/archil-qb/archil.io" target="_blank" rel="noopener noreferrer">source code</a>.</p>

      <h2>{formatMessage(messages.stayTuned)}</h2>
    </SectionWrapper>);
};

export default Introduction;