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
    <LogoWrapper>
      <Logo />
      <a href={href} target="_blank" rel="noopener noreferrer">
        {formatMessage(message)}
      </a>
    </LogoWrapper>
  );
};

export default LogoWithLink;