import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';
import SvgArrow from '../../components/Icons/Arrow';

export const Wrapper = styled.View`
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 5px;
  width: 100%;
`;

export const Header = styled.TouchableOpacity`
  flex-direction: row;
  padding-vertical: 4px;
  padding-horizontal: 18px;
`;

export const Headline = styled.Text`
  flex: 1;
  font-size: 17px;
  margin-right: 10px;
`;

interface CollapseIconProps extends SvgProps {
  open: boolean;
}

export const CollapseIcon = styled(SvgArrow).attrs(({ theme }) =>
  ({ color, width, height }: { color?: string; width?: number; height?: number }) => ({
    color: color ?? theme.colors.text.tertiary,
    width: width ?? 20,
    height: height ?? 20,
  }),
) <CollapseIconProps>`
  align-self: flex-start;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text.seperator};
  margin-top: 9px;
`;

export const Content = styled.View<{ paddingHorizontal: number }>`
  padding-horizontal: ${({ paddingHorizontal }) => paddingHorizontal}px;
  padding-vertical: 8px;
`;
