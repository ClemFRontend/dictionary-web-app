import { Provider } from 'react-redux';
import store from './app/store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './components/Navigation/Navigation';
import StatusBar from './components/StatusBar/StatusBar'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Sans Serif': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Sans Serif Bold': require('./assets/fonts/inter/Inter-Bold.ttf'),
    'Serif': require('./assets/fonts/lora/Lora-Regular.ttf'),
    'Serif Bold': require('./assets/fonts/lora/Lora-Bold.ttf'),
    'Mono': require('./assets/fonts/inconsolata/Inconsolata-Regular.ttf'),
    'Mono Bold': require('./assets/fonts/inconsolata/Inconsolata-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer onReady={onLayoutRootView}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}