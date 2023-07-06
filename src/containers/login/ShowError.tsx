import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../hooks';

export default function ShowError({text}: {text: string}) {
  const {Layout, Colors, Gutters} = useTheme();

  return (
    <View
      style={[
        Layout.center,
        Gutters.tinyVPadding,
        {backgroundColor: Colors.error},
      ]}>
      <Text style={{color: Colors.white}}>{text}</Text>
    </View>
  );
}
