import React from 'react';
import { ColorSchemeContext } from '../../context/color-scheme-context';

import Footer from '../footer/footer';
import Main from './main';
import Header from '../header/header';

const Home: React.FC = () => {
  const { appearance } = React.useContext(ColorSchemeContext);

  React.useEffect(() => {
    document.body.className = appearance;
  }, [appearance]);

  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
