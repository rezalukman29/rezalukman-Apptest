import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import { LinesLoader } from 'react-native-indicator';


export function Loading({loading}) {

  const {colors} = useTheme();
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      {/* <View style={styles.container}> */}
      <LinesLoader color={colors.primary}/>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
   
    padding: 40,
    borderRadius: 8,
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '500',
  }
});
