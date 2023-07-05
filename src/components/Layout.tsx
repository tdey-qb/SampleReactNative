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
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        style={{
          ...styles.scrollView,
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});

export default Layout;
