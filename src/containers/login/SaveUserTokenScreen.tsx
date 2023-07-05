import {StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import {UiText} from '../../components/ui';

const SaveUserTokenScreen = () => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <UiText>saveUserTokenScreen</UiText>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SaveUserTokenScreen;
