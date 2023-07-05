import {StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import {UiText} from '../../components/ui';

const SaveUserTokenScreen = () => {
  return (
    <Layout>
      <View style={styles.wrapper}>
        <UiText style={styles.appBar}>Get Started!</UiText>
      </View>

    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    fontSize: 32,
  },
});

export default SaveUserTokenScreen;
