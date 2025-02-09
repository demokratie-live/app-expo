import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { darkCustomTheme, lightCustomTheme } from '../../styles/theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_MODE_KEY = '@democracy/theme-mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

    useEffect(() => {
        AsyncStorage.getItem(THEME_MODE_KEY).then((savedMode) => {
            if (savedMode) {
                setThemeModeState(savedMode as ThemeMode);
            }
        });
    }, []);

    const setThemeMode = (mode: ThemeMode) => {
        setThemeModeState(mode);
        AsyncStorage.setItem(THEME_MODE_KEY, mode);
    };

    const isDark = themeMode === 'dark' || (themeMode === 'system' && systemColorScheme === 'dark');

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode, isDark }}>
            <StyledThemeProvider theme={isDark ? darkCustomTheme : lightCustomTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};