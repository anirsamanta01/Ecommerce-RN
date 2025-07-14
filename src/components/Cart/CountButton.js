import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const CountButton = () => {
  const [count, setCount] = useState(0);
  const handleAddQty = () => {
    if (count === 10) {
      return alert('You cant add more than 10 quantity!');
    }
    setCount(count + 1);
  };
  const handleRemoveQty = () => {
    if (count <= 1) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={handleRemoveQty} style={styles.countButton}>
        <Text style={styles.number}>-</Text>
      </TouchableOpacity>
      <Text style={styles.number}>{count}</Text>
      <TouchableOpacity onPress={handleAddQty} style={styles.countButton}>
        <Text style={styles.number}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountButton;

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    backgroundColor: 'orange',
    padding: 5,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 5,
  },
  number: {
    marginRight: 10,
    fontSize: 16,
  },
});
