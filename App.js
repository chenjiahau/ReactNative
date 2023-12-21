import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {

    const prepare = async () => {
      try {
        await Font.loadAsync({
          'black': require('./assets/fonts//Roboto-Black.ttf'),
          'blackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
          'bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'boldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
          'italic': require('./assets/fonts/Roboto-Italic.ttf'),
          'light': require('./assets/fonts/Roboto-Light.ttf'),
          'lightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
          'medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'mediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
          'regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'thin': require('./assets/fonts/Roboto-Thin.ttf'),
          'thinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
        });
      }
      catch (error) {
        console.log.error();
      }
      finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      onLayout={onLayout}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.label}>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'bold',
  }
});
