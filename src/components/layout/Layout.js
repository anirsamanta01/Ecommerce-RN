import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Categories from '../categories/Categories';
import Banner from '../banner/Banner';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Categories />
      <Banner />
      <View>{children}</View>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
