import React from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router';

import navMessages from './messages';
import { sectionIds } from '../../constants/consts';
import { NavItem } from 'components/header/header';

interface NavProps {
  navItem: NavItem;
}

const Nav = ({ navItem }: NavProps) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Update the URL without reloading the page
    if (location.pathname !== navItem.path) {
      navigate(navItem.path);
    }
    // This assumes that the sections are present in the DOM

    const section = document.getElementById(navItem.section || sectionIds.Welcome);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  const labelKey =
    `${navItem.section || sectionIds.Welcome}`.toLowerCase() as keyof typeof navMessages;

  return (
    <button className="nav-button" onClick={handleNavigate}>
      {formatMessage(navMessages[labelKey])}
    </button>
  );
};

export default Nav;
