import React from "react";
import {
  ColorValue,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native"
import { component } from "../../../node_modules/react-native-rapi-ui/constants/colors";
// import { useTheme } from "../../../node_modules/react-native-rapi-ui/provider/ThemeProvider";
import {useTheme} from '@react-navigation/native';
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

interface Props extends TextInputProps {
  containerStyle?: ViewStyle;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
  maxLenght?: number;
  
}

const StyledTextInput: React.FC<Props> = (props: Props) => {
  const {colors} = useTheme();
  // const { theme } = useTheme();
  const {
    maxLenght,
    containerStyle,
    leftContent,
    rightContent,
    borderColor,
    borderWidth = containerStyle?.borderWidth || 1,
    borderRadius = containerStyle?.borderRadius || 8,

    ...otherProps
  } = props;

  return (
    <View
      style={{
        ...containerStyle,
        borderColor: 'gray',
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        flexDirection: containerStyle?.flexDirection || "row",
        paddingHorizontal: containerStyle?.paddingHorizontal || 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {leftContent}
      <TextInput
        {...otherProps}
        placeholderTextColor={'gray'}
       
        style={{
          flex: 1,
          color: colors.text,
          paddingVertical: containerStyle?.padding || 10,
          fontFamily: "Ubuntu_400Regular",
          marginLeft: leftContent ? 5 : 0,
          marginRight: rightContent ? 5 : 0,
        }}
      />
      {rightContent}
    </View>
  );
};
export default StyledTextInput;
