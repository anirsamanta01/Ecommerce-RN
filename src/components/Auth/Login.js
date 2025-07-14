import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import API from '../../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await API.post('/login', { email, password });

      if (data?.success) {
        await AsyncStorage.setItem('token', data.token);
        Alert.alert('Login Successful');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', data.message || 'Login failed');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Login Failed', error || 'Server error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/loginImg.png')}
          style={styles.image}
        />
      </View>
      <TextInput
        placeholder="Enter Your Email"
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Enter Your Password"
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>Not a User yet? Please</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpButtonText}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  signUpButtonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
