import React from 'react';
import styled from 'styled-components/native';
import { Text, Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

const Wrapper = styled.View<{
  value: boolean | 'mixed';
  color?: string;
  disabledColor?: string;
}>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ value, color, disabledColor }) => (value ? color : disabledColor)};
  border-width: 1px;
  border-color: ${({ theme }) => `${theme.colors.text.primary}33`};
`;

const Checkmark = styled.View.attrs<{
  value: boolean | 'mixed';
  disabledColor?: string;
}>(({ value, disabledColor, theme }) => ({
  color: value ? theme.colors.text.primary : disabledColor,
  size: 40,
  backgroundColor: 'transparent',
  name: 'ios-checkmark',
})) <{ value: boolean | 'mixed'; disabledColor?: string }>`
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  padding-bottom: ${() => (Platform.OS === 'ios' ? 1 : 3)}px;
  padding-right: 1px;
`;

interface Props {
  value: boolean | 'mixed';
  color?: string;
  disabledColor?: string;
  disabledCheckmarkColor?: string;
}

const Checkbox: React.FC<Props> = ({
  value,
  color,
  disabledColor,
  disabledCheckmarkColor,
}) => {
  const theme = useTheme();

  return (
    <Wrapper color={color || theme.colors.text.colored} disabledColor={disabledColor ?? theme.colors.text.primary} value={value}>
      <Checkmark value={value} disabledColor={disabledCheckmarkColor ?? theme.colors.text.primary}>
        {value && <Text style={{ color: theme.colors.text.primary }}>✓</Text>}
      </Checkmark>
    </Wrapper>
  )
};

export default Checkbox;
