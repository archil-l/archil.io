import React from 'react';
import { ColorSchemeContext } from '../../context/color-scheme-context';

import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Route, Routes } from 'react-router';
import Home from '../home/home';
import Teaching from '../teaching/teaching';

const App: React.FC = () => {
  const { appearance } = React.useContext(ColorSchemeContext);

  React.useEffect(() => {
    document.body.className = appearance;
  }, [appearance]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
