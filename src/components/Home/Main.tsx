import { useIntl } from 'react-intl';

import { Row } from '../Layout';
import { Links } from '../Links';
import { StyledColumn, StyledContainer } from './styles';

import messages from '../../contents/home';

const Main = () => {
  const { formatMessage } = useIntl();
  return (
    <StyledContainer role="main">
      <Row>
        <StyledColumn size='two-thirds'>
          <h1>{formatMessage(messages.heading)}</h1>
          <p>{formatMessage(messages.aboutPartOne)}</p>
          <p>{formatMessage(messages.aboutPartTwo)}</p>
          <Links />
          <br />
          <p>{formatMessage(messages.underConstruction)}</p>
          <p><s>{formatMessage(messages.nothingYet)}</s></p>
          <p>{formatMessage(messages.whatsDone)}</p>
          <h2>{formatMessage(messages.stayTuned)}</h2>
        </StyledColumn>
      </Row>
    </StyledContainer>
  );
}

export default Main;
