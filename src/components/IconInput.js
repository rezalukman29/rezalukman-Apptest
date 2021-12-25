import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';

export function IconInput({name,onPress,color}) {
  const {colors} = useTheme();
  return (
 
      <Ionicons  name={name} color={colors.primary} size={24} style={{paddingHorizontal: 6}} onPress={onPress} />
  
  );
}

