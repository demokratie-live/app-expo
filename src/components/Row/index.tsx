import React from "react";
import styled from "styled-components/native";

const RowWrapper = styled.TouchableHighlight.attrs(({ theme }) => ({
  underlayColor: `${theme.colors.text.colored}1A`,
}))`
  padding-vertical: 14px;
  padding-horizontal: 18px;
  border-bottom-color: ${({ theme }) => theme.colors.text.seperator};
  border-bottom-width: 1px;
`;

interface Props extends React.PropsWithChildren {
  onPress: () => void;
  testID?: string;
}

export const Row: React.FC<Props> = ({ children, onPress, testID }) => (
  <RowWrapper onPress={onPress} testID={testID}>
    {children}
  </RowWrapper>
);
