import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import Wrapper from '../../components/Wrapper';
import {UiText} from '../../components/ui';
import {useCredentials, useTheme} from '../../hooks';
import Brand from '../../components/brand/Brand';
import {Credentials} from '../../state/storeInterface';
import ShowError from './ShowError';

const SaveUserTokenScreen = () => {
  const {Layout, Colors, Gutters, Fonts} = useTheme();
  const {saveCredentials, loading: isLoading, error} = useCredentials();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      realm: '',
      userToken: '',
    },
  });

  const onSubmit = (data: Credentials) => {
    saveCredentials({realm: data.realm, userToken: data.userToken});
  };

  return (
    <Wrapper>
      {error && <ShowError text={error} />}
      {errors.realm && <ShowError text={'Realm is required.'} />}
      {errors.userToken && <ShowError text={'User Token is required.'} />}

      <Brand />

      <View
        style={[Layout.center, Gutters.regularTMargin, Gutters.regularBMargin]}>
        <UiText style={Fonts.textRegular}>Get Started!</UiText>
      </View>

      <View style={[Gutters.smallHPadding, {...styles.container}]}>
        <Text style={[Fonts.textSmall, Gutters.tinyBMargin]}>
          Your Quickbase Realm
        </Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={[
                {
                  backgroundColor: Colors.inputBackground,
                  color: Colors.textGray800,
                },
                styles.input,
              ]}
              onBlur={onBlur}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="example.quickbase.com"
            />
          )}
          name="realm"
          rules={{required: true}}
        />

        <Text style={[Fonts.textSmall, Gutters.tinyBMargin]}>
          Quickbase User Token
        </Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              secureTextEntry={true}
              style={[
                {
                  backgroundColor: Colors.inputBackground,
                  color: Colors.textGray800,
                },
                styles.input,
              ]}
              onBlur={onBlur}
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="xxxx_xx_xxxxxxxxxx"
              placeholderTextColor={Colors.dark}
            />
          )}
          name="userToken"
          rules={{required: true}}
        />

        <View style={{...styles.button, backgroundColor: Colors.primary}}>
          <Button
            color={Colors.white}
            title={isLoading ? 'Saving...' : 'Continue'}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    borderColor: 'transparent',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
});

export default SaveUserTokenScreen;
