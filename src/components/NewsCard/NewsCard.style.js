import {Dimensions, StyleSheet} from 'react-native';

// Componentlar'ı stillendirmek için stylesheet oluşturuldu.

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5, // Dışarıdan boşluk
    borderRadius: 5, // kenarları yumuşatma
  },
  safeAreaContainer: {
    backgroundColor: '#eceff1',
  },
  appBar: {
    backgroundColor: 'white',
  },
  imageUrl: {
    height: Dimensions.get('window').height / 4, // Dimension ile telefon ekranının boyutu alınır / 4 diyerek bunun 4'te 1'i kadar alan kaplaması için yükseklik veriilir
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
    padding: 8, // Component'ın child'ı ile arasındaki boşluk
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
