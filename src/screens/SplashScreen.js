import React, {useEffect} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import {useTheme} from '@react-navigation/native';



const SplashScreen = () => {
  

  const {colors} = useTheme();
  return <View style={[styles.container, {backgroundColor: colors.background}]}>

{/* <Image
        style={{width: 300,height: 200,marginBottom: -40}}
        source={require('../assets/Wander_light.png')}
      /> */}
  </View>;
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
});
