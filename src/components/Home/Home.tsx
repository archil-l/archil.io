import React from 'react';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

import Footer from './Footer';
import Main from './Main';
import Header from './Header';


const Home = () => {
  const { appearance, toggleTheme } = React.useContext(ColorSchemeContext);

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
}

export default Home;
