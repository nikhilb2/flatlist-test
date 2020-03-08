import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { getStyling } from '../src/utility'



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
    ...getStyling().imageCard,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%'
  },
  imageHolder: {
    ...getStyling().imageHolder,
  }
})

export default ImageCard
