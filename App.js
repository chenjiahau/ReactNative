import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Platform, SafeAreaView, StatusBar } from 'react-native';

const isAndroid = Platform.OS === "android";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="purple"/>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: !isAndroid ? 0 : StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
});

export default App;