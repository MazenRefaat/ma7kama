/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {I18nManager, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './src/screens/LoginScreen';
import {RegisterScreen} from './src/screens/RegisterScreen';
import {ScreenNames, Screens} from './src/screens';
import {hide as hideSplashScreen} from 'react-native-bootsplash';

const AuthStack = createStackNavigator();

/**
 * Root Stack Navigator
 * |-- Login Screen
 * |-- Register Screen
 * |-- Main Screen -> Main component -> contexts -> Main Stack Navigator
 * |-- |-- home tabs -> Tab Navigator
 * |-- |-- |-- Court List
 * |-- |-- |-- Lawyers List
 * |-- |-- |-- My Account Screen
 */
const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => hideSplashScreen({fade: true}), 200);
  }, []);
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
