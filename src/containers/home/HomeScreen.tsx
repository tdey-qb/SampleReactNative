import {StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout';
import {UiText} from '../../components/ui';

const HomeScreen = () => {
  return (
    <Layout>
      <View>
        <UiText>HomeScreen</UiText>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
