import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';

interface NavProps {
  sectionId: string;
  title: MessageDescriptor;
}

const Nav = ({ sectionId, title }: NavProps) => {
  const { formatMessage } = useIntl();

  const handleNavigate = () => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="nav-button" onClick={handleNavigate}>
      {formatMessage(title)}
    </button>
  );
};

export default Nav;
