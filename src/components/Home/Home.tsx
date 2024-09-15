import React from 'react';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

import Footer from './Footer';
import Main from './Main';


const Home = () => {
  const { appearance, toggleTheme } = React.useContext(ColorSchemeContext);

  React.useEffect(() => {
    document.body.className = appearance;
  }, [appearance]);

  return (
    <React.Fragment>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
