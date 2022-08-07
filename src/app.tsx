import { ThemeProvider, useTheme } from '@shopify/restyle'
import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Card, Text } from '@/components'
import { strings } from '@/locales'
import { darkTheme, lightTheme, Theme } from '@/theme'

export function App() {
  const { colors } = useTheme<Theme>()
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{ backgroundColor: colors.background }}>
        <Card marginTop="l" marginVertical="m" borderRadius={8} variant="elevated">
          <Text variant="header">{strings.headerExample}</Text>
          <Text>{strings.bodyExample}</Text>
        </Card>
      </SafeAreaView>
    </ThemeProvider>
  )
}
