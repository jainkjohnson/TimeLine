import {
  StyleSheet,
  Dimensions
 } from 'react-native';
const { height, width } = Dimensions.get('window');
const heightForScroll = height * 0.90;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 10
  },
  search: {
    height: 30,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 0.7
  },
  searchButton: {
    flex: 0.3
  },
  scrollSection: {
    flex: 0.8,
    height: heightForScroll
  },
  resultImage: {
    height: 400
  },
  name: {
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  textInput: {

  }
})
module.exports = styles;
