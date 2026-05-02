import React from 'react';
import { ColorSchemeContext } from '../../context/color-scheme-context';

import Footer from '../../components/footer/footer';
import Header, { NavItem } from '../../components/header/header';
import RedirectBanner from '../../components/redirect-banner/redirect-banner';
import { Navigate, Route, Routes } from 'react-router';
import Home from '../home/home';
import Teaching from '../teaching/teaching';
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
      <RedirectBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/content/*" element={<div>Error</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
