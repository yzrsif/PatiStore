import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View>
      <TextInput
        style={styles.container}
        placeholder="Ara..."
        onChangeText={props.onChange}
      />
    </View>
  );
};

export default SearchBar;
