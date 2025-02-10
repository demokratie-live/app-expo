import { DefaultTheme as UiTheme } from '@democracy-deutschland/ui';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

export const tabNavigationScreenOptions = (theme: UiTheme): MaterialTopTabNavigationOptions => ({
  tabBarScrollEnabled: false,
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.text.secondary,
  },
  tabBarActiveTintColor: theme.colors.text.secondary,
  tabBarInactiveTintColor: theme.colors.text.secondary,
  tabBarStyle: {
    backgroundColor: theme.colors.primary,
  },
});
