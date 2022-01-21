import React from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from "react-native";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const LandingScreen = () => {
  return (
    <SafeArea>
    </SafeArea>
  );
}

export default LandingScreen;
