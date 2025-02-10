import React, { Component } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 68px;
  background-color: ${({ theme }) => `${theme.colors.text.colored}40`};
  justify-content: center;
  align-items: center;
`;

const FillBox = styled.View<{ width: number }>`
  position: absolute;
  align-self: flex-start;
  height: 100%;
  width: ${({ width }) => `${width}%`};
  background-color: ${({ theme }) => theme.colors.text.colored};
`;

const Money = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Description = styled.Text`
  font-size: 13px;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

interface Props {
  target: number;
  occupied: number;
  style?: StyleProp<ViewStyle>;
  moneyTextStyle?: StyleProp<TextStyle>;
  descriptionTextStyle?: StyleProp<TextStyle>;
}

class DonatedBox extends Component<Props> {
  shouldComponentUpdate(np: Props) {
    const { occupied, target } = this.props;
    if (occupied !== np.occupied || target !== np.target) {
      return true;
    }
    return false;
  }

  render() {
    const {
      target,
      occupied,
      style = {},
      moneyTextStyle = {},
      descriptionTextStyle = {},
    } = this.props;
    return (
      <Wrapper style={style}>
        <FillBox width={(occupied / target) * 100} />
        <Money style={moneyTextStyle}>{`${target - occupied}€/Monat fehlen`}</Money>
        <Description style={descriptionTextStyle}>zur nachhaltigen Finanzierung</Description>
      </Wrapper>
    );
  }
}

export default DonatedBox;
