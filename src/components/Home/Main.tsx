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
          <h4>{formatMessage(messages.heading)}</h4>
          <p>{formatMessage(messages.aboutPartOne)}</p>
          <p>{formatMessage(messages.aboutPartTwo)}</p>
          <Links />
          <br />
          <p>{formatMessage(messages.underConstruction)}</p>
          <p>{formatMessage(messages.nothingYet)}</p>
          <h5>{formatMessage(messages.stayTuned)}</h5>
        </StyledColumn>
      </Row>
    </StyledContainer>
  );
}

export default Main;
