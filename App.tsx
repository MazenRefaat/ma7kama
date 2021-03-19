/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {I18nManager, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/screens/LoginScreen';
import {RegisterScreen} from './src/screens/RegisterScreen';
import {ScreenNames, Screens} from './src/screens';

const AuthStack = createStackNavigator();
const App: React.FC = () => {
  I18nManager.forceRTL(true);
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{headerShown: false}}
        mode="card"
        headerMode="float">
        <AuthStack.Screen name={Screens.Login} component={LoginScreen} />
        <AuthStack.Screen name={Screens.Register} component={RegisterScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
