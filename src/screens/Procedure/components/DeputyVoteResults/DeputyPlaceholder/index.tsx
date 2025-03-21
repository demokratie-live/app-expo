import React from "react";
import { PlusIcon } from "@democracy-deutschland/ui";
import styled from "styled-components/native";
import DeputyAvatarPlaceholder from "./components/DeputyAvatarPlaceholder";
import { useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";

const Wrapper = styled.TouchableOpacity<{ width: number }>`
  flex: 1;
  width: ${({ width }) => width}px;
  align-items: center;
  min-height: 310px;
`;

const MemberImageWrapper = styled.View`
  width: 200px;
  align-items: center;
`;

const DeputyDetailsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.default};
  margin-bottom: ${({ theme }) => theme.spaces.small};
  bottom: 0;
  position: absolute;
`;

const PlusWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.vote.community.yes};
  padding: 4px;
  border-radius: 50px;
  margin-right: 4px;
`;

const Plus = styled(PlusIcon).attrs(({ theme }) => ({
  fill: theme.colors.text.secondary,
  width: 10,
  height: 10,
}))``;

const AddText = styled.Text``;

interface Props {
  label: string;
}

export const DeputyVoteResultPlaceholder: React.FC<Props> = ({ label }) => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <Wrapper
      width={width}
      onPress={() => {
        router.push(`/DeputiesEdit`);
      }}
    >
      <MemberImageWrapper>
        <DeputyAvatarPlaceholder width={210} height={268} />
      </MemberImageWrapper>
      <DeputyDetailsWrapper>
        <PlusWrapper>
          <Plus />
        </PlusWrapper>
        <AddText>{label}</AddText>
      </DeputyDetailsWrapper>
    </Wrapper>
  );
};
