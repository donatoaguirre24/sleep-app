import { createTheme } from '@shopify/restyle'
import { Platform } from 'react-native'

export const lightTheme = createTheme({
  colors: {
    black: '#000000',
    blue: '#32ADE6',
    gray: '#CCCCCC',
    secondaryGray: '#5E5E5E',
    green: '#0ECD9D',
    magenta: '#FF006A',
    orange: '#FFB347',
    purple: '#FF47EF',
    red: '#FF5747',
    white: '#FFFFFF',
    background: '#F2F2F2',
    text: '#1C1C1E',
    card: '#FFFFFF',
    cardShadow: '#CCCCCC',
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
      borderRadius: 8,
      padding: {
        phone: 's',
        tablet: 'm',
      },
    },
    elevated: {
      // Android (in this case elevation does not look good and is not customizable enough)
      borderColor: 'cardShadow',
      borderWidth: Platform.select({ android: 1, ios: 0 }),
      // iOS
      shadowColor: 'cardShadow',
      shadowOpacity: 0.5,
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
    card: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 18,
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
    secondaryGray: '#9E9E9E',
    text: '#E5E5E7',
    card: '#2A2A2A',
    cardShadow: '#2A2A2A',
  },
}

export type Theme = typeof lightTheme
