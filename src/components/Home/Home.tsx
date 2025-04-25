import React from 'react';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

import Footer from '../Footer/Footer';
import Main from './Main';
import Header from '../Header/Header';

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
