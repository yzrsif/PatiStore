import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, View, Text} from 'react-native';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

import products_info from './products_info.json';

function App() {
  const renderProducts = ({item}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        margin: 1,
      }}>
      <Card products={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <SearchBar />
        <FlatList
          data={products_info}
          renderItem={renderProducts}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    color: 'purple',
    margin: 5,
  },
});

export default App;
