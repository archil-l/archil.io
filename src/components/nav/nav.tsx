import React from 'react';
import { useIntl } from 'react-intl';

import navMessages from './messages';
import { sectionIds } from '../../constants/consts';
import { NavItem } from 'components/header/header';
import { Link } from 'react-router';

interface NavProps {
  navItem: NavItem;
}

const Nav = ({ navItem }: NavProps) => {
  const { formatMessage } = useIntl();

  const label =
    navItem?.label ||
    formatMessage(
      navMessages[
        `${navItem.section || sectionIds.Welcome}`.toLowerCase() as keyof typeof navMessages
      ]
    );

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = navItem.section;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link className="nav-button" to={{ pathname: navItem.path }} onClick={handleScroll}>
      {label}
    </Link>
  );
};

export default Nav;
