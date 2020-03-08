import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import theme from '../src/theme'
import { getFontSize } from '../src/utility'
const { height } = Dimensions.get('window')



const Header = () => {

  return(
    <React.Fragment>
      <View style={styles.container}>

        <Text style={styles.headerText}>Pictures</Text>

      </View>
    </React.Fragment>

  )
}

const styles = StyleSheet.create({
  container: {
    //marginTop: -24.4,
    width: '100%',
    height: height === 812 ? 115-19.5 + 20 : 115-19.5,
    position: 'relative',
    borderColor: '#707070',
    borderBottomWidth: .5,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerText: {
    ...getFontSize().headerText
  }
})

export default Header
