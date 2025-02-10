import styled from 'styled-components/native';

const ChartNote = styled.Text`
  align-self: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-align: center;
  padding-top: 36px;
  padding-bottom: ${({ theme }) => theme.spaces.default};
  padding-horizontal: ${({ theme }) => theme.spaces.default};
`;

export default ChartNote;
