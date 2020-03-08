import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import theme from './theme'

export const getStyling = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
        imageCard: {
          width: 340 - 3,
          height: 118 - 3
        },
        imageList: {
          marginLeft: 17,
          marginRight: 18,
          marginTop: 19
        },
        imageHolder: {
          marginBottom: 12,
          borderColor: '#D8D8D8',
          borderWidth: 1.5
        },
        headerText: {
          fontFamily: 'heebo-bold',
          fontSize: 34,
          lineHeight: 41,
          letterSpacing: 0.41,
          marginLeft: 16.5,
          marginBottom: 3
        },
        headerContainer: {
          height: 95.5
        }
      }
    case 736:
    return {
      imageCard: {
        width: 340 - 3,
        height: 118 - 3
      },
      imageList: {
        marginLeft: 17,
        marginRight: 18,
        marginTop: 19
      },
      imageHolder: {
        marginBottom: 12,
        borderColor: '#D8D8D8',
        borderWidth: 1.5
      },
      headerText: {
        fontFamily: 'heebo-bold',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41,
        marginLeft: 16.5,
        marginBottom: 3
      },
      headerContainer: {
        height: 95.5
      }
    }
    case 896:
    return {
      imageCard: {
        width: '100%',
        height: '100%'
      },
      imageList: {
        marginLeft: 17,
        marginRight: 18,
        marginTop: 19
      },
      imageHolder: {
        marginBottom: 12,
        borderColor: '#D8D8D8',
        borderWidth: 1.5
      },
      headerText: {
        fontFamily: 'heebo-bold',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41,
        marginLeft: 16.5,
        marginBottom: 3
      },
      headerContainer: {
        height: 115.5
      }
    }
    case 812:
    return {
      imageCard: {
        width: 340 - 3,
        height: 118 - 3
      },
      imageList: {
        marginLeft: 17,
        marginRight: 18,
        marginTop: 19
      },
      imageHolder: {
        marginBottom: 12,
        borderColor: '#D8D8D8',
        borderWidth: 1.5
      },
      headerText: {
        fontFamily: 'heebo-bold',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41,
        marginLeft: 16.5,
        marginBottom: 3
      },
      headerContainer: {
        height: 115.5
      }
    }
    default:
    return {
      imageCard: {
        width: 340 - 3,
        height: 118 - 3
      },
      imageList: {
        marginLeft: 17,
        marginRight: 18,
        marginTop: 19
      },
      imageHolder: {
        marginBottom: 12,
        borderColor: '#D8D8D8',
        borderWidth: 1.5
      },
      headerText: {
        fontFamily: 'heebo-bold',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41,
        marginLeft: 16.5,
        marginBottom: 3
      },
      headerContainer: {
        height: 95.5
      }
    }
  }
}
