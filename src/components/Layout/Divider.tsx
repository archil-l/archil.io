import styled from 'styled-components';

const Divider = styled.hr`
  ${({ theme }) => theme.colors.divider};
  border-radius: 1px;
  width: 80%;
  height: 2px;
  margin: 0 auto;
`;

export default Divider;