import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useTransition } from 'react';
import i18next from 'i18next';
import Wrapper from '../../components/Wrapper';
import { UiText } from '../../components/ui';
import { useTheme } from '../../hooks';

const SettingsScreen = () => {
  const { Layout, Gutters, Common, darkMode: isDark, Images } = useTheme();
  // const {t} = useTransition();

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <View>
        <UiText>SettingsScreen</UiText>
      </View>
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding,
        ]}>
        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.fullWidth,
            Gutters.smallTMargin,
          ]}>
          <TouchableOpacity
            style={[Common.button.circle, Gutters.regularBMargin]}
            onPress={() =>
              onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
            }>
            <Image
              height={20}
              width={20}
              source={Images.icons.translate}
              style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({});
export default SettingsScreen;
