import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useDongle,
  Dongle_300Light,
  Dongle_400Regular,
  Dongle_700Bold
} from "@expo-google-fonts/dongle";
import styled from "styled-components/native";
import theme from './src/config/theme';
import LandingScreen  from './src/screens/langing.screen';

const App = () => {
  const [dongleLoaded] = useDongle({
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold
  });

  if (!dongleLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.color.bg.secondary} />
      <LandingScreen />
    </ThemeProvider>
  );
}

export default App;