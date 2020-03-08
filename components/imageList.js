import React from 'react'
import { FlatList, View } from 'react-native'
import ImageCard from './imageCard'

const ImageList = (props) => {
  const { data, style } = props

const _keyExtractor = (item, i) => `${'key' + i  }`

const _renderItem = ({item}) => {
  return (
    <ImageCard image={item} />
    )}

return(
  <View>
    <FlatList
      data={data}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      style={style ? style : {} }
      showsVerticalScrollIndicator={false}
    />
  </View>
  )
}

export default ImageList
