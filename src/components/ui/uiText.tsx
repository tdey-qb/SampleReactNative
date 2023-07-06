import React from 'react';
import { StyleProp, Text, TextStyle, useColorScheme } from 'react-native';

const UiText = ({
  children,
  style,
  ...rest
}: {
  children?: React.ReactNode | undefined;
  style?: StyleProp<TextStyle> | undefined;
}) => {
  const colorScheme = useColorScheme();

  // Define text colors for light and dark mode
  const textColor = colorScheme === 'dark' ? '#FFF' : '#000';

  return (
    <Text style={[style, { color: textColor }]} {...rest}>
      {children}
    </Text>
  );
};

export default UiText;
