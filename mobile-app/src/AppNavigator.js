import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

/** screens */
import {
  Home,
  ValidateUrl,
  ValidateMessage,
  AuthorizedLinks,
  ValidateLinkResult,
  ValidateMessageResult,
} from './screens/index';
/** screens */
const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <AppStack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerBackTitleVisible: false,
          gestureEnabled: true,
        }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="ValidateLinkResult"
          component={ValidateLinkResult}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="ValidateUrl"
          component={ValidateUrl}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="ValidateMessage"
          component={ValidateMessage}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="AuthorizedLinks"
          component={AuthorizedLinks}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="ValidateMessageResult"
          component={ValidateMessageResult}
          options={{
            title: '',
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </>
  );
};

export default AppNavigator;
