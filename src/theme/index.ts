import { createTheme } from '@shopify/restyle'
import { Platform } from 'react-native'

export const lightTheme = createTheme({
  colors: {
    purpleLight: '#9B6DFF',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',
    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',
    black: '#000000',
    gray: '#E2E8F0',
    white: '#FFFFFF',
    background: '#FAFAFA',
    foreground: '#000000',
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
      bg: 'purpleLight',
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
      shadowOpacity: 0.4,
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
      lineHeight: 32,
      color: 'foreground',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'foreground',
    },
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      color: 'foreground',
    },
  },
})

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#111111',
    foreground: '#FFFFFF',
  },
}

export type Theme = typeof lightTheme
