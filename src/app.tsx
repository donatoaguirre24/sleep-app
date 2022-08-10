import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'

import { Router } from '@/navigation'
import { darkTheme, lightTheme } from '@/theme'

export function App() {
  const appearance = useColorScheme()
  const isDarkMode = appearance === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router isDarkMode={isDarkMode} />
    </ThemeProvider>
  )
}
