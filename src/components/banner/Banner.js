import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { BannerData } from '../data/BannerData';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (currentIndex + 1) % BannerData.length;
        scrollRef.current.scrollTo({
          x: nextIndex * (ITEM_WIDTH + 15),
          animated: true,
        });
        setCurrentIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {BannerData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.imageView}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageView: {
    overflow: 'hidden',
    marginLeft: 15,
    borderRadius: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 165,
    resizeMode: 'cover',
  },
});
