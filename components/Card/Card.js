import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({products}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: products.imgURL}} />
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        <Text style={styles.inStock}>
          {products.inStock !== true ? 'STOKTA YOK' : null}
        </Text>
      </View>
    </View>
  );
};

export default Card;
