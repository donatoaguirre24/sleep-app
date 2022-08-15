import { createTheme } from '@shopify/restyle'
import { Platform } from 'react-native'

export const lightTheme = createTheme({
  colors: {
    black: '#000000',
    cyan: '#4793FF',
    gray: '#CCCCCC',
    green: '#0ECD9D',
    orange: '#FFB347',
    purple: '#FF47EF',
    red: '#FF5747',
    white: '#FFFFFF',
    background: '#F2F2F2',
    text: '#1C1C1E',
    card: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    defaults: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      // Android (elevation does not look good and is not enough customizable)
      borderColor: 'gray',
      borderWidth: Platform.select({ android: 1, ios: 0 }),
      // iOS
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: {
        height: 3,
        width: 1,
      },
      shadowRadius: 4,
    },
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 30,
      color: 'text',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 20,
      lineHeight: 26,
      color: 'text',
    },
    defaults: {
      fontWeight: 'normal',
      fontSize: 12,
      lineHeight: 18,
      color: 'text',
    },
  },
})

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#010101',
    text: '#E5E5E7',
    card: '#1F1F1F',
  },
}

export type Theme = typeof lightTheme
