import React from 'react';

import { LogoWrapper } from './styles';
import linkMessages from './messages';
import { useIntl } from 'react-intl';

type BrandedLinkProps = {
  Logo: React.FC;
  href: string;
  label: 'github' | 'linkedin' | 'resume';
};

const LogoWithLink = ({ Logo, href, label }: BrandedLinkProps) => {
  const { formatMessage } = useIntl();
  return (
    <LogoWrapper aria-label={label}>
      <Logo />
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span>{formatMessage(linkMessages[label])}</span>
      </a>
    </LogoWrapper>
  );
};

export default LogoWithLink;
