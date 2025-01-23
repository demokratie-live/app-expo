import React from "react";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { SearchBar, PlusIcon } from "@democracy-deutschland/ui";

import { DeputyListController } from "./DeputyListController";
import styled from "styled-components/native";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  favorizedDeputiesEditModeState,
  favorizedDeputiesState,
} from "../../api/state/favorizedDeputies";
import { theme } from "../../styles/theme";
import { parlamentState } from "../../api/state/parlament";
import { SidebarParamList } from "../../app/(sidebar)/_layout";
import { useLocalSearchParams } from "expo-router";

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background.primary};
  flex-grow: 1;
`;

const Edit = styled.TouchableOpacity`
  margin-right: ${({ theme }) => theme.spaces.small};
`;

const EditText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

type RouteProps = RouteProp<SidebarParamList, "Abgeordnete">;

export const AbgeordneteScreen: React.FC = () => {
  const searchParams = useLocalSearchParams<SidebarParamList["Abgeordnete"]>();
  const route = useRoute<RouteProps>();
  const [editMode, setEditMode] = useRecoilState(
    favorizedDeputiesEditModeState
  );
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigation = useNavigation();
  const parlamentIdentifier = useRecoilValue(parlamentState);
  const favorizedDeputies = useRecoilValue(
    favorizedDeputiesState(parlamentIdentifier)
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Edit
          onPress={() =>
            !searchParams.editMode
              ? setEditMode((curEditMode) => !curEditMode)
              : navigation.goBack()
          }
        >
          {!!searchParams.editMode || editMode ? (
            <EditText>Fertig</EditText>
          ) : (
            <PlusIcon
              width={17}
              height={17}
              fill={theme.colors.text.secondary}
            />
          )}
        </Edit>
      ),
    });
  }, [navigation, route, editMode, setEditMode]);

  if (!favorizedDeputies) {
    return null;
  }

  return (
    <Wrapper>
      <SearchBar
        textInput={{
          autoFocus: false,
          placeholder: "Name, Fraktion, Wahlkreis eingeben",
          onChangeText: setSearchTerm,
        }}
      />
      <DeputyListController
        editMode={editMode || !!searchParams.editMode}
        searchTerm={searchTerm}
        favorizedDeputies={favorizedDeputies}
      />
    </Wrapper>
  );
};
