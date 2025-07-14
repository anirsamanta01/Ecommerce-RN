import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ProductsData } from '../data/ProductsData';
import CountButton from '../Cart/CountButton';

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <Image source={ProductsData[0].image} style={styles.image} />
      <View style={styles.contentWrapper}>
        <Text style={styles.text}>{ProductsData[0].name}</Text>
        <Text style={styles.text}>Price: {ProductsData[0].price} </Text>
        <Text style={styles.desc}>{ProductsData[0].otherDetails}</Text>
        <View style={styles.buttonAddContainer}>
          <TouchableOpacity
            style={styles.button}
            disabled={ProductsData[0]?.quantity <= 0}
          >
            <Text style={styles.buttonText}>
              {ProductsData[0]?.quantity > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
            </Text>
          </TouchableOpacity>
          <CountButton />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  contentWrapper: {
    backgroundColor: 'lightgray',
    padding: 15,
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5,
  },
  desc: {
    fontSize: 16,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
