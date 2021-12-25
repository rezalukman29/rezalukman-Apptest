import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export function FilledButton({title, style, onPress,disabled}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: colors.primary}]}
      onPress={onPress} disabled={disabled}>
        
      <Text style={[styles.text, {color: colors.textButton}]}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16,
  },
});
