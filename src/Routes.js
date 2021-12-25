import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {darkTheme} from './themes/dark';
import {ThemeContext} from './contexts/ThemeContext';
import {lightTheme} from './themes/light';
import {createStackNavigator} from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';
import { MainStackNavigator } from './navigators/MainStackNavigator';

const RootStack = createStackNavigator();

export const Routes = () =>  {
  
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);


  function renderScreens() {
    
 
    return  (
       
            <RootStack.Screen name={'Mainstack'} component={MainStackNavigator} />
    );
  }
  return (

        <ThemeContext.Provider value={switchTheme}>
            <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
                <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
                      <RootStack.Navigator
                          screenOptions={{
                            headerShown: false,
                            animationEnabled: false,
                          }}>
                            {renderScreens()}
                      </RootStack.Navigator>
                </NavigationContainer>
        </ThemeContext.Provider>

  );
}

