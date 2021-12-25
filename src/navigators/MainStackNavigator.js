import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import {ThemeContext } from '../contexts/ThemeContext';
import {useTheme} from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';



const MainStack = createStackNavigator();


export function MainStackNavigator() {
  const switchTheme = React.useContext(ThemeContext);
  const {colors} = useTheme();
  return (
    <MainStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      >
     
            <MainStack.Screen name={'Home'} component={HomeScreen} options={{
                title:'',
                headerStyle: {
                  backgroundColor: colors.background,
                  elevation: 0,
                  shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                },
                headerRight: null,

            }}/>





  

      
    </MainStack.Navigator>
  );
}
