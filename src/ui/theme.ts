import { createTheme } from '@shopify/restyle'
import { normalize } from './screen'

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
      // Android
      elevation: 4,
      // iOS
      shadowColor: 'cardShadow',
      shadowOpacity: 0.5,
      shadowRadius: 4,
      shadowOffset: {
        height: 3,
        width: 1,
      },
    },
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: normalize(24),
      lineHeight: normalize(30),
      color: 'text',
    },
    subheader: {
      fontWeight: '600',
      fontSize: normalize(20),
      lineHeight: normalize(26),
      color: 'text',
    },
    card: {
      fontWeight: 'bold',
      fontSize: normalize(16),
      lineHeight: normalize(20),
      color: 'text',
    },
    defaults: {
      fontWeight: 'normal',
      fontSize: normalize(12),
      lineHeight: normalize(18),
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
