import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

// NewsCard adında component oluşturuldu ve news adında parametre verildi.

const NewsCard = ({news}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageUrl} source={{uri: news.imageUrl}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
