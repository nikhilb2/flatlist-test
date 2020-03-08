import React from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { getFontSize } from '../src/utility'



const ImageCard = (props) => {
  const { image } = props
  return(
    <View style={styles.imageHolder}>
      <Image source={image} style={styles.image} resizeMode={ "cover"} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    ...getFontSize().imageCard,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%'
  },
  imageHolder: {
    ...getFontSize().imageHolder,
    borderColor: '#D8D8D8',
    borderWidth: 1.5

  }
})

export default ImageCard
