import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';
import { orderData } from '../data/Order_Data';

const MyOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.myOrder}>MyOrders</Text>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.dateOrderView}>
            <Text style={styles.text}>Order id: {orderData[0].id}</Text>
            <Text style={styles.text}>Date: {orderData[0].orderDate}</Text>
          </View>
          <Text style={styles.text}>
            Product Name: {orderData[0].productInfo.name}{' '}
          </Text>
          <Text style={styles.text}>
            Total Amount:$ {orderData[0].totalAmount}{' '}
          </Text>
          <Text style={styles.text}>
            Payment Mode: {orderData[0].paymentMode}{' '}
          </Text>
          <View style={styles.orderStatusViewText}>
            <Text style={[styles.text, {fontWeight: '700'}]}>
              Order Status: {orderData[0].status}{' '}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  myOrder: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    padding: 12,
    backgroundColor: '#fff',
  },
  dateOrderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.7,
  },
  text: {
    fontSize: 16,
    marginBottom: 8
  },
  orderStatusViewText: {
    borderTopWidth: 0.7,
    borderColor: 'gray'
  }
});
