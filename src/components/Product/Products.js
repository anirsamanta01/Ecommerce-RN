import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ProductsData } from '../data/ProductsData';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {ProductsData.map((item, index) => (
        <View key={index} style={styles.content}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.blackButton}
              onPress={() => navigation.navigate('ProductDetails')}
            >
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.orangeButton}
              onPress={() => navigation.navigate('Cart')}
            >
              <Text style={styles.buttonText}>Add To Cart </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
  },
  content: {
    borderWidth: 0.2,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    padding: 10,
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    elevation: 1,
    shadowOffset: { width: -0.2, height: 4 },
    shadowRadius: 6,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  desc: {
    fontSize: 16,
    marginTop: 4,
  },
  orangeButton: {
    borderColor: 'orange',
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: 'orange',
    width: '50%',
    borderRadius: 10,
    marginLeft: 5,
  },
  blackButton: {
    borderColor: '#000',
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: '#000',
    width: '50%',
    borderRadius: 10,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
