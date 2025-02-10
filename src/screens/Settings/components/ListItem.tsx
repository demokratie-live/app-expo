import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components/native";
import SvgArrow from "../../../components/Icons/Arrow";

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background.primary};
  height: 44px;
  align-items: center;
  padding-left: 16px;
  padding-right: 18px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.text.seperator};
  font-size: 17px;
`;

const Value = styled.Text<{ arrow: boolean }>`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  padding-right: ${({ arrow }) => (arrow ? 5 : 12)}px;
`;

const Description = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  padding-horizontal: 18px;
  padding-vertical: 8px;
`;

const Arrow = styled(SvgArrow).attrs(({ theme }) => ({
  color: theme.colors.text.tertiary,
  width: 17,
  height: 17,
}))`
  transform: rotate(90deg);
`;

export interface Props extends PropsWithChildren {
  text?: string;
  arrow?: boolean;
  onPress: () => void;
  component?: ReactNode;
  description?: string;
  testID?: string;
}

export const ListItem: React.FC<Props> = ({
  children,
  text,
  arrow = false,
  onPress,
  component,
  description,
  testID,
}) => {
  return (
    <>
      <Wrapper onPress={onPress} testID={testID}>
        {children}
        {!!text && <Value arrow={arrow}>{text}</Value>}
        {!!arrow && <Arrow />}
        {!!component && component}
      </Wrapper>
      {!!description && <Description>{description}</Description>}
    </>
  );
};
