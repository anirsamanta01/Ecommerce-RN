import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.paymentText}>Payment Options</Text>
        <Text style={styles.amountText}>Total Amount: $ 902</Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.text}>Select Your Payment Method</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Online (CREDIT CARD | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 26,
    fontWeight: '700',
    color: 'gray',
  },
  amountText: {
    color: 'gray',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
