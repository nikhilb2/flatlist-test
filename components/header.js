import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { getStyling } from '../src/utility'


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
    width: '100%',
    ...getStyling().headerContainer,
    position: 'relative',
    borderColor: '#707070',
    borderBottomWidth: .5,
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerText: {
    ...getStyling().headerText
  }
})

export default Header
