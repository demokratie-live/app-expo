import React from "react";

import { Government } from "../../components/Icons";
import SvgWahlOMeter from "../../components/Icons/WahlOMeter";
import SvgSettings from "../../components/Icons/Settings";
import SvgFaqAndSupport from "../../components/Icons/FaqAndSupport";
import SvgAbout from "../../components/Icons/About";
import { useDevModeStore } from "../../api/state/dev";
import { Drawer } from "expo-router/drawer";
import { Sidebar } from "src/components/Sidebar/Sidebar";
import { useTheme } from "styled-components/native";

export type SidebarParamList = {
  Bundestag: undefined;
  WahlOMeter: undefined;
  Settings: undefined;
  Faq: undefined;
  About: undefined;
  Abgeordnete: { editMode?: "true" };
  Development: undefined;
  DEV: undefined;
};

const SidebarNavigation = () => {
  const theme = useTheme();
  const { devMode } = useDevModeStore();

  return (
    <Drawer
      // initialRouteName="Bundestag"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.colors.text.secondary,
        drawerType: "slide",
        overlayColor: `${theme.colors.text.primary}1A`,
        drawerLabelStyle: {
          color: theme.colors.text.primary,
        },
        drawerActiveTintColor: theme.colors.text.primary,
        drawerInactiveTintColor: theme.colors.text.primary,
        drawerActiveBackgroundColor: `${theme.colors.text.colored}80`,
      }}
    >
      <Drawer.Screen
        name="[legislaturePeriod]/Procedures"
        options={{
          drawerLabel: "hide/Bundestag",
          drawerIcon: ({ color, size }) => (
            <Government width={size} height={size} color={color} />
          ),
          title: "Bundestag",
        }}
      />
      <Drawer.Screen
        options={{
          drawerLabel: "hide/Wahl-O-Meter",
          drawerIcon: ({ color, size }) => (
            <SvgWahlOMeter width={size} height={size} color={color} />
          ),
          title: "Wahl-O-Meter",
        }}
        name="[legislaturePeriod]/WahlOMeter/index"
      />
      <Drawer.Screen
        options={{
          drawerLabel: "hide/Abgeordnete",
          title: "Abgeordnete",
        }}
        name="[legislaturePeriod]/Deputies"
      />
      <Drawer.Screen
        options={{
          title: "Einstellungen",
          drawerLabel: "Mehr/Einstellungen",
          drawerIcon: ({ color, size }) => (
            <SvgSettings width={size} height={size} color={color} />
          ),
        }}
        name="Settings"
      />
      <Drawer.Screen
        options={{
          title: "FAQ & Support",
          drawerLabel: "Mehr/FAQ & Support",
          drawerIcon: ({ color, size }) => (
            <SvgFaqAndSupport width={size} height={size} color={color} />
          ),
        }}
        name={"Faq"}
      />
      <Drawer.Screen
        options={{
          title: "Über DEMOCRACY",
          drawerLabel: "Mehr/Über DEMOCRACY",
          drawerIcon: ({ color, size }) => (
            <SvgAbout width={size} height={size} color={color} />
          ),
        }}
        name={"About"}
      />
      {devMode ? <Drawer.Screen name="DEV" /> : null}
    </Drawer>
  );
};

export default SidebarNavigation;
