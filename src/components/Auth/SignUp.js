import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import API from '../../api/userApi';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");

  const navigation = useNavigation();

   const handleRegister = async () => {
    try {
      const { data } = await API.post('/register', { name, email, password, address, city, country, phone });

      if (data) {
        Alert.alert('Success', data.message);
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Registration Failed', error || 'Server error');
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
      <TextInput placeholder="Enter Your Name" style={styles.input} value={name} onChangeText={(text)=>setName(text)} />
      <TextInput placeholder="Enter Your Email" style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} />
      <TextInput placeholder="Enter Your Password" style={styles.input} value={password} onChangeText={(text)=>setPassword(text)} />
      <TextInput placeholder="Enter Your Area Name" style={styles.input} value={address} onChangeText={(text)=>setAddress(text)} />
      <TextInput placeholder="Enter Your City" style={styles.input} value={city} onChangeText={(text)=>setCity(text)} />
        <TextInput placeholder="Enter Your Country" style={styles.input} value={country} onChangeText={(text)=>setCountry(text)} />
      <TextInput placeholder="Enter Your Phone Number" style={styles.input} value={phone} onChangeText={(text)=>setPhone(text)} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={styles.text}>Already have an account? Please</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpButtonText}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
    marginBottom: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
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
    marginTop: 5,
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
