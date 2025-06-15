import styled from 'styled-components';

type SpaceProps = {
  height?: string;
};

const Space = styled.hr<SpaceProps>`
  height: ${({ height }) => height || '1rem'};
  visibility: hidden;
  margin: 0;
`;

export default Space;
