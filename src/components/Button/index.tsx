import React from 'react';
import styled from 'styled-components/native';

type BackgroundType = 'transparent' | 'blue' | 'lightBlue' | 'red';

interface ContainerProps {
  color: BackgroundType;
  disabled?: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ color, disabled, theme }) => {
    if (disabled) return theme.colors.text.tertiary;
    switch (color) {
      case 'transparent':
        return 'transparent';
      case 'blue':
        return theme.colors.text.colored;
      case 'lightBlue':
        return theme.colors.text.secondary;
      case 'red':
        return theme.colors.text.danger;
    }
  }};
  height: 60px;
  justify-content: center;
  border-radius: 2px;
  margin-top: 11px;
`;

type TextColorType = 'blue' | 'white' | 'red';

interface TextProps {
  color: TextColorType;
}

const ButtonText = styled.Text<TextProps>`
  text-align: center;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'blue':
        return theme.colors.text.colored;
      case 'white':
        return theme.colors.text.primary;
      case 'red':
        return theme.colors.text.danger;
    }
  }};
  font-size: 17px;
  padding-horizontal: 11px;
`;

interface Props {
  text: string;
  onPress: () => void;
  textColor: TextColorType;
  backgroundColor?: BackgroundType;
  disabled?: boolean;
  testID?: string;
}

export const Button: React.FC<Props> = ({
  text,
  onPress,
  textColor,
  backgroundColor = 'transparent',
  disabled,
  testID,
}) => (
  <Container disabled={disabled} onPress={onPress} color={backgroundColor} testID={testID}>
    <ButtonText testID="ButtonText" color={textColor}>
      {text}
    </ButtonText>
  </Container>
);
