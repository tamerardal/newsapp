import React from 'react';
import {FlatList, ScrollView, Image} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import styles from './components/NewsCard/NewsCard.style';

const ScrollViewComp = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image source={{uri: bannerNews.imageUrl}} style={styles.bannerImage} />
      ))}
    </ScrollView> // ScrollView yapısı ile belirli alanın dışına taşan comp'lar sıralandı
  );
};

const NewsFlatList = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const renderKey = item => item.u_id.toString(); // itemların id'sini key olarak verdik.

  return (
    // FlatList ile verilerin sırayla yüklenmesi geçilen verilerin silinmesi sağlanır. yüzlerce veri ile çalışıldığında aşırı yüklenmenin önüne geçilir.
    <FlatList
      ListHeaderComponent={() => ScrollViewComp}
      keyExtractor={renderKey}
      data={news_data}
      renderItem={renderNews}
    />
  );
};

export default NewsFlatList;
