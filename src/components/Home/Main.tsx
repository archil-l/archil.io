import { useIntl } from 'react-intl';

import { Column, Row } from '../Layout';
import { Links } from '../Links';
import { MainWrapper } from './styles';

import messages from '../../contents/home';

const Main = () => {
  const { formatMessage } = useIntl();
  return (
    <MainWrapper role="main">
      <Row>
        <Column size='two-thirds'>
          <h1>{formatMessage(messages.heading)}</h1>
          <p>{formatMessage(messages.aboutPartOne)}</p>
          <p>{formatMessage(messages.aboutPartTwo)}</p>
          <Links />
          <br />
          <p>{formatMessage(messages.underConstruction)}</p>
          <p><s>{formatMessage(messages.nothingYet)}</s></p>
          <p>{formatMessage(messages.whatsDone)}</p>
          <h2>{formatMessage(messages.stayTuned)}</h2>
        </Column>
      </Row>
    </MainWrapper>
  );
}

export default Main;
