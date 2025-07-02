import React from 'react';
import { ColorSchemeContext } from '../../context/color-scheme-context';

import Footer from '../../components/footer/footer';
import Header, { NavItem } from '../../components/header/header';
import { Route, Routes } from 'react-router';
import Home from '../home/home';
import Teaching from '../teaching/teaching';
import Agent from '../agent/agent';
import { PageIds, sectionIds } from '../../constants/consts';

const App: React.FC = () => {
  const { appearance } = React.useContext(ColorSchemeContext);

  React.useEffect(() => {
    document.body.className = appearance;
  }, [appearance]);

  const navList: NavItem[] = [
    { section: sectionIds.Welcome, path: `/${PageIds.Home}` },
    { section: sectionIds.Work, path: `/${PageIds.Home}` },
    { section: sectionIds.Projects, path: `/${PageIds.Home}` },
    { section: sectionIds.Teaching, path: `/${PageIds.Teaching}` },
  ];

  return (
    <React.Fragment>
      <Header {...{ navList }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/content/*" element={<div>Error</div>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
