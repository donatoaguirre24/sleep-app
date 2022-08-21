import { ThemeProvider } from '@shopify/restyle'
import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

import { Router } from '@/navigation'
import { darkTheme, lightTheme } from '@/ui'

export function App() {
  const appearance = useColorScheme()
  const isDarkMode = appearance === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Router isDarkMode={isDarkMode} />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
