import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home_Layout from '../Auth/Home_Layout';
import ProductDetails from '../Product/ProductDetails';
import Cart from '../screens/Cart';
import Checkout from '../Payment/Checkout';
import Profile from '../profile/Profile';
import MyOrder from '../myOrder/MyOrder';
import Notification from '../screens/Notification';
import AdminPanel from '../Admin/AdminPanel';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home_Layout}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyOrders" component={MyOrder} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Admin" component={AdminPanel} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
