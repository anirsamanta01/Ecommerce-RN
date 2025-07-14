import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { userData } from '../data/userData';

const Profile = () => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [phone, setPhone] = useState(userData.phone);

  return (
    <View style={styles.container}>
      <Image source={userData.image} style={styles.image} />
      <Text style={styles.text}>Change Your Profile</Text>
      <TextInput
        name="username"
        style={styles.input}
        value={name}
        placeholder={'Enter Your Name'}
        onChangeText={text => setName(text)}
      />
      <TextInput
        name="email"
        style={styles.input}
        value={email}
        placeholder={'Enter Your Email'}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        name="password"
        style={styles.input}
        value={password}
        secureTextEntry
        placeholder={'Enter Your Password'}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        name="address"
        style={styles.input}
        value={address}
        placeholder={'Enter Your Address'}
        onChangeText={text => setAddress(text)}
      />
      <TextInput
        name="city"
        style={styles.input}
        value={city}
        placeholder={'Enter Your City'}
        onChangeText={text => setCity(text)}
      />
      <TextInput
        name="phone"
        style={styles.input}
        value={phone}
        placeholder={'Enter Your Phone Number'}
        onChangeText={text => setPhone(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 12,
    width: '100%',
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    margin: 12,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  text: {
    fontSize: 16,
    color: 'red',
  },
});
