import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet,View,Image,Dimensions} from 'react-native';

const ButtonCat = (props) => {
    const {colors} = useTheme();
  return (

      <Button text={props.text} status="primary" size="sm" textStyle={{fontSize: 12}} outline onPress={props.onPress} style={{marginHorizontal: 3}} color={colors.primary}/>

   
  );
};

export default ButtonCat;