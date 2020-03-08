import * as React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import theme from '../src/theme'
import ImageList from '../components/imageList'
import Header from '../components/header'
import image1 from '../assets/images/001.jpeg'
import image2 from '../assets/images/002.jpeg'
import image3 from '../assets/images/003.jpeg'
import image4 from '../assets/images/004.jpeg'
import image5 from '../assets/images/005.jpeg'
import { getStyling } from '../src/utility'


const images = [image1, image2, image3, image4, image5]
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behaviour='position'>
        <Header />
        <ImageList data={images} style={styles.imageList} />
      </KeyboardAvoidingView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.primary.light,

  },
  imageList: {
    ...getStyling().imageList
  }
});
