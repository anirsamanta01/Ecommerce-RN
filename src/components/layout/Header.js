import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Header = () => {
    const [searchText, setSearchText] = useState("")
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} value={searchText} onChangeText={(text)=>setSearchText(text)} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginTop: 25,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
  },
});
