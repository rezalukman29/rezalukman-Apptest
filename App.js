import React from 'react';


import SplashScreen from './src/screens/SplashScreen';

import {StatusBar} from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './src/redux/store/store';
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import {Routes} from './src/Routes';





export default function App() {
  


  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);




  const [loaded] = useFonts({
    Ubuntu_400Regular: Ubuntu_400Regular,
    Ubuntu_700Bold: Ubuntu_700Bold,
    Ubuntu_500Medium: Ubuntu_500Medium,
    Ubuntu_300Light: Ubuntu_300Light


  });
  
  if (!loaded) {
    return null;
  }



  return (
  
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
         
                <Routes/>
            </PersistGate>
        </Provider>

  );
}