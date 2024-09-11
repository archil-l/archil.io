import React from 'react';
import { useIntl } from 'react-intl';

import messages from '../../contents/home';

import Links from '../Links/Links';
import Container from '../Layout/Container';
import Row from '../Layout/Row';
import { StyledColumn } from './styles';

const Home = () => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Row>
        <StyledColumn size='two-thirds'>
          <h4>{formatMessage(messages.heading)}</h4>
          <p>{formatMessage(messages.aboutPartOne)}</p>
          <p>{formatMessage(messages.aboutPartTwo)}</p>
          <Links />
        </StyledColumn>
      </Row>
    </Container>
  );
}

export default Home;
