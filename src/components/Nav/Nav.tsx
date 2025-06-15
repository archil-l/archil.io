import { useIntl } from 'react-intl';
import navMessages from './messages';
import React from 'react';
import { SectionIds } from '../../constants/consts';

interface NavProps {
  sectionId: SectionIds;
}

const Nav = ({ sectionId }: NavProps) => {
  const { formatMessage } = useIntl();
  const handleNavigate = () => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  const labelKey = `${sectionId || SectionIds.Welcome}`.toLowerCase() as keyof typeof navMessages;

  console.log(labelKey, navMessages[labelKey]);

  return (
    <button className="nav-button" onClick={handleNavigate}>
      {formatMessage(navMessages[labelKey])}
    </button>
  );
};

export default Nav;
