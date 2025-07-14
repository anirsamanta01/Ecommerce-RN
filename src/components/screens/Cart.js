import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { CartData } from '../data/CartData';
import PriceTable from '../Cart/PriceTable';
import CartItem from '../Cart/CartItem';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <View style={styles.containter}>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? `You have ${cartItems?.length} item left in Your Cart.`
          : 'Oops! Your Cart is Empty!'}
      </Text>
      <View>
        {cartItems?.length > 0 && (
          <>
            <ScrollView>
              {cartItems?.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </ScrollView>
            <View>
              <PriceTable name={'Price'} price={900} />
              <PriceTable name={'Tax'} price={1} />
              <PriceTable name={'Shipping'} price={1} />
              <View style={styles.border}>
                <PriceTable name={'Grand Total'} price={902} />
              </View>
            </View>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 30,
    fontSize: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    padding: 5,
    margin: 15,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 30,
    margin: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
