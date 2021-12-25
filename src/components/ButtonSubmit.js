import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Button } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet,View,Image,Dimensions} from 'react-native';

const ButtonSubmit = (props) => {
    const {colors} = useTheme();
  return (

        <Button
          text={props.text}
          size="md"
          rightContent={props.rightContent}
          type="TouchableOpacity"
          status="primary"
          color={props.color}
          onPress={props.onPress}
          width={props.width}
          style={{marginTop: 12}}
          textStyle={{color: colors.background}}
      
    />
   
  );
};

export default ButtonSubmit;