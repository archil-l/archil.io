import React from 'react';

import LogoWithLink from './logo-with-link';

import GitHub from '../../icons/github';
import LinkedIn from '../../icons/linkedin';
import Resume from '../../icons/resume';

import hrefs from '../../content/hrefs';
import { LinkContainer } from './styles';

const LINK_LABELS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  resume: 'Resume',
};

const GitHubLink = () => (
  <LogoWithLink Logo={GitHub} href={hrefs.github} label={LINK_LABELS.github} />
);

const LinkedInLink = () => (
  <LogoWithLink Logo={LinkedIn} href={hrefs.linkedin} label={LINK_LABELS.linkedin} />
);

const ResumeLink = () => (
  <LogoWithLink Logo={Resume} href={hrefs.resume} label={LINK_LABELS.resume} />
);

const Links = () => {
  return (
    <LinkContainer>
      <GitHubLink />
      <LinkedInLink />
      <ResumeLink />
    </LinkContainer>
  );
};

export default Links;
