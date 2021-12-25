import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import {
      TextInput
} from "../components/TextInput";
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet,View,Image,Dimensions} from 'react-native';

const InputText = (props,name) => {
    const {colors} = useTheme();
  return (

        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={(value) => props.onChangeText(value)}
          rightContent={props.rightContent}
          containerStyle={{backgroundColor: colors.background}}
          maxLength={props.maxLength}
          
      
    />
   
  );
};

export default InputText;