import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { StoreProvider } from './state/context';
import HomeScreen from './containers/home/HomeScreen';
import SettingsScreen from './containers/settings/SettingsScreen';
import useCredentials from './hooks/useCredentials';
import SaveUserTokenScreen from './containers/login/SaveUserTokenScreen';
import { useTheme } from './hooks';
import './i18n';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
  const { t } = useTranslation(['common']);

  const homeTabIcon = ({ color }: any) => {
    return <Icon name={'ios-home'} size={25} color={color} />;
  };
  const settingTabIcon = ({ color }: any) => {
    return <Icon name={'ios-settings'} size={25} color={color} />;
  };

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name={t('common:tabs.home')}
        component={HomeScreen}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tab.Screen
        name={t('common:tabs.settings')}
        component={SettingsScreen}
        options={{
          tabBarIcon: settingTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const { darkMode, NavigationTheme } = useTheme();
  const { credentials, loading: isLoading } = useCredentials();

  return (
    <StoreProvider>
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoading && credentials && !credentials?.userToken ? (
            <Stack.Screen name="LoginScreen" component={SaveUserTokenScreen} />
          ) : (
            <Stack.Screen
              name="HomeBase"
              options={{ headerShown: false }}
              component={TabNavigation}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
