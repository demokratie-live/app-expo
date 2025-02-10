import React from 'react';
import styled from 'styled-components/native';

const CIRCLE_SIZE = 210;

const Wrapper = styled.View`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text.tertiary};
  justify-content: center;
  align-items: center;
`;

const Headline = styled.Text`
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Subline = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.badge};
`;

interface Props {
  subline: string;
}

const WahlOMeterLogo: React.FC<Props> = ({ subline }) => (
  <Wrapper>
    <Headline>Wahl-O-Meter</Headline>
    {subline && <Subline>{subline}</Subline>}
  </Wrapper>
);

export default WahlOMeterLogo;
