import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';

export function IconButton({name}) {
  const {colors} = useTheme();
  return (
 
      <Ionicons  name={name} color={colors.background} size={20} />
  
  );
}

