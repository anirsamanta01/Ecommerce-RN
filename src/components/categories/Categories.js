import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { CategoriesData } from '../data/CategoriesData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Categories = () => {
  return (
    <View style={styles.container}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {CategoriesData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.iconTextContainer}>
          <Icon name={item.icon} style={styles.icon} size={22} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
     </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  iconTextContainer: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
  icon: {
    marginBottom: 5,
  },
});
