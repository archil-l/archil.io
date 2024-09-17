import React from 'react';

import { MessageDescriptor, useIntl } from 'react-intl';

import { LogoWrapper } from './styles';

type BrandedLinkProps = {
  Logo: React.FC,
  href: string,
  message: MessageDescriptor,
}

const LogoWithLink = ({ Logo, href, message }: BrandedLinkProps) => {
  const { formatMessage } = useIntl();

  return (
    <LogoWrapper aria-label={formatMessage(message)}>
      <Logo />
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span>{formatMessage(message)}</span>
      </a>
    </LogoWrapper>
  );
};

export default LogoWithLink;