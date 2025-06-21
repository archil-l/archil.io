import React from 'react';
import { ColorSchemeContext } from '../../context/color-scheme-context';

import Footer from '../../components/footer/footer';
import Header, { NavItem } from '../../components/header/header';
import { Route, Routes } from 'react-router';
import Home from '../home/home';
import Teaching from '../teaching/teaching';
import { PageIds, sectionIds } from '../../constants/consts';

const App: React.FC = () => {
  const { appearance } = React.useContext(ColorSchemeContext);

  React.useEffect(() => {
    document.body.className = appearance;
  }, [appearance]);

  const navList: NavItem[] = [
    { label: 'Home', path: `/${PageIds.Home}`, section: sectionIds.Welcome },
    { label: 'Work', path: `/${PageIds.Home}`, section: sectionIds.Work },
    { label: 'Projects', path: `/${PageIds.Home}`, section: sectionIds.Projects },
    { label: 'Teaching', path: `/${PageIds.Teaching}`, section: sectionIds.Teaching },
  ];

  return (
    <React.Fragment>
      <Header {...{ navList }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/content/*" element={<div>Error</div>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
