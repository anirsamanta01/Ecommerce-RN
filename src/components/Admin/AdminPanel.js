import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';

const AdminPanel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.adminViewWrapper}>
        <Text style={styles.adminText}>Admin Dashboard</Text>
      </View>
      <TouchableOpacity style={styles.viewWrapper}>
        <Icon name="reorder" size={18} />
        <Text style={styles.text}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewWrapper}>
        <Icon2 name="category" size={18} />
        <Text style={styles.text}>Manage Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewWrapper}>
        <Icon name="reorder" size={18} />
        <Text style={styles.text}>Manage Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewWrapper}>
        <Icon name="users" size={18} />
        <Text style={styles.text}>Manage Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewWrapper}>
        <Icon name="reorder" size={18} />
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 12,
  },
  viewWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    shadowColor: 'gray',
    elevation: 3,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  adminText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  adminViewWrapper: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#000',
    marginBottom: 20,
  },
});
