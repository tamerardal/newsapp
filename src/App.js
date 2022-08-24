import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import NewsFlatList from './components/NewsCard/NewsFlatList';
import styles from './components/NewsCard/NewsCard.style';

function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.appBar}>
        <Text style={styles.headerText}>NEWS</Text>
      </View>
      <NewsFlatList />
    </SafeAreaView>
  );
}

export default App;
