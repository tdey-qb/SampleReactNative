import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './containers/home/HomeScreen';
import SettingsScreen from './containers/settings/SettingsScreen';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreProvider} from './state/context';
import useUserToken from './hooks/useUserToken';
import SaveUserTokenScreen from './containers/login/SaveUserTokenScreen';
import {useTheme} from './hooks';
import {SafeAreaView} from 'react-native-safe-area-context';

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
  const {Layout, darkMode, NavigationTheme} = useTheme();
  const {colors} = NavigationTheme;
  const [userToken, isLoading] = useUserToken();

  return (
    <StoreProvider>
      <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
        <NavigationContainer theme={NavigationTheme}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {!isLoading && !userToken ? (
              <Stack.Screen
                name="LoginScreen"
                component={SaveUserTokenScreen}
              />
            ) : (
              <Stack.Screen
                name="HomeBase"
                options={{headerShown: false}}
                component={TabNavigation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
