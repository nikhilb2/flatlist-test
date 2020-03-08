import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getFontSize } from '../src/utility'



const ImageCard = (props) => {
  const { image } = props
  return(
    <View style={styles.imageHolder} shadow>
      <Image source={image} style={styles.image} resizeMode={"cover"} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    ...getFontSize().imageCard
  },
  imageHolder: {
    ...getFontSize().imageHolder,
    borderColor: '#D8D8D8',
    borderWidth: 1.5

  }
})

export default ImageCard
