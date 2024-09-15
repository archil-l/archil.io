import React from 'react';

import { HomeContextProvider } from '../../context/HomeContext';

import Footer from './Footer';
import Main from './Main';

const Home = () => {
  return (
    <HomeContextProvider>
      <Main />
      <Footer />
    </HomeContextProvider>
  );
}

export default Home;
