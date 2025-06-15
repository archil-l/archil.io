import React from 'react';

interface NavProps {
  sectionId: string;
  title: string;
}

const Nav = ({ sectionId, title }: NavProps) => {
  const handleNavigate = () => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button className="nav-button" onClick={handleNavigate}>
      {title}
    </button>
  );
};

export default Nav;
