import React from 'react';
import styled from 'styled-components/native';
import { Procedure } from '../../../__generated__/graphql';

const Wrapper = styled.View``;

const StateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 22px;
`;

interface IconProps {
  currentStatus: Procedure['currentStatus'];
  state: string;
}

const Icon = styled.View<IconProps>`
  width: 19px;
  height: 19px;
  border-radius: 9px;
  background-color: ${({ currentStatus, state, theme }) => {
    if (state === '2. Beratung / 3. Beratung' || state === '1. Beratung') {
      return theme.colors.text.tertiary;
    }
    return currentStatus === state ? theme.colors.text.colored : theme.colors.text.colored;
  }};
`;

const State = styled.Text`
  font-size: 13px;
  padding-left: 14px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

const Line = styled.View`
  position: absolute;
  width: 1px;
  left: 9px;
  top: 18px;
  bottom: 22px;
  background-color: ${({ theme }) => theme.colors.text.seperator};
`;

interface Props {
  history: Procedure['currentStatusHistory'];
  currentStatus: Procedure['currentStatus'];
}

export const History: React.FC<Props> = ({ history, currentStatus }) => {
  return (
    <Wrapper>
      <Line />
      {history.map(state => (
        <StateWrapper key={state}>
          <Icon currentStatus={currentStatus} state={state} />
          <State>{state}</State>
        </StateWrapper>
      ))}
    </Wrapper>
  );
};
