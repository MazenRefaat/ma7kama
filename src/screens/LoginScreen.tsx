import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {Screens} from '../screens';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>

        <Button
          title={Screens.Register}
          onPress={() => navigation.navigate(Screens.Register)}>
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
};
