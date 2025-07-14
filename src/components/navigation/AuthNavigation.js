import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import Home_Layout from '../Auth/Home_Layout';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Home"
        component={Home_Layout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
