import React from 'react';

import LogoWithLink from './logo-with-link';

import GitHub from '../../icons/github';
import LinkedIn from '../../icons/linkedin';
import Resume from '../../icons/resume';

import { socialLinks } from '../../content/externalLinks';
import { LinkContainer } from './styles';

const GitHubLink = () => <LogoWithLink Logo={GitHub} href={socialLinks.github} label={'github'} />;

const LinkedInLink = () => (
  <LogoWithLink Logo={LinkedIn} href={socialLinks.linkedin} label={'linkedin'} />
);

const ResumeLink = () => <LogoWithLink Logo={Resume} href={socialLinks.resume} label={'resume'} />;

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
