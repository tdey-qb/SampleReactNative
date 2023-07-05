import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './containers/home/HomeScreen';
import SettingsScreen from './containers/settings/SettingsScreen';
import {Platform, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreProvider} from './state/context';
import useUserToken from './hooks/useUserToken';
import SaveUserTokenScreen from './containers/login/SaveUserTokenScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
  const homeTabIcon = ({color}: any) => {
    return <Icon name={'ios-home'} size={25} color={color} />;
  };
  const settingTabIcon = ({color}: any) => {
    return <Icon name={'ios-settings'} size={25} color={color} />;
  };

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: settingTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [userToken, isLoading] = useUserToken();

  /**
   * Set the status bar style
   */
  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  }, [isDarkMode]);

  return (
    <StoreProvider>
      <NavigationContainer
        theme={{
          dark: isDarkMode,
          colors: {
            text: isDarkMode ? Colors.light : Colors.dark,
            background: isDarkMode ? Colors.darker : Colors.lighter,
            primary: Colors.primary,
            border: Colors.border,
            card: Colors.card,
            notification: Colors.notification,
          },
        }}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isLoading && !userToken ? (
            <Stack.Screen name="LoginScreen" component={SaveUserTokenScreen} />
          ) : (
            <Stack.Screen
              name="HomeBase"
              options={{headerShown: false}}
              component={TabNavigation}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
