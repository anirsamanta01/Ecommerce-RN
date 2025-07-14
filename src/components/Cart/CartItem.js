import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CountButton from './CountButton';

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item?.image} style={styles.image} />
      </View>
      <View style={{ flex: 1, flexWrap: 'nowrap' }}>
        <Text style={styles.text}> {item?.name}</Text>
        <Text style={styles.text}>Price: {item?.price}</Text>
      </View>
      <CountButton />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
});
