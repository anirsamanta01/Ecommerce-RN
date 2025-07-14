import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './src/components/navigation/AuthNavigation';
import HomeNavigation from './src/components/navigation/HomeNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [user, setUser] = useState(false);

  const checkUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token', token);
      if (token != null) {
        setUser(true);
      }
    } catch (e) {
      console.log('errr', e);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <NavigationContainer>
      {user ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default App;
