//   import "../lib/wdyr";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { client } from "../api/apollo";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "../api/state/theme";
import { RecoilRoot } from "recoil";
import { Stack } from "expo-router";
import { VerificationProvider } from "../api/state/Verification";
import { NotificationsProvider } from "../api/state/notificationPermission";
import { VoteStackParamList } from "./(vote)/_layout";
import { useTheme } from "styled-components/native";

export type RootStackParamList = {
  Sidebar: undefined;
  Introduction?: { done?: string; lastStartWithVersion?: string };
  "(verification)": undefined;
  "(vote)": VoteStackParamList["Voting"];
  Constituency: { goBack?: "true" };
  SyncVotes: undefined;
  Search: undefined;
  Filter: undefined;
  Procedure: { procedureId: string; title: string };
  "DeputyProfile/[id]": { id: string };
  Pdf: { url: string; title: string };
  PushInstructions: undefined;
  NotificationInstruction: { title?: string; procedureId?: string };
  Donate?: { done: () => void };
  Deputies: { editMode: boolean };
  legislaturPeriod: { number: number };
};

const RootStack: React.FC = () => {
  const theme = useTheme();
  return (<Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.text.secondary,
      headerBackTitle: "Zurück",
    }}
  >
    <Stack.Screen
      name="(sidebar)"
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Filter" />
    <Stack.Screen name="Search" options={{ title: "Suche" }} />
    <Stack.Screen name="Donate" options={{ title: "Spenden" }} />
    <Stack.Screen
      name="(verification)"
      options={{ title: "Verifizieren" }}
    />
  </Stack>);
}

export default function Layout() {
  return (
    <VerificationProvider>
      <RecoilRoot>
        <ThemeProvider>
          <ApolloProvider client={client}>
            <NotificationsProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <RootStack />
              </GestureHandlerRootView>
            </NotificationsProvider>
          </ApolloProvider>
        </ThemeProvider>
      </RecoilRoot>
    </VerificationProvider>
  );
}
