import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {Screens} from '../screens';

export const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Register</Text>
      </View>
    </SafeAreaView>
  );
};
