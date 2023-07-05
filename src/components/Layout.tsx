import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Layout = ({children}: {children: React.ReactNode}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView
        style={{
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Layout;
