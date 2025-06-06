import React from 'react';

import LogoWithLink from './LogoWithLink';

import GitHub from '../../icons/GitHub';
import LinkedIn from '../../icons/LinkedIn';
import Resume from '../../icons/Resume';

import hrefs from '../../contents/hrefs';
import messages from '../../contents/links';
import { LinkContainer } from './styles';

const GitHubLink = () => (
  <LogoWithLink Logo={GitHub} href={hrefs.github} message={messages.github} />
);

const LinkedInLink = () => (
  <LogoWithLink Logo={LinkedIn} href={hrefs.linkedin} message={messages.linkedin} />
);

const ResumeLink = () => (
  <LogoWithLink Logo={Resume} href={hrefs.resume} message={messages.resume} />
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
