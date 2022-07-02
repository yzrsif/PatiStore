import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
  },
  price: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  inStock: {
    fontSize: 15,
    color: 'red',
    marginLeft: 10,
  },
});
