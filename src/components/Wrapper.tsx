import { SafeAreaView, ScrollView, useColorScheme } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '../hooks';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { Layout, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaView
      style={[
        Layout.fill,
        Layout.fullHeight,
        { backgroundColor: colors.card },
      ]}>
      <ScrollView
        style={{
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;
