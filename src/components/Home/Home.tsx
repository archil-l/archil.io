import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

import messages from '../../contents/home';

import Links from '../Links/Links';
import Container from '../Layout/Container';
import Row from '../Layout/Row';
import { StyledColumn } from './styles';
import Footer from './Footer';
import Main from './Main';

const Home = () => {
  return (
    <Fragment>
      <Main />
      <Footer />
    </Fragment>
  );
}

export default Home;
