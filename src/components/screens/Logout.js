import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../api/userApi';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      await API.get('/logout');

      await AsyncStorage.removeItem('token');
      alert('User logged out!')
      navigation.replace('Login');
    } catch (error) {
      console.log('Logout error:', error);
      await AsyncStorage.removeItem('token');
      navigation.replace('Login');
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Icon
        name="exit-to-app"
        size={80}
        color="#FF5A5F"
        style={styles.logoutIcon}
      />
      <Text style={styles.title}>Are you sure you want to logout?</Text>
      <Text style={styles.subtitle}>
        You will need to log in again to access your account.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  logoutIcon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  logoutButton: {
    backgroundColor: '#FF5A5F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },
});
