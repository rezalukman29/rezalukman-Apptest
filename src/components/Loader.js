import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import { width,height } from './Dimensions.js';


export function Loader() {

  const {colors} = useTheme();

  return (
    <View style={{alignSelf: 'center'}}>
         <ContentLoader
            aShape={'square'}
            aSize={'large'}
            pRows={0}
            containerStyles={{borderRadius: 18,marginTop: 12 }}
            tHeight={90}
            tWidth={width * 0.85}
            listSize={5}
            />
    </View>
  );
}

const styles = StyleSheet.create({

});
