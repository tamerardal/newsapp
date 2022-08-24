import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },
  safeAreaContainer: {
    backgroundColor: '#eceff1',
  },
  appBar: {
    backgroundColor: 'white',
  },
  imageUrl: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 5,
    color: 'black',
  },
  innerContainer: {
    padding: 8,
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
  },
});
