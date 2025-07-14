import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { userData } from '../data/userData';
import Icon from 'react-native-vector-icons/Entypo';
import { Card } from 'react-native-paper';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import OrderIcon from 'react-native-vector-icons/FontAwesome';
import NotiIcon from 'react-native-vector-icons/Ionicons';
import AdminPanelIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={userData.image} style={styles.image} />
        <Text style={styles.userText}>Hi, {userData.name} </Text>
        <View style={styles.phoneView}>
          <Icon name="old-phone" size={18} color={'red'} />
          <Text style={styles.phoneNumber}> {userData.phone} </Text>
        </View>
        <Text style={styles.emailAddrText}>email: {userData.email}</Text>
        <Text style={styles.emailAddrText}>
          {' '}
          {[userData.address, ', ', userData.city]}{' '}
        </Text>
      </View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.accountView}>
            <Text style={styles.accountText}>Account Settings</Text>
          </View>
          <TouchableOpacity
            style={styles.textIcon}
            onPress={() => navigation.navigate('Profile')}
          >
            <ProfileIcon name="profile" size={18} />
            <Text style={styles.cardText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textIcon}
            onPress={() => navigation.navigate('MyOrders')}
          >
            <OrderIcon name="reorder" size={18} />
            <Text style={styles.cardText}>Your Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textIcon}
            onPress={() => navigation.navigate('Notification')}
          >
            <NotiIcon name="notifications-outline" size={18} />
            <Text style={styles.cardText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textIcon} onPress={()=>navigation.navigate('Admin')}>
            <AdminPanelIcon name="admin-panel-settings" size={18} />
            <Text style={styles.cardText}>Admin Panel</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  phoneView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 16,
    marginLeft: 5,
  },
  emailAddrText: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginTop: 20,
    margin: 12,
  },
  accountText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 8,
  },
  accountView: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 4,
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  cardText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
