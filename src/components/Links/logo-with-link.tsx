import React from 'react';

import { LogoWrapper } from './styles';

type BrandedLinkProps = {
  Logo: React.FC;
  href: string;
  label: string;
};

const LogoWithLink = ({ Logo, href, label }: BrandedLinkProps) => {
  return (
    <LogoWrapper aria-label={label}>
      <Logo />
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span>{label}</span>
      </a>
    </LogoWrapper>
  );
};

export default LogoWithLink;
