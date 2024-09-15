import React from 'react';
import { ColorSchemeContext } from '../../context/ColorSchemeContext';

import Footer from './Footer';
import Main from './Main';


const Home = () => {
  const { theme, toggleTheme } = React.useContext(ColorSchemeContext);

  console.log(theme);

  return (
    <React.Fragment>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
