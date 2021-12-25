import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import { LinesLoader } from 'react-native-indicator';


export function ActionLoader() {

  const {colors} = useTheme();

  return (
    <View>
      <LinesLoader color={colors.primary}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
